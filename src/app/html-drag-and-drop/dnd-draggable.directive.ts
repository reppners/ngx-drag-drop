import {
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChanges
} from "@angular/core";
import { DndEvent, EffectAllowed, setDragData } from "./dnd-utils";
import { DndHandleDirective } from "./dnd-handle.directive";
import { dndState, endDrag, startDrag } from "./dnd-state";

@Directive( {
  selector: "[dndDraggable]"
} )
export class DndDraggableDirective implements OnChanges {

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
  public dndStart:EventEmitter<DndEvent> = new EventEmitter<DndEvent>();

  @Output()
  public dndEnd:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public dndMoved:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public dndCopied:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public dndLinked:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @Output()
  public dndCanceled:EventEmitter<DragEvent> = new EventEmitter<DragEvent>();

  @HostBinding( "attr.draggable" )
  private draggable = true;

  @ContentChild( DndHandleDirective )
  private dndHandle?:DndHandleDirective;

  constructor( private elementRef:ElementRef,
               private renderer:Renderer2 ) {
  }

  public ngOnChanges( changes:SimpleChanges ):void {

    if ( changes.dndDisableIf ) {

      this.draggable = !changes.dndDisableIf.currentValue;
    }
  }

  @HostListener( "dragstart", [ "$event" ] )
  private onDragStart( event:DndEvent ) {

    if ( this.draggable === false ) {
      return false;
    }

    // check if there is dnd handle and if the dnd handle was used to start the drag
    if ( typeof this.dndHandle !== "undefined"
      && typeof event._dndHandle === "undefined" ) {

      return false;
    }

    // initialize global state
    startDrag( event, this.dndEffectAllowed );

    setDragData( event, {data: this.dndDraggable, type: this.dndType}, dndState.effectAllowed );

    // set css
    this.renderer.addClass( this.elementRef.nativeElement, this.dndDraggingClass );
    window.setTimeout( () => {
      this.renderer.addClass( this.elementRef.nativeElement, this.dndDraggingSourceClass );
    }, 0 );

    // set dragimage if drag is started from dndHandle
    if ( typeof event._dndHandle !== "undefined" ) {

      const offX = /* event._dndHandle.offsetLeft + */ event.offsetX;
      const offY = /* event._dndHandle.offsetHeight + */ event.offsetY;

      (event.dataTransfer as any).setDragImage( this.elementRef.nativeElement, offX, offY );
    }

    this.dndStart.emit( event );

    event.stopPropagation();
  }

  @HostListener( "dragend", [ "$event" ] )
  private onDragEnd( event:DragEvent ) {

    // get drop effect from custom stored state as its not reliable across browsers
    const dropEffect = dndState.dropEffect;

    let dropEffectEmitter:EventEmitter<DragEvent>;

    switch ( dropEffect ) {

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

    this.renderer.removeClass( this.elementRef.nativeElement, this.dndDraggingClass );
    this.renderer.removeClass( this.elementRef.nativeElement, this.dndDraggingClass );
    // IE9 special hammering
    window.setTimeout( () => {
      this.renderer.removeClass( this.elementRef.nativeElement, this.dndDraggingSourceClass );
    }, 0 );

    event.stopPropagation();
  }
}
