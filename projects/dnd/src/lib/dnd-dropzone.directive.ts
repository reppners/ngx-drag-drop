import {
  AfterViewInit, ContentChild, Directive, ElementRef, EventEmitter, HostListener, Input, NgZone, OnDestroy, OnInit, Output, Renderer2
} from "@angular/core";
import {
  DndEvent,
  DragDropData,
  getDirectChildElement,
  getDropData,
  shouldPositionPlaceholderBeforeElement
} from "./dnd-utils";
import { getDndType, getDropEffect, isExternalDrag, setDropEffect } from "./dnd-state";
import { DropEffect, EffectAllowed } from "./dnd-types";

export interface DndDropEvent {
  event:DragEvent;
  dropEffect:DropEffect;
  isExternal:boolean;
  data?:any;
  index?:number;
  type?:any;
}

@Directive({selector: "[dndPlaceholderRef]"})
export class DndPlaceholderRefDirective implements OnInit {
  constructor(public readonly elementRef: ElementRef<HTMLElement>) {}
  
  ngOnInit() {
    // placeholder has to be "invisible" to the cursor, or it would interfere with the dragover detection for the same dropzone
    this.elementRef.nativeElement.style.pointerEvents = 'none';
  }
}

@Directive({selector: "[dndDropzone]"})
export class DndDropzoneDirective implements AfterViewInit, OnDestroy {
  @Input()
  dndDropzone?:string[] | "" = "";

  @Input()
  dndEffectAllowed:EffectAllowed = "uninitialized";

  @Input()
  dndAllowExternal:boolean = false;

  @Input()
  dndHorizontal:boolean = false;

  @Input()
  dndDragoverClass:string = "dndDragover";

  @Input()
  dndDropzoneDisabledClass = "dndDropzoneDisabled";

  @Output()
  readonly dndDragover:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  readonly dndDrop:EventEmitter<DndDropEvent> = new EventEmitter<DndDropEvent>();

  @ContentChild(DndPlaceholderRefDirective)
  private readonly dndPlaceholderRef?: DndPlaceholderRefDirective;

  private placeholder:Element | null = null;

  private disabled:boolean = false;

  private readonly dragEnterEventHandler:(event:DragEvent) => void = (event:DragEvent) => this.onDragEnter(event);
  private readonly dragOverEventHandler:(event:DragEvent) => void = (event:DragEvent) => this.onDragOver(event);
  private readonly dragLeaveEventHandler:(event:DragEvent) => void = (event:DragEvent) => this.onDragLeave(event);

  @Input()
  set dndDisableIf(value:boolean) {
    this.disabled = value;

    if (this.disabled) {
      this.renderer.addClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
    }
    else {
      this.renderer.removeClass(this.elementRef.nativeElement, this.dndDropzoneDisabledClass);
    }
  }

  @Input()
  set dndDisableDropIf(value:boolean) {
    this.dndDisableIf = value;
  }

  constructor(private ngZone:NgZone,
    private elementRef:ElementRef,
    private renderer:Renderer2) {}

  ngAfterViewInit(): void {
    this.placeholder = this.tryGetPlaceholder();

    this.removePlaceholderFromDOM();

    this.ngZone.runOutsideAngular(() => {
      this.elementRef.nativeElement.addEventListener("dragenter", this.dragEnterEventHandler);
      this.elementRef.nativeElement.addEventListener("dragover", this.dragOverEventHandler);
      this.elementRef.nativeElement.addEventListener("dragleave", this.dragLeaveEventHandler);
    });
  }

  ngOnDestroy(): void {
    this.elementRef.nativeElement.removeEventListener("dragenter", this.dragEnterEventHandler);
    this.elementRef.nativeElement.removeEventListener("dragover", this.dragOverEventHandler);
    this.elementRef.nativeElement.removeEventListener("dragleave", this.dragLeaveEventHandler);
  }

  onDragEnter(event: DndEvent) {
    // check if another dropzone is activated
    if (event._dndDropzoneActive === true) {
      this.cleanupDragoverState();
      return;
    }

    // set as active if the target element is inside this dropzone
    if (event._dndDropzoneActive == null) {
      const newTarget = document.elementFromPoint( event.clientX, event.clientY );

      if (this.elementRef.nativeElement.contains(newTarget)) {
        event._dndDropzoneActive = true;
      }
    }

    // check if this drag event is allowed to drop on this dropzone
    const type = getDndType(event);
    if (!this.isDropAllowed(type)) {
      return;
    }

    // allow the dragenter
    event.preventDefault();
  }

  onDragOver(event: DragEvent) {
    // With nested dropzones, we want to ignore this event if a child dropzone
    // has already handled a dragover.  Historically, event.stopPropagation() was
    // used to prevent this bubbling, but that prevents any dragovers outside the
    // ngx-drag-drop component, and stops other use cases such as scrolling on drag.
    // Instead, we can check if the event was already prevented by a child and bail early.
    if (event.defaultPrevented) {
      return;
    }

    // check if this drag event is allowed to drop on this dropzone
    const type = getDndType(event);
    if (!this.isDropAllowed(type)) {
      return;
    }

    this.checkAndUpdatePlaceholderPosition(event);

    const dropEffect = getDropEffect(event, this.dndEffectAllowed);

    if (dropEffect === "none") {
      this.cleanupDragoverState();
      return;
    }

    // allow the dragover
    event.preventDefault();

    // set the drop effect
    setDropEffect(event, dropEffect);

    this.dndDragover.emit(event);

    this.renderer.addClass(this.elementRef.nativeElement, this.dndDragoverClass);
  }

  @HostListener("drop", [ "$event" ])
  onDrop(event: DragEvent) {
    try {
      // check if this drag event is allowed to drop on this dropzone
      const type = getDndType(event);
      if (!this.isDropAllowed(type)) {
        return;
      }

      const data:DragDropData = getDropData(event, isExternalDrag());

      if (!this.isDropAllowed(data.type)) {
        return;
      }

      // signal custom drop handling
      event.preventDefault();

      const dropEffect = getDropEffect(event);

      setDropEffect(event, dropEffect);

      if (dropEffect === "none") {
        return;
      }

      const dropIndex = this.getPlaceholderIndex();

      // if for whatever reason the placeholder is not present in the DOM but it should be there
      // we don't allow/emit the drop event since it breaks the contract
      // seems to only happen if drag and drop is executed faster than the DOM updates
      if (dropIndex === -1) {
        return;
      }

      this.dndDrop.emit({
        event: event,
        dropEffect: dropEffect,
        isExternal: isExternalDrag(),
        data: data.data,
        index: dropIndex,
        type: type,
      });

      event.stopPropagation();
    }
    finally {
      this.cleanupDragoverState();
    }
  }

  onDragLeave(event: DndEvent) {
    event.preventDefault();
    event.stopPropagation();

    // check if still inside this dropzone and not yet handled by another dropzone
    if (event._dndDropzoneActive == null) {
      const newTarget = document.elementFromPoint(event.clientX, event.clientY);
      
      if (this.elementRef.nativeElement.contains(newTarget)) {
        event._dndDropzoneActive = true;
        return;
      }
    }

    this.cleanupDragoverState();

    // cleanup drop effect when leaving dropzone
    setDropEffect(event, "none");
  }

  private isDropAllowed(type?: string): boolean {
    // dropzone is disabled -> deny it
    if (this.disabled) {
      return false;
    }

    // if drag did not start from our directive
    // and external drag sources are not allowed -> deny it
    if (isExternalDrag() && !this.dndAllowExternal) {
      return false;
    }

    // no filtering by types -> allow it
    if (!this.dndDropzone) {
      return true;
    }

    // no type set -> allow it
    if (!type) {
      return true;
    }

    if (!Array.isArray(this.dndDropzone)) {
      throw new Error ("dndDropzone: bound value to [dndDropzone] must be an array!");
    }

    // if dropzone contains type -> allow it
    return this.dndDropzone.indexOf(type) !== -1;
  }

  private tryGetPlaceholder(): Element | null {
    if (typeof this.dndPlaceholderRef !== "undefined") {
      return this.dndPlaceholderRef.elementRef.nativeElement as Element;
    }

    // TODO nasty workaround needed because if ng-container / template is used @ContentChild() or DI will fail because
    // of wrong context see angular bug https://github.com/angular/angular/issues/13517
    return this.elementRef.nativeElement.querySelector("[dndPlaceholderRef]");
  }

  private removePlaceholderFromDOM() {
    if(this.placeholder !== null
      && this.placeholder.parentNode !== null) {
      this.placeholder.parentNode.removeChild(this.placeholder);
    }
  }

  private checkAndUpdatePlaceholderPosition(event:DragEvent): void {
    if (this.placeholder === null) {
      return;
    }

    // make sure the placeholder is in the DOM
    if(this.placeholder.parentNode !== this.elementRef.nativeElement) {
      this.renderer.appendChild(this.elementRef.nativeElement, this.placeholder);
    }

    // update the position if the event originates from a child element of the dropzone
    const directChild = getDirectChildElement(this.elementRef.nativeElement, event.target as Element);

    // early exit if no direct child or direct child is placeholder
    if (directChild === null
      || directChild === this.placeholder) {
      return;
    }

    const positionPlaceholderBeforeDirectChild = shouldPositionPlaceholderBeforeElement(event, directChild, this.dndHorizontal);

    if (positionPlaceholderBeforeDirectChild) {
      // do insert before only if necessary
      if (directChild.previousSibling !== this.placeholder) {
        this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild);
      }
    }
    else {
      // do insert after only if necessary
      if (directChild.nextSibling !== this.placeholder) {
        this.renderer.insertBefore(this.elementRef.nativeElement, this.placeholder, directChild.nextSibling);
      }
    }
  }

  private getPlaceholderIndex(): number | undefined {
    if (this.placeholder === null) {
      return undefined;
    }

    const element = this.elementRef.nativeElement as HTMLElement;

    return Array.prototype.indexOf.call(element.children, this.placeholder);
  }

  private cleanupDragoverState() {
    this.renderer.removeClass(this.elementRef.nativeElement, this.dndDragoverClass);

    this.removePlaceholderFromDOM();
  }
}
