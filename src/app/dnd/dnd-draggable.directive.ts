import {
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  Output,
  Renderer2,
  SimpleChanges
} from "@angular/core";
import { DndEvent, setDragData, setDragImage } from "./dnd-utils";
import { DndHandleDirective } from "./dnd-handle.directive";
import { dndState, endDrag, startDrag } from "./dnd-state";
import { EffectAllowed } from "./dnd-types";
import { DndElementRefDirective } from "./dnd-element-ref.directive";

@Directive( {
  selector: "[dndDraggable]"
} )
export class DndDraggableDirective implements OnInit, OnChanges {

  @Input()
  public dndDraggable:any;

  @Input()
  public dndEffectAllowed:EffectAllowed = "copy";

  @Input()
  public dndType?:string;

  @Input()
  public dndDisableIf:boolean = false;

  @Input()
  public dndDraggingClass = "dndDragging";

  @Input()
  public dndDraggingSourceClass = "dndDraggingSource";

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

  @ContentChild( DndElementRefDirective )
  private readonly dndDragImageRef?:DndElementRefDirective;

  private dragImage:Element;

  constructor( private elementRef:ElementRef,
               private renderer:Renderer2 ) {
  }

  public ngOnInit():void {

    // evaluate custom drag image existence
    if( typeof this.dndDragImageRef !== "undefined" ) {

      this.dragImage = this.dndDragImageRef.elementRef.nativeElement as Element;
    }
    else {

      this.dragImage = this.elementRef.nativeElement;
    }
  }

  public ngOnChanges( changes:SimpleChanges ):void {

    // reevaluate dragability
    if( changes.dndDisableIf ) {

      this.draggable = !changes.dndDisableIf.currentValue;
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
    startDrag( event, this.dndEffectAllowed );

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

      setDragImage( event, this.dragImage );
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
