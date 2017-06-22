import {
  AfterContentInit,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  Renderer2
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
import { DndElementRefDirective } from "./dnd-element-ref.directive";

export interface DndDropEvent {
  event:DragEvent;
  dropEffect:DropEffect;
  isExternal:boolean;
  data?:any;
  index?:number;
}

@Directive( {
  selector: "[dndDropzone]"
} )
export class DndDropzoneDirective implements AfterContentInit {

  @Input()
  public dndDropzone?:string[];

  @Input()
  public dndEffectAllowed:EffectAllowed;

  @Input()
  public dndDisableIf:boolean = false;

  @Input()
  public dndAllowExternal:boolean = false;

  @Input()
  public dndHorizontal:boolean = false;

  @Input()
  public dndDragoverClass:string = "dndDragover";

  @Output()
  public readonly dndDragover:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public readonly dndDrop:EventEmitter<DndDropEvent> = new EventEmitter<DndDropEvent>();

  @ContentChild( DndElementRefDirective )
  private readonly dndPlaceholderRef?:DndElementRefDirective;

  private placeholder:Element | null = null;

  constructor( private elementRef:ElementRef,
               private renderer:Renderer2 ) {
  }

  public ngAfterContentInit():void {

    if( typeof this.dndPlaceholderRef !== "undefined" ) {

      this.placeholder = this.dndPlaceholderRef.elementRef.nativeElement as Element;
      this.placeholder.remove();
    }
  }

  private isDropAllowed( type?:string ):boolean {

    // dropzone is disabled -> deny it
    if( this.dndDisableIf === true ) {

      return false;
    }

    // if drag did not start from our directive
    // and external drag sources are not allowed -> deny it
    if( isExternalDrag() === true
      && this.dndAllowExternal === false ) {

      return false;
    }

    // no filtering by types -> allow it
    if( !this.dndDropzone ) {

      return true;
    }

    // no type set -> allow it
    if( !type ) {

      return true;
    }

    // if dropzone contains type -> allow it
    return this.dndDropzone.indexOf( type ) !== -1;
  }

  private checkAndUpdatePlaceholderPosition( event:DragEvent ):void {

    if( this.placeholder === null ) {

      return;
    }

    // make sure the placeholder is in the DOM
    if( this.placeholder.parentNode !== this.elementRef.nativeElement ) {

      this.renderer.appendChild( this.elementRef.nativeElement, this.placeholder );
    }

    // update the position if the event originates from a child element of the dropzone
    const directChild = getDirectChildElement( this.elementRef.nativeElement, event.target as Element );

    // early exit if no direct child or direct child is placeholder
    if( directChild === null
      || directChild === this.placeholder ) {

      return;
    }

    const positionPlaceholderBeforeDirectChild = shouldPositionPlaceholderBeforeElement( event, directChild, this.dndHorizontal );

    if( positionPlaceholderBeforeDirectChild ) {

      // do insert before only if necessary
      if( directChild.previousSibling !== this.placeholder ) {

        this.renderer.insertBefore( this.elementRef.nativeElement, this.placeholder, directChild );
      }

    }
    else {

      // do insert after only if necessary
      if( directChild.nextSibling !== this.placeholder ) {

        this.renderer.insertBefore( this.elementRef.nativeElement, this.placeholder, directChild.nextSibling );
      }
    }
  }

  private getPlaceholderIndex():number | undefined {

    if( this.placeholder === null ) {

      return undefined;
    }

    const element = this.elementRef.nativeElement as HTMLElement;

    return Array.prototype.indexOf.call( element.children, this.placeholder );
  }

  private cleanupDragoverState() {

    this.renderer.removeClass( this.elementRef.nativeElement, this.dndDragoverClass );

    if( this.placeholder !== null ) {

      this.placeholder.remove();
    }
  }

  @HostListener( "dragenter", [ "$event" ] )
  private onDragEnter( event:DndEvent ) {

    // check if another dropzone is activated
    if( event._dndDropzoneActive === true ) {

      this.cleanupDragoverState();
      return;
    }

    // set as active if the target element is inside this dropzone
    if( typeof event._dndDropzoneActive === "undefined" ) {

      const newTarget = document.elementFromPoint( event.clientX, event.clientY );

      if( this.elementRef.nativeElement.contains( newTarget ) ) {

        event._dndDropzoneActive = true;
      }
    }

    // check if this drag event is allowed to drop on this dropzone
    const type = getDndType( event );
    if( this.isDropAllowed( type ) === false ) {

      return;
    }

    // allow the dragenter
    event.preventDefault();
  }

  @HostListener( "dragover", [ "$event" ] )
  private onDragOver( event:DragEvent ) {

    // check if this drag event is allowed to drop on this dropzone
    const type = getDndType( event );
    if( this.isDropAllowed( type ) === false ) {

      return;
    }

    this.checkAndUpdatePlaceholderPosition( event );

    const dropEffect = getDropEffect( event, this.dndEffectAllowed );

    if( dropEffect === "none" ) {

      this.cleanupDragoverState();
      return;
    }

    // allow the dragover
    event.preventDefault();

    // set the drop effect
    setDropEffect( event, dropEffect );

    this.dndDragover.emit( event );

    this.renderer.addClass( this.elementRef.nativeElement, this.dndDragoverClass );

    event.stopPropagation();
  }

  @HostListener( "drop", [ "$event" ] )
  private onDrop( event:DragEvent ) {

    try {

      // check if this drag event is allowed to drop on this dropzone
      const type = getDndType( event );
      if( this.isDropAllowed( type ) === false ) {

        return;
      }

      const data:DragDropData = getDropData( event, isExternalDrag() );

      if( this.isDropAllowed( data.type ) === false ) {

        return;
      }

      // signal custom drop handling
      event.preventDefault();

      const dropEffect = getDropEffect( event );

      setDropEffect( event, dropEffect );

      if( dropEffect === "none" ) {

        return;
      }

      const dropIndex = this.getPlaceholderIndex();
      this.dndDrop.emit( {
        event: event,
        dropEffect: dropEffect,
        isExternal: isExternalDrag(),
        data: data.data,
        index: dropIndex
      } );

      event.stopPropagation();

    }
    finally {

      this.cleanupDragoverState();
    }
  }

  @HostListener( "dragleave", [ "$event" ] )
  private onDragLeave( event:DndEvent ) {

    // check if still inside this dropzone and not yet handled by another dropzone
    if( typeof event._dndDropzoneActive === "undefined" ) {

      const newTarget = document.elementFromPoint( event.clientX, event.clientY );

      if( this.elementRef.nativeElement.contains( newTarget ) ) {

        event._dndDropzoneActive = true;
        return;
      }
    }

    this.cleanupDragoverState();

    // cleanup drop effect when leaving dropzone
    setDropEffect( event, "none" );
  }
}
