import { DropEffect, EffectAllowed } from "./dnd-types";

export interface DragDropData {
  data?:any;
  type?:string;
}

export interface DndEvent extends DragEvent {
  _dndHandle?:HTMLElement;
  _dndDragLeaveHandled?:true;
}

export const DROP_EFFECTS = [ "move", "copy", "link" ] as DropEffect[];

export const MIME_TYPE = "application/x-dnd";
export const EDGE_MIME_TYPE = "application/json";
export const MSIE_MIME_TYPE = "Text";

export function getMimeType( event:DragEvent ):string {

  const types = event.dataTransfer.types;

  // IE 9 workaround.
  if ( !types ) {

    return MSIE_MIME_TYPE;
  }

  for ( let i = 0; i < types.length; i++ ) {

    if ( types[ i ] === MSIE_MIME_TYPE
      || types[ i ] === EDGE_MIME_TYPE
      || types[ i ].substr( 0, MIME_TYPE.length ) === MIME_TYPE ) {

      return types[ i ];
    }
  }

  throw new Error( "Could not retrieve mime type from drag event" );
}

export function setDragData( event:DragEvent, data:DragDropData, effectAllowed:EffectAllowed ):void {

  // Internet Explorer and Microsoft Edge don't support custom mime types, see design doc:
  // https://github.com/marceljuenemann/angular-drag-and-drop-lists/wiki/Data-Transfer-Design
  const mimeType = MIME_TYPE + (data.type ? ("-" + data.type) : "");

  const stringifiedData = JSON.stringify( data );

  try {

    event.dataTransfer.setData( mimeType, stringifiedData );

  }catch ( e ) {

    //   Setting a custom MIME type did not work, we are probably in IE or Edge.
    try {

      event.dataTransfer.setData( EDGE_MIME_TYPE, stringifiedData );

    }catch ( e ) {

      //   We are in Internet Explorer and can only use the Text MIME type. Also note that IE
      //   does not allow changing the cursor in the dragover event, therefore we have to choose
      //   the one we want to display now by setting effectAllowed.
      const effectsAllowed = filterEffects( DROP_EFFECTS, effectAllowed );
      event.dataTransfer.effectAllowed = effectsAllowed[ 0 ];

      event.dataTransfer.setData( MSIE_MIME_TYPE, stringifiedData );
    }
  }
}

export function getDropData( event:DragEvent ):DragDropData {

  // Check whether the drop is allowed and determine mime type.
  const mimeType = getMimeType( event );

  return JSON.parse( event.dataTransfer.getData( mimeType ) );
}

export function filterEffects( effects:DropEffect[], allowed:EffectAllowed | DropEffect ):DropEffect[] {

  if ( allowed === "all" ) {

    return effects;
  }

  return effects.filter( function ( effect ) {

    return allowed.toLowerCase().indexOf( effect ) !== -1;
  } );
}

export function getDirectChildElement( parentElement:Element, childElement:Element ):Element | null {

  let directChild:Node = childElement.parentNode;

  while ( directChild.parentNode !== parentElement ) {

    // reached root node without finding given parent
    if ( !directChild.parentNode ) {

      return null;
    }

    directChild = directChild.parentNode;
  }

  return directChild as Element;
}

export function shouldPositionPlaceholderBeforeElement( event:DragEvent, element:Element, horizontal:boolean ) {

  const bounds = element.getBoundingClientRect();

  // If the pointer is in the upper half of the list item element,
  // we position the placeholder before the list item, otherwise after it.
  if ( horizontal ) {

    return ( event.clientX < bounds.left + bounds.width / 2 );

  }
  else {

    return ( event.clientY < bounds.top + bounds.height / 2 );
  }
}
