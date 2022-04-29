import {
  AfterViewInit,
  Directive,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnDestroy,
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

  constructor(@Inject(forwardRef(() => DndDraggableDirective)) parent: DndDraggableDirective, elementRef:ElementRef ) {
    parent.registerDragImage( elementRef );
  }
}

@Directive( {
  selector: "[dndDraggable]"
} )
export class DndDraggableDirective implements AfterViewInit, OnDestroy {

  @Input()
  dndDraggable:any;

  @Input()
  dndEffectAllowed:EffectAllowed = "copy";

  @Input()
  dndType?:string;

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
  readonly dndDrag:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  readonly dndEnd:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  readonly dndMoved:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  readonly dndCopied:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  readonly dndLinked:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  readonly dndCanceled:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @HostBinding( "attr.draggable" )
  draggable = true;

  private dndHandle?:DndHandleDirective;

  private dndDragImageElementRef?:ElementRef;

  private dragImage:Element | undefined;

  private isDragStarted:boolean = false;

  private readonly dragEventHandler:( event:DragEvent ) => void = ( event:DragEvent ) => this.onDrag( event );

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

  @Input()
  set dndDisableDragIf( value:boolean ) {
    this.dndDisableIf = value;
  }

  constructor( private elementRef:ElementRef,
               private renderer:Renderer2,
               private ngZone:NgZone ) {
  }

  ngAfterViewInit():void {
    this.ngZone.runOutsideAngular( () => {
      this.elementRef.nativeElement.addEventListener( "drag", this.dragEventHandler );
    } );
  }

  ngOnDestroy():void {
    this.elementRef.nativeElement.removeEventListener( "drag", this.dragEventHandler );
    if(this.isDragStarted === true) {
      endDrag()
    }
  }

  @HostListener( "dragstart", [ "$event" ] )
  onDragStart( event:DndEvent ): boolean {

    if( this.draggable === false ) {

      return false;
    }

    // check if there is dnd handle and if the dnd handle was used to start the drag
    if( typeof this.dndHandle !== "undefined"
      && typeof event._dndUsingHandle === "undefined" ) {

      return false;
    }

    // initialize global state
    startDrag( event, this.dndEffectAllowed, this.dndType );

    this.isDragStarted = true;

    setDragData( event, {data: this.dndDraggable, type: this.dndType}, dndState.effectAllowed! );

    this.dragImage = this.determineDragImage();

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
    return true;
  }

  onDrag( event:DragEvent ) {

    this.dndDrag.emit( event );
  }

  @HostListener( "dragend", [ "$event" ] )
  onDragEnd( event:DragEvent ) {

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

    this.isDragStarted = false;

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

  private determineDragImage():Element {

    // evaluate custom drag image existence
    if( typeof this.dndDragImageElementRef !== "undefined" ) {

      return this.dndDragImageElementRef.nativeElement as Element;
    }
    else {

      return this.elementRef.nativeElement;
    }
  }
}
