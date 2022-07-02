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
    import {
        addProgramShortcut,
        containsProgramShortcut,
        removeProgramShortcut,
    } from "$stores/desktop/TaskbarStore";
    import { setData as setDragAndDropData } from "$stores/shared/DragAndDropStore";
    import { hideMenu as hideApplicationsMenu } from "$stores/mobile/ApplicationsStore";
    import { notify, processesStore } from "$stores/shared/ProcessesStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let program: ProgramObject | null;
    export let sizeInRem = 5.5;
    export let ghost = false;
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let touchStart: number;
    let touchEnd: number;
    let longPressTouchTime: number = 500;
    let touchMoving: boolean = false;
    let touchCanceled: boolean = false;
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
    function handleApplicationLauncherButtonContextMenu(e: MouseEvent) {
        e.preventDefault();
    }

    function handleApplicationLauncherButtonClick() {
        program.createProcess().bringToTop();
    }

    function handleApplicationLauncherButtonDragStart(e: DragEvent) {
        setDragAndDropData({ program_id: program.id.toString() });
    }

    function handleApplicationLauncherButtonTouchStart(e: TouchEvent) {
        e.preventDefault();
        touchMoving = false;
        touchCanceled = false;
        touchStart = +new Date();
        setTimeout(() => {
            if (!touchCanceled && !touchMoving) {
                hideApplicationsMenu();
                setDragAndDropData({
                    program_id: program.id.toString(),
                });
            }
        }, longPressTouchTime);
    }

    function handleApplicationLauncherButtonTouchEnd(e: TouchEvent) {
        touchEnd = +new Date();
        touchCanceled = true;

        if (!touchMoving && touchEnd - touchStart < longPressTouchTime) {
            // Open program
            for (let process of $processesStore) {
                if (process.getProgramId() === program.id) {
                    process.bringToTop();
                    process.unMinimizeWindow();
                    console.log("success");
                    return;
                }
            }
            program.createProcess().bringToTop();
        }
    }
    function handleApplicationLauncherButtonTouchMove(e: TouchEvent) {
        e.preventDefault();
        touchMoving = true;
    }

    /** ENDOF EVENT HANDLERS */
</script>

{#if ghost}
    <button
        class="application-launcher-button"
        class:ghost
        style="width: {sizeInRem}rem; height: {sizeInRem};"
    />
{:else}
    <button
        class="application-launcher-button"
        on:click={handleApplicationLauncherButtonClick}
        on:contextmenu={handleApplicationLauncherButtonContextMenu}
        draggable={true}
        on:dragstart={handleApplicationLauncherButtonDragStart}
        class:ghost
        on:touchstart={handleApplicationLauncherButtonTouchStart}
        on:touchend={handleApplicationLauncherButtonTouchEnd}
        on:touchmove={handleApplicationLauncherButtonTouchMove}
        style="width: {sizeInRem}rem; height: {sizeInRem};"
    >
        <div class="application-launcher-button-content">
            <img src={program.icon} alt={program.name} /><br />
            <span class="name">{program.name}</span>
        </div>
    </button>
{/if}

<style lang="scss">
    .application-launcher-button {
        @include input-inherit;
        outline: none;
        border: none;

        transition: background-color 0.25s;

        cursor: pointer;

        margin: 0.1rem;

        .application-launcher-button-content {
            width: 100%;
            height: 100%;

            img {
                width: 50%;
                height: 50%;
            }

            text-align: center;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;

            .name {
                font-size: 0.75rem;
            }
        }
    }

    .application-launcher-button.ghost {
        opacity: 0;
    }

    .application-launcher-button:hover,
    .application-launcher-button:focus {
        @include input-hover-inherit;
    }

    .application-launcher-button:active {
        @include input-active-inherit;
    }

    .application-launcher-button:hover,
    .application-launcher-button:focus,
    .application-launcher-button:active {
    }
</style>
