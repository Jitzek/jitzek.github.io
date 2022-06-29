import type { Process } from "$objects/shared/program/Process";
import type { Program } from "$objects/shared/program/Program";
import { processesStore } from "$stores/shared/ProcessesStore";
import { ProgramShortcut } from "./ProgramShortcut";

/**
 * Stack of processes of the same program
 */
export class ActiveProcessStack {
    constructor(activeProcess: Process) {
        this.activeProcesses.push(activeProcess);
        this.program = activeProcess.getProgram();
    }

    private activeProcesses: Array<Process> = [];
    private program: Program;

    public getActiveProcesses(): Array<Process> {
        return this.activeProcesses;
    }

    public getProgram() {
        return this.program;
    }
}

export class Taskbar {
    public constructor() {
        processesStore.subscribe((new_processes: Array<Process>) => {
            if (
                new_processes.length ===
                this.activeProcessStacks.flatMap((activeProcessStack) =>
                    activeProcessStack.getActiveProcesses()
                ).length
            ) {
                return;
            }

            this.activeProcessStacks = [];
            for (let new_process of new_processes) {
                let existingActiveProcessStack:
                    | ActiveProcessStack
                    | undefined = this.activeProcessStacks.find(
                    (activeProcessStack) =>
                        activeProcessStack.getProgram().id ===
                        new_process.getProgram().id
                );
                if (existingActiveProcessStack === undefined) {
                    this.activeProcessStacks.push(
                        new ActiveProcessStack(new_process)
                    );
                    continue;
                }
                existingActiveProcessStack
                    .getActiveProcesses()
                    .push(new_process);
            }
        });
    }

    private programShortcuts: Array<ProgramShortcut> = [];
    private activeProcessStacks: Array<ActiveProcessStack> = [];

    public addProgramShortcut(program: Program) {
        this.programShortcuts.push(new ProgramShortcut(program));
    }

    public removeProgramShortcut(program: Program) {
        this.programShortcuts = this.programShortcuts.filter(
            (programShortcut) => programShortcut.program.id !== program.id
        );
    }

    public containsProgramShortcut(program: Program): boolean {
        return (
            this.programShortcuts.find(
                (programShortcut) => programShortcut.program.id === program.id
            ) !== undefined
        );
    }

    public getProgramShortcuts(): Array<ProgramShortcut> {
        return this.programShortcuts;
    }

    public getActiveProcessStacks(): Array<ActiveProcessStack> {
        return this.activeProcessStacks;
    }
}
