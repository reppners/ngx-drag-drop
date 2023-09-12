import { DropEffect, EffectAllowed } from './dnd-types';
import {
  CUSTOM_MIME_TYPE,
  DROP_EFFECTS,
  filterEffects,
  getWellKnownMimeType,
  JSON_MIME_TYPE,
  MSIE_MIME_TYPE,
} from './dnd-utils';

export interface DndState {
  isDragging: boolean;
  dropEffect?: DropEffect;
  effectAllowed?: EffectAllowed;
  type?: string;
}

const _dndState: DndState = {
  isDragging: false,
  dropEffect: 'none',
  effectAllowed: 'all',
  type: undefined,
};

export function startDrag(
  event: DragEvent,
  effectAllowed: EffectAllowed,
  type: string | undefined
) {
  _dndState.isDragging = true;
  _dndState.dropEffect = 'none';
  _dndState.effectAllowed = effectAllowed;
  _dndState.type = type;

  if (event.dataTransfer) {
    event.dataTransfer.effectAllowed = effectAllowed;
  }
}

export function endDrag() {
  _dndState.isDragging = false;
  _dndState.dropEffect = undefined;
  _dndState.effectAllowed = undefined;
  _dndState.type = undefined;
}

export function setDropEffect(event: DragEvent, dropEffect: DropEffect) {
  if (_dndState.isDragging === true) {
    _dndState.dropEffect = dropEffect;
  }

  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = dropEffect;
  }
}

export function getDropEffect(
  event: DragEvent,
  effectAllowed?: EffectAllowed | DropEffect
): DropEffect {
  const dataTransferEffectAllowed: EffectAllowed = event.dataTransfer
    ? (event.dataTransfer.effectAllowed as EffectAllowed)
    : 'uninitialized';

  let effects = filterEffects(DROP_EFFECTS, dataTransferEffectAllowed);

  if (_dndState.isDragging === true) {
    effects = filterEffects(effects, _dndState.effectAllowed!);
  }

  if (effectAllowed) {
    effects = filterEffects(effects, effectAllowed);
  }

  // MacOS automatically filters dataTransfer.effectAllowed depending on the modifier keys,
  // therefore the following modifier keys will only affect other operating systems.
  if (effects.length === 0) {
    return 'none';
  }

  if (event.ctrlKey && effects.indexOf('copy') !== -1) {
    return 'copy';
  }

  if (event.altKey && effects.indexOf('link') !== -1) {
    return 'link';
  }

  return effects[0] as DropEffect;
}

export function getDndType(event: DragEvent): string | undefined {
  if (_dndState.isDragging === true) {
    return _dndState.type;
  }

  const mimeType = getWellKnownMimeType(event);

  if (mimeType === null) {
    return undefined;
  }

  if (mimeType === MSIE_MIME_TYPE || mimeType === JSON_MIME_TYPE) {
    return undefined;
  }

  return mimeType.substr(CUSTOM_MIME_TYPE.length + 1) || undefined;
}

export function isExternalDrag(): boolean {
  return _dndState.isDragging === false;
}

export const dndState: Readonly<DndState> = _dndState as Readonly<DndState>;
