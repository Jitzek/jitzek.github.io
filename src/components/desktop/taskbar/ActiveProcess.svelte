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
        processesStore,
        removeProcess,
    } from "$stores/shared/ProcessesStore";
    import CloseIcon from "$components/shared/svg/CloseIcon.svelte";
    import MinimizeIcon from "$components/shared/svg/MinimizeIcon.svelte";
    import MaximizeIcon from "$components/shared/svg/MaximizeIcon.svelte";
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
        e.preventDefault();
        let options: ContextMenuOptionObject[] = [];
        if (activeProcessStack.getActiveProcesses().length > 1) {
            options = options.concat([
                {
                    name: "Minimize All",
                    icon: MinimizeIcon,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .forEach((activeProcess) => {
                                activeProcess.minimizeWindow();
                            });
                        hideMenu();
                    },
                },
                {
                    name: "Unminimize All",
                    icon: null,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .forEach((activeProcess) => {
                                activeProcess.unMinimizeWindow();
                            });
                        hideMenu();
                    },
                },
                {
                    name: "Maximize All",
                    icon: MaximizeIcon,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .forEach((activeProcess) => {
                                activeProcess.maximizeWindow();
                            });
                        hideMenu();
                    },
                },
                {
                    name: "Unmaximize All",
                    icon: null,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .forEach((activeProcess) => {
                                activeProcess.unMaximizeWindow();
                            });
                        hideMenu();
                    },
                },
                {
                    name: "Close All",
                    icon: CloseIcon,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .forEach((activeProcess) => {
                                removeProcess(activeProcess);
                            });
                        hideMenu();
                    },
                },
            ]);
        } else {
            options = options.concat([
                {
                    name: "Minimize",
                    icon: MinimizeIcon,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .at(0)
                            .minimizeWindow();
                        hideMenu();
                    },
                },
                {
                    name: "Unminimize",
                    icon: null,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .at(0)
                            .unMinimizeWindow();
                        hideMenu();
                    },
                },
                {
                    name: "Maximize",
                    icon: MaximizeIcon,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .at(0)
                            .maximizeWindow();
                        hideMenu();
                    },
                },
                {
                    name: "Unmaximize",
                    icon: null,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        activeProcessStack
                            .getActiveProcesses()
                            .at(0)
                            .unMaximizeWindow();
                        hideMenu();
                    },
                },
                {
                    name: "Close",
                    icon: CloseIcon,
                    icon_props: {
                        size: "35%",
                    },
                    onClick: () => {
                        hideContextMenu();
                        removeProcess(
                            activeProcessStack.getActiveProcesses().at(0)
                        );
                        hideMenu();
                    },
                },
            ]);
        }
        showContextMenu(e.clientX, e.clientY, options);
    }

    function handleStackClick(e: MouseEvent) {
        hideMenu();
        if (activeProcessStack.getActiveProcesses().length <= 1) {
            activeProcessStack.getActiveProcesses().at(0).unMinimizeWindow();
            hideContextMenu();
            return;
        }
        let contextMenuOptions: Array<ContextMenuOptionObject> = [];
        let i = 0;
        for (let process of activeProcessStack.getActiveProcesses()) {
            contextMenuOptions.push({
                name: `${process.getProgram().name} ${i == 0 ? "" : ` (${i})`}`,
                icon: process.getProgram().icon,
                icon_props: null,
                onClick: () => {
                    process.unMinimizeWindow();
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
            {#if activeProcessStack.getActiveProcesses().length > 1}
                <div class="process-count-container">
                    <span class="process-count"
                        >{activeProcessStack.getActiveProcesses().length}</span
                    >
                </div>
            {/if}
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

        .process-count-container {
            position: absolute;
            bottom: 0.25rem;
            right: 0.25rem;
            width: 1.2rem;
            height: 1.2rem;
            background-color: var(--fg_color_primary);
            border-radius: 100%;
            border-style: solid;
            border-width: 0.1rem;
            border-color: var(--bg_color_primary);
            display: flex;
            vertical-align: middle;
            align-items: center;

            .process-count {
                color: var(--bg_color_primary);
                position: relative;
                margin: 0 auto;
                width: auto;
                height: auto;
                font-weight: bold;
            }
        }
    }

    .active-process:hover {
        background-color: var(--input_hover_bg_color);

        img {
            width: 100%;
        }
    }

    .active-process.hasFocus {
        background-color: var(--input_active_bg_color);
    }

    .active-process.hasFocus:hover {
        background-color: var(--input_active_bg_color);

        img {
            width: 100%;
        }
    }
</style>
