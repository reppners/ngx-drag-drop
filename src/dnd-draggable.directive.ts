import {
  AfterContentInit,
  ContentChild,
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
import { dndState, endDrag, startDrag } from "./dnd-state";
import { EffectAllowed } from "./dnd-types";

@Directive( {
  selector: "[dndDragImageRef]"
} )
export class DndDragImageRefDirective {

  constructor( public readonly elementRef:ElementRef ) {
  }
}

@Directive( {
  selector: "[dndDraggable]"
} )
export class DndDraggableDirective implements AfterContentInit {

  @Input()
  public dndDraggable:any;

  @Input()
  public dndEffectAllowed:EffectAllowed = "copy";

  @Input()
  public dndType?:string;

  @Input()
  public dndDraggingClass = "dndDragging";

  @Input()
  public dndDraggingSourceClass = "dndDraggingSource";

  @Input()
  public dndDraggableDisabledClass = "dndDraggableDisabled";

  @Input()
  public dndDragImageOffsetFunction:DndDragImageOffsetFunction = calculateDragImageOffset;

  @Output()
  public readonly dndStart:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public readonly dndEnd:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public readonly dndMoved:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public readonly dndCopied:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public readonly dndLinked:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public readonly dndCanceled:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @HostBinding( "attr.draggable" )
  private draggable = true;

  @ContentChild( DndHandleDirective )
  private readonly dndHandle?:DndHandleDirective;

  @ContentChild( DndDragImageRefDirective )
  private readonly dndDragImageRef?:DndDragImageRefDirective;

  private dragImage:Element;

  @Input()
  public set dndDisableIf( value:boolean ) {

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

  public ngAfterContentInit():void {

    // evaluate custom drag image existence
    if( typeof this.dndDragImageRef !== "undefined" ) {

      this.dragImage = this.dndDragImageRef.elementRef.nativeElement as Element;
    }
    else {

      this.dragImage = this.elementRef.nativeElement;
    }
  }

  @HostListener( "dragstart", [ "$event" ] )
  private onDragStart( event:DndEvent ) {

    if( this.draggable === false ) {

      return false;
    }

    // check if there is dnd handle and if the dnd handle was used to start the drag
    if( typeof this.dndHandle !== "undefined"
      && typeof event._dndHandle === "undefined" ) {

      return false;
    }

    // initialize global state
    startDrag( event, this.dndEffectAllowed, this.dndType );

    setDragData( event, {data: this.dndDraggable, type: this.dndType}, dndState.effectAllowed );

    // add dragging source css class on first drag event
    const unregister = this.renderer.listen( this.elementRef.nativeElement, "drag", () => {

      this.renderer.addClass( this.elementRef.nativeElement, this.dndDraggingSourceClass );
      unregister();
    } );

    // set dragging css class prior to setDragImage so styles are applied before
    this.renderer.addClass( this.dragImage, this.dndDraggingClass );

    // set custom dragimage if present
    // set dragimage if drag is started from dndHandle
    if( typeof this.dndDragImageRef !== "undefined"
      || typeof event._dndHandle !== "undefined" ) {

      setDragImage( event, this.dragImage, this.dndDragImageOffsetFunction );
    }

    this.dndStart.emit( event );

    event.stopPropagation();
  }

  @HostListener( "dragend", [ "$event" ] )
  private onDragEnd( event:DragEvent ) {

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
}
