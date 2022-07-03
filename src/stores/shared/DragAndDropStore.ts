import { derived, writable } from "svelte/store";
import type { Writable, Readable } from "svelte/store";

/**
 * Workaround for having access to dragged data during the drag since Chrome doesn´t allow dataTransfer to be accessed outside of drop
 */
let _dragAndDropData: { [key: string]: string } = {};
const _dragAndDropStore: Writable<{ [key: string]: string }> = writable({});
export const dragAndDropStore: Readable<{ [key: string]: string }> = derived(
    _dragAndDropStore,
    ($_dragAndDropStore) => $_dragAndDropStore
);

export function setData(data: { [key: string]: string }, e?: DragEvent) {
    _dragAndDropData = data;
    _dragAndDropStore.set(_dragAndDropData);
    if (e) {
        for (const key in _dragAndDropData)
            e.dataTransfer.setData(key, data[key]);
    }
}

export function clearData() {
    _dragAndDropData = {};
    _dragAndDropStore.set(_dragAndDropData);
}

export function isEmpty() {
    return Object.keys(_dragAndDropData).length < 1;
}

export function keyExists(key: string) {
    return key in _dragAndDropData;
}

export function getValue(key: string) {
    return _dragAndDropData[key];
}
