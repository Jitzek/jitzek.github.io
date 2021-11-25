import type { Theme } from "$objects/shared/themes/Theme";
import { NordTheme } from "$objects/shared/themes/ThemeNord";
import { writable, Writable } from "svelte/store";

export const themeStore: Writable<Theme> = writable(new NordTheme());

export function setTheme(globalElement: HTMLElement, theme: Theme) {
  for (const key in theme) {
    globalElement.style.setProperty(`--${key.toString()}`, theme[key]);
  }

  themeStore.update((_theme) => (_theme = theme));
}
