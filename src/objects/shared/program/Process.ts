import {
    focusWindow,
    maxWindowZIndex,
    notify as notifyProcessesChanged,
} from "$stores/shared/ProcessesStore";
import type { SvelteComponent } from "svelte";
import type { Program } from "./Program";
import type { Window } from "./Window";
import { v4 as uuidv4 } from "uuid";

export class Process {
    public readonly uuid: string = uuidv4();
    public readonly name: string;
    public readonly description: string;
    public readonly icon: string;
    /**
     * A process is an instance of a program, it is instantiated with a copy of the program.
     * @param program
     */
    constructor(
        private program: Program,
        public window: Window = program.window
    ) {
        this.name = program.name;
        this.description = program.description;
        this.icon = program.icon;
    }

    public getProgram(): Program {
        return this.program;
    }

    public getProgramId(): number {
        return this.program.id;
    }

    public hasWindow(): boolean {
        return this.window !== null;
    }

    public getWindow(): Window | null {
        return this.window;
    }

    public bringToTop(): void {
        if (!this.hasWindow()) return;
        focusWindow(this);
    }

    public minimizeWindow() {
        if (!this.hasWindow()) return;
        this.window.minimized = true;
        notifyProcessesChanged();
    }

    public unMinimizeWindow() {
        if (!this.hasWindow()) return;
        this.window.minimized = false;
        this.bringToTop();
        notifyProcessesChanged();
    }

    public maximizeWindow() {
        if (!this.hasWindow()) return;
        this.window.maximized = true;
        notifyProcessesChanged();
    }

    public unMaximizeWindow() {
        if (!this.hasWindow()) return;
        this.window.maximized = false;
        this.bringToTop();
        notifyProcessesChanged();
    }
}
