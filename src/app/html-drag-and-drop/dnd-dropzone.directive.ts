import { Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2 } from "@angular/core";
import {
  DndEvent,
  DragDropData,
  DropEffect,
  getDirectChildElement,
  getDropData,
  shouldPositionPlaceholderBeforeElement
} from "./dnd-utils";
import { dndState, getDropEffect, getItemType, setDropEffect } from "./dnd-state";

export interface DndDropEvent {
  event:DragEvent;
  data:any;
  index?:number;
}

@Directive( {
  selector: "[dndDropzone]"
} )
export class DndDropzoneDirective implements OnInit {

  @Input()
  public dndDropzone?:string[];

  @Input()
  public dndEffectAllowed:DropEffect;

  @Input()
  public dndDisableIf:boolean = false;

  @Input()
  public dndAllowExternal:boolean = false;

  @Input()
  public dndHorizontal:boolean = false;

  @Input()
  public dndPlaceholder:Element | null = null;

  @Input()
  public dndDragoverClass:string = "dndDragover";

  @Output()
  public dndDragover:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public dndDrop:EventEmitter<DndDropEvent> = new EventEmitter<DndDropEvent>();

  constructor( private elementRef:ElementRef,
               private renderer:Renderer2 ) {
  }

  public ngOnInit():void {

    if ( this.dndPlaceholder !== null ) {

      this.dndPlaceholder.remove();
      this.dndPlaceholder = this.dndPlaceholder.cloneNode( true ) as Element;
    }
  }

  private isDropAllowed( type?:string ):boolean {

    // dropzone is disabled -> deny it
    if ( this.dndDisableIf === true ) {

      return false;
    }

    // if drag did not start from our directive
    // and external drag sources are not allowed -> deny it
    if ( dndState.isDragging === false
      && this.dndAllowExternal === false ) {

      return false;
    }

    // no filtering by types -> allow it
    if ( !this.dndDropzone ) {

      return true;
    }

    // get optional item type
    if ( !type ) {

      // no type set -> allow it
      return true;
    }

    // if dropzone contains type -> allow it
    return this.dndDropzone.indexOf( type ) !== -1;
  }

  private checkAndUpdatePlaceholderPosition( event:DragEvent ):void {

    if ( this.dndPlaceholder === null ) {

      return;
    }

    // make sure the placeholder is in the DOM
    if ( this.dndPlaceholder.parentNode !== this.elementRef.nativeElement ) {

      this.renderer.appendChild( this.elementRef.nativeElement, this.dndPlaceholder );
    }

    // update the position if the event originates from a child element of the dropzone
    const directChild = getDirectChildElement( this.elementRef.nativeElement, event.target as Element );

    // early exit if no direct child or direct child is placeholder
    if ( directChild === null
      || directChild === this.dndPlaceholder ) {

      return;
    }

    const positionPlaceholderBeforeDirectChild = shouldPositionPlaceholderBeforeElement( event, directChild, this.dndHorizontal );

    if ( positionPlaceholderBeforeDirectChild ) {

      // do insert before only if necessary
      if ( directChild.previousSibling !== this.dndPlaceholder ) {

        this.renderer.insertBefore( this.elementRef.nativeElement, this.dndPlaceholder, directChild );
      }

    }
    else {

      // do insert after only if necessary
      if ( directChild.nextSibling !== this.dndPlaceholder ) {

        this.renderer.insertBefore( this.elementRef.nativeElement, this.dndPlaceholder, directChild.nextSibling );
      }
    }
  }

  private getPlaceholderIndex():number | undefined {

    if ( this.dndPlaceholder === null ) {

      return undefined;
    }

    const element = this.elementRef.nativeElement as HTMLElement;

    return Array.prototype.indexOf.call( element.childNodes, this.dndPlaceholder );
  }

  private cleanupDragoverState() {

    this.renderer.removeClass( this.elementRef.nativeElement, this.dndDragoverClass );

    if ( this.dndPlaceholder !== null ) {

      this.dndPlaceholder.remove();
    }
  }

  @HostListener( "dragenter", [ "$event" ] )
  private onDragEnter( event:DragEvent ) {

    // check if this drag event is allowed to drop on this dropzone
    const type = getItemType( event );
    if ( this.isDropAllowed( type ) === false ) {

      return;
    }

    // allow the dragenter
    event.preventDefault();
  }

  @HostListener( "dragover", [ "$event" ] )
  private onDragOver( event:DragEvent ) {

    // check if this drag event is allowed to drop on this dropzone
    const type = getItemType( event );
    if ( this.isDropAllowed( type ) === false ) {

      return;
    }

    this.checkAndUpdatePlaceholderPosition( event );

    const dropEffect = getDropEffect( event, this.dndEffectAllowed );

    if ( dropEffect === "none" ) {

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
      const type = getItemType( event );
      if ( this.isDropAllowed( type ) === false ) {

        return;
      }

      const data:DragDropData = getDropData( event );

      if ( this.isDropAllowed( data.type ) === false ) {

        return;
      }

      // signal custom drop handling
      event.preventDefault();

      const dropEffect = getDropEffect( event );

      setDropEffect( event, dropEffect );

      if ( dropEffect === "none" ) {

        return;
      }

      const dropIndex = this.getPlaceholderIndex();
      this.dndDrop.emit( {
        event: event,
        data: data.data,
        index: dropIndex
      } );

      event.stopPropagation();

    }finally {

      this.cleanupDragoverState();
    }
  }

  @HostListener( "dragleave", [ "$event" ] )
  private onDragLeave( event:DndEvent ) {

    // check if still inside this dropzone and not yet handled by another dropzone
    if ( typeof event._dndDragLeaveHandled === "undefined" ) {

      const newTarget = document.elementFromPoint( event.clientX, event.clientY );

      if ( this.elementRef.nativeElement.contains( newTarget ) ) {

        event._dndDragLeaveHandled = true;
        return;
      }
    }

    this.cleanupDragoverState();
  }
}
