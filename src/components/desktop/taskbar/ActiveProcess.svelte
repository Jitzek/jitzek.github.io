<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    // "components"
    import Tooltip from "$components/desktop/Tooltip.svelte";
    //

    // "objects"
    import type { ActiveProcessStack as ActiveProcessStackObject } from "$objects/desktop/taskbar/Taskbar";
    import type { ContextMenuOption as ContextMenuOptionObject } from "$objects/desktop/context_menu/ContextMenuOption";
    //

    // "stores"
    import {
        hideContextMenu,
        showContextMenu,
    } from "$stores/shared/ContextMenuStore";
    import { hideMenu } from "$stores/desktop/MenuStore";
    import {
        maxWindowZIndex,
        processesStore,
    } from "$stores/shared/ProcessesStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let activeProcessStack: ActiveProcessStackObject;
    export let row: number;
    export let height: string;
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let hasFocus = false;
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    processesStore.subscribe((_processes) => {
        for (let process of activeProcessStack.getActiveProcesses()) {
            if (
                process.getWindow().hasFocus &&
                !process.getWindow().minimized
            ) {
                hasFocus = true;
                return;
            }
            hasFocus = false;
        }
    });
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    //
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    //
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function handleContextMenu(e: MouseEvent) {
        //   e.preventDefault();
        //   showContextMenu(e.clientX, e.clientY, [
        //     {
        //       name: "Launch",
        //       icon: activeProcessStack.getProgram().icon,
        //       onClick: () => {
        //         hideContextMenu();
        //         program.createProcess().bringToTop();
        //         hideMenu();
        //       },
        //     },
        //     {
        //       name: "Unpin from taskbar",
        //       icon: "/images/desktop/unpin.svg",
        //       onClick: () => {
        //         hideContextMenu();
        //         removeProgramShortcut(program);
        //       },
        //     },
        //   ]);
    }

    function handleStackClick(e: MouseEvent) {
        hideMenu();
        if (activeProcessStack.getActiveProcesses().length <= 1) {
            activeProcessStack.getActiveProcesses().at(0).maximizeWindow();
            hideContextMenu();
            return;
        }
        let contextMenuOptions: Array<ContextMenuOptionObject> = [];
        let i = 0;
        for (let process of activeProcessStack.getActiveProcesses()) {
            contextMenuOptions.push({
                name: `${process.getProgram().name} ${i == 0 ? "" : ` (${i})`}`,
                icon: process.getProgram().icon,
                onClick: () => {
                    process.maximizeWindow();
                    hideContextMenu();
                },
            });
            i++;
        }
        showContextMenu(e.clientX, e.clientY, contextMenuOptions);
    }
    /** ENDOF EVENT HANDLERS */
</script>

<div
    style="grid-row: {row};"
    on:click={handleStackClick}
    on:contextmenu={handleContextMenu}
>
    <Tooltip tooltip={activeProcessStack.getProgram().name} position="top">
        <button class="active-process" class:hasFocus style="height: {height}">
            <img
                src={activeProcessStack.getProgram().icon}
                alt={activeProcessStack.getProgram().name}
                width="100%"
                height="auto"
            />
        </button>
    </Tooltip>
</div>

<style lang="scss">
    .active-process {
        background-color: var(--background-color);
        transition: background-color 0.25s;
        outline: none;
        border: none;

        cursor: pointer;

        img {
            width: 90%;
            transition: width 0.25s;
        }
    }

    .active-process.hasFocus {
        background-color: black;
    }

    .active-process:hover {
        background-color: var(--background-color-secondary-hover);

        img {
            width: 100%;
        }
    }
</style>
