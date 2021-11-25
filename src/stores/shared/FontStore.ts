import type { Font } from "$objects/shared/fonts/Font";
import { FontDefault } from "$objects/shared/fonts/FontDefault";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export const fontStore: Writable<Font> = writable(new FontDefault());

export function setFont(globalElement: HTMLElement, font: Font) {
  for (const key in font) {
    globalElement.style.setProperty(`${key.toString()}`, font[key]);
  }

  fontStore.update((_font) => (_font = font));
}
