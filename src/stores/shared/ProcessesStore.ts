import type { Process } from "$objects/shared/program/Process";
import { writable } from "svelte/store";
import type { Writable } from "svelte/store";

export let maxWindowZIndex = 1;
export const maxWindowZIndexStore: Writable<number> = writable(maxWindowZIndex);
maxWindowZIndexStore.subscribe(
    (_maxWindowZIndex) => (maxWindowZIndex = _maxWindowZIndex)
);
export const processesStore: Writable<Array<Process>> = writable([]);

export function addProcess(process: Process) {
    processesStore.update((processes) => processes.concat(process));
}

export function removeProcess(process: Process) {
    processesStore.update((processes) => {
        processes.splice(processes.indexOf(process), 1);
        return processes;
    });
}

export function removeProcessByUuid(uuid: string) {
    processesStore.update((processes) =>
        processes.filter((process) => process.uuid !== uuid)
    );
}

processesStore.subscribe((processes) => {
    // Set the max Z Index to the amount of active windows
    maxWindowZIndexStore.set(
        processes.filter((process) => process.window !== null).length
    );
});
