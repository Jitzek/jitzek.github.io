/// <reference types="@sveltejs/kit" />

declare namespace svelte.JSX {
  interface DOMAttributes<T> {
    onclickoutside?: MouseEvent<T>;
    mousedownoutside?: MouseEvent<T>;
    mouseupoutside?: MouseEvent<T>;
  }

  interface HTMLProps<HTMLElement> {
    longpresstouch?: CustomEvent<T>;
    longpressmouse?: CustomEvent<T>;
  }
}
