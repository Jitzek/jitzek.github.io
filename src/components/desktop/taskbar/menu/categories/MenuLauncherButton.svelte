<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    // "components"
    //

    // "objects"
    import type { Program as ProgramObject } from "$objects/shared/program/Program";
    //

    // "stores"
    import {
        hideContextMenu,
        showContextMenu,
    } from "$stores/shared/ContextMenuStore";
    import { hideMenu } from "$stores/desktop/MenuStore";
    import {
        addProgramShortcut,
        containsProgramShortcut,
        removeProgramShortcut,
    } from "$stores/desktop/TaskbarStore";
    import { setData as setDragAndDropData } from "$stores/shared/DragAndDropStore";
    import { executeProgramById } from "$stores/shared/ProgramsStore";
    import Redirect from "$components/shared/svg/RedirectIcon.svelte";
import RedirectIcon from "$components/shared/svg/RedirectIcon.svelte";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let program: ProgramObject;
    export let activated: boolean = false;
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    //
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    //
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    //
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    //
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function handleMenuLauncherButtonContextMenu(e: MouseEvent) {
        e.preventDefault();
        showContextMenu(e.clientX, e.clientY, [
            {
                name: "Launch",
                icon: program.icon,
                icon_props: null,
                onClick: () => {
                    hideContextMenu();
                    program.createProcess().bringToTop();
                    hideMenu();
                },
            },
            {
                name: containsProgramShortcut(program)
                    ? "Unpin from taskbar"
                    : "Pin to taskbar",
                icon: containsProgramShortcut(program)
                    ? "/images/desktop/unpin.svg"
                    : "/images/desktop/pin.svg",
                icon_props: null,
                onClick: () => {
                    hideContextMenu();
                    containsProgramShortcut(program)
                        ? removeProgramShortcut(program)
                        : addProgramShortcut(program);
                },
            },
        ]);
    }

    function handleMenuLauncherButtonClick() {
        executeProgramById(program.id)?.bringToTop();
        hideMenu();
    }

    function handleMenuLauncherButtonDragStart(_e: DragEvent) {
        setDragAndDropData({ program_id: program.id.toString() });
    }
    /** ENDOF EVENT HANDLERS */
</script>

<button
    class:activated
    class="menu-launcher-button"
    on:click={handleMenuLauncherButtonClick}
    on:contextmenu={handleMenuLauncherButtonContextMenu}
    draggable={true}
    on:dragstart={handleMenuLauncherButtonDragStart}
>
    <div class="menu-launcher-button-content">
        <img src={program.icon} alt={program.name} />
        {#if program.redirect}
            <div class="redirect-indicator">
                <RedirectIcon offsetX="-1rem" offsetY="1rem" />
            </div>
        {/if}
        <div class="name-and-description">
            <span class="name">{program.name}</span>
            {#if program.description}
                <br />
                <span class="description">{program.description}</span>
            {/if}
        </div>
    </div>
</button>

<style lang="scss">
    .menu-launcher-button {
        @include input-inherit;
        outline: none;
        border: none;

        transition: background-color 0.25s;

        display: block;

        cursor: pointer;

        width: 100%;
        height: 3.25rem;

        .menu-launcher-button-content {
            display: flex;
            height: 100%;
            align-items: center;
            overflow: hidden;

            img {
                display: inline;
                margin: 0;
                margin-right: 8px;
                width: 2.5rem;
                transition: width 0.25s;
                height: auto;
            }

            .redirect-indicator {
                width: 0.75rem;
                transition: width 0.25s;
            }

            .name-and-description {
                display: inline-block;
                text-align: left;
                color: var(--fg_color_primary);

                .description {
                    color: var(--fg_color_secondary);
                    font-size: 0.85rem;
                }
            }
        }
    }

    .menu-launcher-button:hover,
    .menu-launcher-button:focus {
        @include input-hover-inherit;
    }

    .menu-launcher-button.activated {
        @include input-active-inherit;
    }

    .menu-launcher-button:hover,
    .menu-launcher-button:focus,
    .menu-launcher-button.activated {
        img {
            width: 2.75rem;
        }
    }
</style>
