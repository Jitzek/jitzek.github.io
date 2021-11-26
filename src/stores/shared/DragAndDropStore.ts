import { derived, writable } from "svelte/store";
import type { Writable, Readable } from "svelte/store";

/**
 * Workaround for having access to dragged data during the drag since Chrome doesn´t allow dataTransfer to be accessed outside of drop
 */
const _dragAndDropStore: Writable<{ [key: string]: string }> = writable({});
export const dragAndDropStore: Readable<{ [key: string]: string }> = derived(
  _dragAndDropStore,
  ($_dragAndDropStore) => $_dragAndDropStore
);

export function setData(data: { [key: string]: string }, e?: DragEvent) {
  _dragAndDropStore.set(data);
  if (e) {
    for (const key in data) e.dataTransfer.setData(key, data[key]);
  }
}

export function clearData() {
  _dragAndDropStore.set({});
}
