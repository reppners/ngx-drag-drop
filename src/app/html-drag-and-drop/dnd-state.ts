import {
  DROP_EFFECTS,
  DropEffect,
  EDGE_MIME_TYPE,
  EffectAllowed,
  filterEffects,
  getMimeType,
  MIME_TYPE,
  MSIE_MIME_TYPE
} from "./dnd-utils";

interface DndState {
  isDragging:boolean;
  dropEffect?:DropEffect;
  effectAllowed?:EffectAllowed;
  type?:string;
}

const _dndState:DndState = {
  isDragging: false,
  dropEffect: "none",
  effectAllowed: "all",
  type: undefined
};

export function startDrag( event:DragEvent, effectAllowed:EffectAllowed, type?:string ) {

  _dndState.isDragging = true;
  _dndState.dropEffect = "none";
  _dndState.effectAllowed = effectAllowed;
  _dndState.type = type;

  event.dataTransfer.effectAllowed = effectAllowed;
}

export function endDrag() {

  _dndState.isDragging = false;
  _dndState.dropEffect = undefined;
  _dndState.effectAllowed = undefined;
  _dndState.type = undefined;
}

export function setDropEffect( event:DragEvent, dropEffect:DropEffect ) {

  _dndState.dropEffect = dropEffect;

  event.dataTransfer.dropEffect = dropEffect;
}

export function getDropEffect( event:DragEvent, effectAllowed?:EffectAllowed | DropEffect ):DropEffect {

  let effects = DROP_EFFECTS;

  effects = filterEffects( effects, event.dataTransfer.effectAllowed as EffectAllowed );

  if ( _dndState.isDragging ) {

    effects = filterEffects( effects, dndState.effectAllowed );
  }

  if ( effectAllowed ) {

    effects = filterEffects( effects, effectAllowed );
  }

  // MacOS automatically filters dataTransfer.effectAllowed depending on the modifier keys,
  // therefore the following modifier keys will only affect other operating systems.
  if ( effects.length === 0 ) {

    return "none";
  }

  if ( event.ctrlKey && effects.indexOf( "copy" ) !== -1 ) {

    return "copy";
  }

  if ( event.altKey && effects.indexOf( "link" ) !== -1 ) {

    return "link";
  }

  return effects[ 0 ] as DropEffect;
}

export function getItemType( event:DragEvent ):string | undefined {

  if ( _dndState.isDragging ) {

    return _dndState.type;
  }

  const mimeType = getMimeType( event );

  if ( mimeType === MSIE_MIME_TYPE
    || mimeType === EDGE_MIME_TYPE ) {

    return undefined;
  }

  return (mimeType && mimeType.substr( MIME_TYPE.length + 1 )) || undefined;
}

export const dndState:Readonly<DndState> = _dndState as Readonly<DndState>;
