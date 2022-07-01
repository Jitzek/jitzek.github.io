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
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let program: ProgramObject | null;
    export let sizeInRem = 5.5;
    export let ghost = false;
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
    }

    function handleMenuLauncherButtonClick() {
        program.createProcess().bringToTop();
        hideMenu();
    }

    function handleMenuLauncherButtonDragStart(e: DragEvent) {
        setDragAndDropData({ program_id: program.id.toString() });
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
        on:click={handleMenuLauncherButtonClick}
        on:contextmenu={handleMenuLauncherButtonContextMenu}
        draggable={true}
        on:dragstart={handleMenuLauncherButtonDragStart}
        class:ghost
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