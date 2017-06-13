// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/dropEffect
export type DropEffect = "move" | "copy" | "link" | "none";

// https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed
export type EffectAllowed = DropEffect | "move" | "copy" | "link" | "copyMove" | "copyLink" | "linkMove" | "all";
