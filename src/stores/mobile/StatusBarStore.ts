import { derived, writable } from "svelte/store";
import type { Readable, Writable } from "svelte/store";

let expanded = false;
const _expandStatusBarStore: Writable<boolean> = writable(expanded);
export const expandStatusBarStore: Readable<boolean> = derived(
    _expandStatusBarStore,
    ($_expandStatusBarStore) => $_expandStatusBarStore
);

export function expandStatusBar() {
    console.log(expanded);

    expanded = true;
    _expandStatusBarStore.set(expanded);
}

export function collapseStatusBar() {
    expanded = false;
    _expandStatusBarStore.set(expanded);
}

export function toggleStatusBar() {
    expanded = !expanded;
    _expandStatusBarStore.set(expanded);
}

export function isStatusBarExpanded(): boolean {
    return expanded;
}
