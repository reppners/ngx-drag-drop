import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
  Renderer2
} from "@angular/core";
import { calculateDragImageOffset, DndDragImageOffsetFunction, DndEvent, setDragData, setDragImage } from "./dnd-utils";
import { DndHandleDirective } from "./dnd-handle.directive";
import { dndState, endDrag, getDndInitialIndex, startDrag } from "./dnd-state";
import { EffectAllowed } from "./dnd-types";

export interface DndDragEvent extends DragEvent {
  initialIndex:number | undefined;
}

@Directive( {
  selector: "[dndDragImageRef]"
} )
export class DndDragImageRefDirective {

  constructor( parent:DndDraggableDirective,
               elementRef:ElementRef ) {

    parent.registerDragImage( elementRef );
  }
}

@Directive( {
  selector: "[dndDraggable]"
} )
export class DndDraggableDirective {

  @Input()
  dndDraggable:any;

  @Input()
  dndEffectAllowed:EffectAllowed = "copy";

  @Input()
  dndType?:string;

  @Input()
  dndIndex?: number;

  @Input()
  dndDraggingClass = "dndDragging";

  @Input()
  dndDraggingSourceClass = "dndDraggingSource";

  @Input()
  dndDraggableDisabledClass = "dndDraggableDisabled";

  @Input()
  dndDragImageOffsetFunction:DndDragImageOffsetFunction = calculateDragImageOffset;

  @Output()
  readonly dndStart:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  readonly dndEnd:EventEmitter<DndDragEvent> = new EventEmitter<DndDragEvent>();

  @Output()
  readonly dndMoved:EventEmitter<DndDragEvent> = new EventEmitter<DndDragEvent>();

  @Output()
  readonly dndCopied:EventEmitter<DndDragEvent> = new EventEmitter<DndDragEvent>();

  @Output()
  readonly dndLinked:EventEmitter<DndDragEvent> = new EventEmitter<DndDragEvent>();

  @Output()
  readonly dndCanceled:EventEmitter<DndDragEvent> = new EventEmitter<DndDragEvent>();

  @HostBinding( "attr.draggable" )
  draggable = true;

  private dndHandle?:DndHandleDirective;

  private dndDragImageElementRef?:ElementRef;

  private dragImage:Element;

  @Input()
  set dndDisableIf( value:boolean ) {

    this.draggable = !value;

    if( this.draggable ) {

      this.renderer.removeClass( this.elementRef.nativeElement, this.dndDraggableDisabledClass );
    }
    else {

      this.renderer.addClass( this.elementRef.nativeElement, this.dndDraggableDisabledClass );
    }
  }

  constructor( private elementRef:ElementRef,
               private renderer:Renderer2 ) {
  }

  @HostListener( "dragstart", [ "$event" ] )
  onDragStart( event:DndEvent ) {

    if( this.draggable === false ) {

      return false;
    }

    // check if there is dnd handle and if the dnd handle was used to start the drag
    if( typeof this.dndHandle !== "undefined"
      && typeof event._dndUsingHandle === "undefined" ) {

      return false;
    }

    // initialize global state
    startDrag( event, this.dndEffectAllowed, this.dndType, this.dndIndex );

    setDragData( event, {data: this.dndDraggable, type: this.dndType}, dndState.effectAllowed );

    this.determineDragImage();

    // set dragging css class prior to setDragImage so styles are applied before
    // TODO breaking change: add class to elementRef rather than drag image which could be another element
    this.renderer.addClass( this.dragImage, this.dndDraggingClass );

    // set custom dragimage if present
    // set dragimage if drag is started from dndHandle
    if( typeof this.dndDragImageElementRef !== "undefined"
      || typeof event._dndUsingHandle !== "undefined" ) {

      setDragImage( event, this.dragImage, this.dndDragImageOffsetFunction );
    }

    // add dragging source css class on first drag event
    const unregister = this.renderer.listen( this.elementRef.nativeElement, "drag", () => {

      this.renderer.addClass( this.elementRef.nativeElement, this.dndDraggingSourceClass );
      unregister();
    } );

    this.dndStart.emit( event );

    event.stopPropagation();
  }

  @HostListener( "dragend", [ "$event" ] )
  onDragEnd( event:DndDragEvent ) {

    // Set the initial index of the item on the event, so users can get the
    // correct index for drag source manipulation or removal
    // https://github.com/reppners/ngx-drag-drop/issues/17
    event.initialIndex = getDndInitialIndex();

    // get drop effect from custom stored state as its not reliable across browsers
    const dropEffect = dndState.dropEffect;

    let dropEffectEmitter:EventEmitter<DragEvent>;

    switch( dropEffect ) {

      case "copy":
        dropEffectEmitter = this.dndCopied;
        break;

      case "link":
        dropEffectEmitter = this.dndLinked;
        break;

      case "move":
        dropEffectEmitter = this.dndMoved;
        break;

      default:
        dropEffectEmitter = this.dndCanceled;
        break;
    }

    dropEffectEmitter.emit( event );
    this.dndEnd.emit( event );

    // reset global state
    endDrag();

    this.renderer.removeClass( this.dragImage, this.dndDraggingClass );

    // IE9 special hammering
    window.setTimeout( () => {
      this.renderer.removeClass( this.elementRef.nativeElement, this.dndDraggingSourceClass );
    }, 0 );

    event.stopPropagation();
  }

  registerDragHandle( handle:DndHandleDirective | undefined ) {

    this.dndHandle = handle;
  }

  registerDragImage( elementRef:ElementRef | undefined ) {

    this.dndDragImageElementRef = elementRef;
  }

  private determineDragImage() {

    // evaluate custom drag image existence
    if( typeof this.dndDragImageElementRef !== "undefined" ) {

      this.dragImage = this.dndDragImageElementRef.nativeElement as Element;
    }
    else {

      this.dragImage = this.elementRef.nativeElement;
    }
  }
}
