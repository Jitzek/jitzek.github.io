<script lang="ts">
    /** IMPORTS */
    // "svelte"
    import { slide } from "svelte/transition";
    //

    // "components"
    import AboutMeButton from "$components/desktop/taskbar/menu/AboutMeButton.svelte";
    import SwitchToMobileButton from "$components/desktop/taskbar/menu/global_options/SwitchToMobileButton.svelte";
    import ChangeThemeSwitch from "$components/desktop/taskbar/menu/global_options/ChangeThemeSwitch.svelte";
    import Categories from "$components/desktop/taskbar/menu/categories/Categories.svelte";
    import Tooltip from "$components/desktop/Tooltip.svelte";
    //

    // "objects"
    //
    //

    // "stores"
    import { showMenuStore } from "$stores/desktop/MenuStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    /**
     * Offset from taskbar in Rem
     */
    export let offset: number = 0;
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
    function handleMenuDragOver(e: DragEvent) {
        e.preventDefault();
        e.dataTransfer.dropEffect = "none";
    }
    /** ENDOF EVENT HANDLERS */
</script>

{#if $showMenuStore}
    <div
        class="menu-container"
        style="bottom: {offset}rem; --offset: {offset}rem;"
        in:slide={{ duration: 500 }}
        out:slide={{ duration: 500 }}
        on:dragover={handleMenuDragOver}
    >
        <div class="menu-container-top">
            <div class="about-me-button-container">
                <AboutMeButton name="Jitze Jan Kerkstra" />
            </div>
            <div class="system-buttons-container">
                <Tooltip
                    tooltip="Toggle Mobile View"
                    position="bottom"
                    width="4.5rem"
                >
                    <SwitchToMobileButton />
                </Tooltip>
                <div style="padding-left: 0.75rem;" />
            </div>
        </div>
        <Categories />
    </div>
{/if}

<style lang="scss">
    $--menu-min-width: 40rem;

    .menu-container {
        background-color: var(--bg_color_primary);

        min-width: $--menu-min-width;
        width: min-content;
        transition: bottom 0.25s;
        position: absolute;

        max-height: calc(100vh - var(--offset));

        overflow-y: auto;

        .menu-container-top {
            display: flex;
            padding-bottom: 1rem;
            .about-me-button-container {
                flex: 3;
            }

            .system-buttons-container {
                display: flex;
                align-items: center;
                padding: 1rem;
                flex: 1;
            }
        }
    }

    @media only screen and (max-width: $--menu-min-width) {
        .menu-container {
            min-width: 100%;
        }
    }

    @media only screen and (max-width: 300px) {
        .menu-container {
            .menu-container-top {
                // Make sure the button to switch to mobile is still visible
                display: inline-block;
            }
        }
    }
</style>
