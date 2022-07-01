<script lang="ts">
    import WhiskerMenu from "$components/shared/svg/whisker-menu.svelte";
    import OpenWindowsButton from "./OpenWindowsButton.svelte";
    import ReturnButton from "./ReturnButton.svelte";

    /** IMPORTS */
    // "svelte"
    //

    // "components"
    //

    // "objects"
    //

    // "stores"
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let buttonHeightInRem: number = 2.5;
    export let onOpenWindowsButtonPress: Function = () => {};
    export let onHomeButtonPress: Function = () => {};
    export let onBackButtonPress: Function = () => {};
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let openWindowsButtonElement: HTMLButtonElement;
    let homeButtonElement: HTMLButtonElement;
    let backButtonElement: HTMLButtonElement;
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
    function handleNavigationButtonPress(
        element: HTMLButtonElement,
        callback: Function
    ) {
        callback();
        element.classList.add("pressed");
        setTimeout(() => {
            element.classList.remove("pressed");
        }, 250);
    }
    /** ENDOF EVENT HANDLERS */
</script>

<div class="navigation-bar" style="height: {buttonHeightInRem}rem;">
    <span class="navigation-bar-button pressed" style="display: none;" />
    <button
        bind:this={openWindowsButtonElement}
        class="navigation-bar-button open-windows-button-container"
        on:click={() =>
            handleNavigationButtonPress(
                openWindowsButtonElement,
                onOpenWindowsButtonPress
            )}
    >
        <div style="width: 2rem;">
            <OpenWindowsButton />
        </div>
    </button>
    <button
        bind:this={homeButtonElement}
        class="navigation-bar-button middle-button-container"
        on:click={() =>
            handleNavigationButtonPress(homeButtonElement, onHomeButtonPress)}
    >
        <div style="height: 95%; width: 100%;">
            <WhiskerMenu />
        </div>
    </button>
    <button
        bind:this={backButtonElement}
        class="navigation-bar-button return-button-container"
        on:click={() =>
            handleNavigationButtonPress(backButtonElement, onBackButtonPress)}
    >
        <div style="width: 2rem;">
            <ReturnButton />
        </div>
    </button>
</div>

<style lang="scss">
    .navigation-bar {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 0;

        background-color: var(--bg_color_primary);

        width: 100%;

        overflow: hidden;

        .navigation-bar-button {
            background: none;
            border: none;
            flex: 1;
            height: 100%;
            width: 100%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2.5rem;

            transition: background-color 0.25s;
        }

        .navigation-bar-button.pressed {
            @include input-hover-inherit;
        }
    }
</style>
