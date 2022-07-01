import { derived, writable } from "svelte/store";
import type { Readable, Writable } from "svelte/store";

const _showApplicationsStore: Writable<boolean> = writable(false);
export const showApplicationsStore: Readable<boolean> = derived(
    _showApplicationsStore,
    ($_showApplicationsStore) => $_showApplicationsStore
);

export function showMenu() {
    _showApplicationsStore.set(true);
}

export function hideMenu() {
    _showApplicationsStore.set(false);
}

export function toggleMenu() {
    _showApplicationsStore.update((_showMenu) => !_showMenu);
}
