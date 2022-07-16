<script lang="ts">
    /** IMPORTS */
    // "svelte"
    import { onMount } from "svelte";
    //

    // "components"
    import Launcher from "$components/desktop/taskbar/Launcher.svelte";
    import MenuButton from "$components/desktop/taskbar/MenuButton.svelte";
    import Menu from "$components/desktop/taskbar/menu/Menu.svelte";
    import WhiskerMenu from "$components/shared/svg/whisker-menu.svelte";
    //

    // "objects"
    import { changeCursor, Cursor } from "$objects/desktop/cursors";
    import type { Program as ProgramObject } from "$objects/shared/program/Program";
    import type { ActiveProcessStack as ActiveProcessStackObject } from "$objects/desktop/taskbar/Taskbar";
    import { convertRemToPixels } from "$objects/shared/conversions";
    import { isStringAPositiveNumber } from "$objects/shared/typechecks";
    //

    // "stores"
    import { getProgramById } from "$stores/shared/ProgramsStore";
    import {
        addProgramShortcut,
        taskbarStore,
    } from "$stores/desktop/TaskbarStore";
    import {
        clearData as clearDragAndDropData,
        dragAndDropStore,
        keyExists as dragAndDropKeyExists,
    } from "$stores/shared/DragAndDropStore";
    import ActiveProcess from "./ActiveProcess.svelte";
    import { processesStore } from "$stores/shared/ProcessesStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let rows: number = 1;
    export let maxRows: number = 3;
    // Total height in REM
    export let height: number = 3.5;
    // Row height in REM
    export let columnRadius: number = 3.5;
    export let z_index: number = 9;
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    // Start of resize event (mouse down)
    let startY: number = 0;
    // The initial height at the start of the resize event (mouse down)
    let initial: number = 0;
    // true if the user is isResizing, false if not
    let isResizing: boolean = false;

    let taskbarContentElement: HTMLDivElement;

    let heightInPx = 0;

    class activeProcessObject {
        activeProcessStack: ActiveProcessStackObject | null;
        row: number;
        ghost: boolean;
    }
    let activeProcesses: Array<activeProcessObject> = [];

    class LauncherObject {
        program: ProgramObject | null;
        row: number;
        ghost: boolean;
    }
    let launchers: Array<LauncherObject> = [];

    const columnSize: string = `${columnRadius}rem`;

    // This should be enough, having more columns doesn't seem to affect the styling.
    let launchersGridTemplateColumns: string = `repeat(${launchers.length}, ${columnSize})`;
    let activeProcesssGridTemplateColumns: string = `repeat(${activeProcesses.length}, ${columnSize})`;

    onMount(() => {
        // Set initial height in pixels
        heightInPx = convertRemToPixels(height);

        taskbarContentElement.ondragstart = () => false;
    });
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    taskbarStore.subscribe((taskbarStore) => {
        launchers = [];
        activeProcesses = [];
        taskbarStore.getProgramShortcuts().forEach((programShortcut) =>
            launchers.push({
                program: programShortcut.program,
                row: 1,
                ghost: false,
            })
        );

        taskbarStore.getActiveProcessStacks().forEach((activeProcessStack) => {
            activeProcesses.push({
                activeProcessStack: activeProcessStack,
                row: 1,
                ghost: false,
            });
        });

        rows = rows;
    });

    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    $: {
        height;
        if (height < columnRadius) height = columnRadius;
        rows = height / columnRadius;
    }

    $: {
        rows;
        if (height / columnRadius != rows) height = rows * columnRadius;
        if (rows > maxRows) {
            rows = maxRows;
            height = rows * columnRadius;
        }

        // Filter out ghost launchers
        launchers = launchers.filter((launcher) => !launcher.ghost);
        if (rows > launchers.length) {
            // Add ghost launchers to fill up whitespace
            for (let i = 0; i < rows - launchers.length; i++) {
                launchers.push({ program: null, row: 1, ghost: true });
            }
        }

        activeProcesses = activeProcesses.filter(
            (activeProcess) => !activeProcess.ghost
        );
        if (rows > activeProcesses.length) {
            // Add ghost launchers to fill up whitespace
            for (let i = 0; i < rows - activeProcesses.length; i++) {
                activeProcesses.push({
                    activeProcessStack: null,
                    row: 1,
                    ghost: true,
                });
            }
        }

        // Set the row for each launcher
        let c_row = 1;
        launchers.forEach((launcher) => {
            if (c_row > rows) c_row = 1;
            launcher.row = c_row++;
        });
        launchers = launchers;

        c_row = 1;
        activeProcesses.forEach((activeProcess) => {
            if (c_row > rows) c_row = 1;
            activeProcess.row = c_row++;
        });
        activeProcesses = activeProcesses;

        // Calculate the amount of columns a row needs
        // gridTemplateColumns = `repeat(${Math.round(launchers.length/rows)}, ${columnSize})`;
    }

    $: {
        launchers;
        launchersGridTemplateColumns = `repeat(${launchers.length}, ${columnSize})`;
    }
    $: {
        activeProcesses;
        activeProcesssGridTemplateColumns = `repeat(${activeProcesses.length}, ${columnSize})`;
    }
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    //
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function window_handleMouseUp() {
        // Stop isResizing
        isResizing = false;
        startY = 0;
        initial = 0;
        heightInPx = convertRemToPixels(height);

        changeCursor(Cursor.AUTO);
    }
    function window_handleMouseMove(event: MouseEvent) {
        // Only resize if the user is isResizing (mouse move)
        if (!isResizing) return;

        // Difference from start to end position (Y-axis)
        const delta = startY - event.pageY;
        heightInPx = initial + delta;

        // Determine whether enough pixels have been moved to add/remove a row
        if (heightInPx > convertRemToPixels(height + columnRadius)) {
            height +=
                height + columnRadius <= columnRadius * maxRows
                    ? columnRadius
                    : 0;
        } else if (heightInPx < convertRemToPixels(height - columnRadius)) {
            height -= height - columnRadius >= columnRadius ? columnRadius : 0;
        }
        return;
    }

    function handleTaskbarBorderMouseDown(event: MouseEvent) {
        isResizing = true;
        startY = event.pageY;
        initial = heightInPx;

        changeCursor(Cursor.N_RESIZE);
    }

    function handleTaskbarContentDrop(e: DragEvent) {
        if (!dragAndDropKeyExists("program_id")) return;
        let programId: number = Number($dragAndDropStore["program_id"]);
        if (isNaN(programId)) return;
        addProgramShortcut(getProgramById(programId));
        clearDragAndDropData();
    }
    function handleTaskbarContentDragOver(e: DragEvent) {
        if (!dragAndDropKeyExists("program_id")) return;
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    }
    /** ENDOF EVENT HANDLERS */
</script>

<svelte:window
    on:mouseup={window_handleMouseUp}
    on:mousemove={window_handleMouseMove}
/>
<div class="taskbar" style="height: {height}rem; z-index: {z_index};">
    <Menu offset={height} />
    <div on:mousedown={handleTaskbarBorderMouseDown} class="border" />
    <div
        bind:this={taskbarContentElement}
        class="taskbar-content"
        style="height: {height}rem;"
        on:drop={handleTaskbarContentDrop}
        on:dragover={handleTaskbarContentDragOver}
    >
        <div class="menu-button-container">
            <MenuButton>
                <WhiskerMenu />
            </MenuButton>
        </div>
        <div
            class="launchers-container"
            style="width: {columnRadius *
                Math.ceil(launchers.length / rows)}rem;"
        >
            <div
                class="launchers"
                style="grid-template-columns: {launchersGridTemplateColumns};"
            >
                {#each launchers as { program, row, ghost }}
                    {#if ghost || !program}
                        <div style="grid-row: {row}; height: {columnRadius}rem">
                            <div style="padding-top: 100%;" />
                        </div>
                    {:else}
                        <Launcher
                            {program}
                            {row}
                            size={`${columnRadius}rem`}
                        />
                    {/if}
                {/each}
            </div>
        </div>
        <div
            class="active-processes-container"
            style="width: {columnRadius *
                Math.ceil(activeProcesses.length / rows)}rem;"
        >
            <div class="active-processes-handle">
                <div class="active-processes-handle-line" />
                <div style="margin-top: 0.1rem;" />
                <div class="active-processes-handle-line" />
                <div style="margin-top: 0.1rem;" />
                <div class="active-processes-handle-line" />
            </div>
            <div
                class="active-processes"
                style="grid-template-columns: {activeProcesssGridTemplateColumns};"
            >
                {#each activeProcesses as { activeProcessStack, row, ghost }}
                    {#if ghost || !activeProcessStack}
                        <div style="grid-row: {row}; height: {columnRadius}rem">
                            <div style="padding-top: 100%;" />
                        </div>
                    {:else}
                        <ActiveProcess
                            {activeProcessStack}
                            {row}
                            height={`${columnRadius}rem`}
                        />
                    {/if}
                {/each}
            </div>
        </div>
    </div>
</div>

<style lang="scss">
    .taskbar {
        // overflow: hidden;
        position: fixed;
        bottom: 0;
        width: 100%;

        background-color: var(--bg_color_primary);

        transition: height 0.25s;

        .border {
            width: 100%;
            height: 0.3rem;
            cursor: n-resize;
            background-color: rgba(0, 0, 0, 0);
            overflow: hidden;

            // Prevent border pushing other elements
            position: absolute;

            z-index: 9;
        }

        .taskbar-content {
            display: -webkit-flex;
            display: flex;

            flex-direction: row;

            justify-content: start;

            .menu-button-container {
                position: relative;
                height: 100%;
            }

            .launchers-container {
                .launchers {
                    display: inline-grid;
                    display: -ms-inline-grid;
                    display: -moz-inline-grid;
                }
            }

            .active-processes-container {
                align-self: flex-start;
                display: flex;
                margin-left: 0.75rem;

                .active-processes-handle {
                    height: 100%;
                    align-self: center;

                    .active-processes-handle-line {
                        background-color: var(--fg_color_secondary);
                        height: 0.15rem;
                        width: 0.5rem;
                        margin-right: 0.25rem;
                    }
                }
                .active-processes {
                    display: inline-grid;
                    display: -ms-inline-grid;
                    display: -moz-inline-grid;
                }
            }
        }
    }
</style>
