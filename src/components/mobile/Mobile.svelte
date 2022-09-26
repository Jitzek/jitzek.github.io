<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    // "components"
    import Grid from "$components/shared/grid/Grid.svelte";
    import Wallpaper from "$components/shared/Wallpaper.svelte";
    import StatusBar from "$components/mobile/status_bar/StatusBar.svelte";
    import ContextMenu from "$components/shared/context_menu/ContextMenu.svelte";
    import ContextMenuOption from "$components/shared/context_menu/ContextMenuOption.svelte";
    import NavigationBar from "$components/mobile/navigation_bar/NavigationBar.svelte";
    import Applications from "$components/mobile/applications/Applications.svelte";
    import QuickBar from "$components/mobile/quick_bar/QuickBar.svelte";
    //

    // "objects"
    import { convertRemToPixels } from "$objects/shared/conversions";
    import type { Window as WindowObject } from "$objects/shared/program/Window";
    import type { Process as ProcessObject } from "$objects/shared/program/Process";
    //

    // "stores"
    import { contextMenuStore } from "$stores/shared/ContextMenuStore";
    import {
        showMenu as showApplicationsMenu,
        hideMenu as hideApplicationsMenu,
    } from "$stores/mobile/ApplicationsStore";
    import {
        maxWindowZIndex,
        processesStore,
        removeProcessByUuid,
    } from "$stores/shared/ProcessesStore";
    import MobileWindow from "./window/MobileWindow.svelte";
    import {
        collapseStatusBar,
        isStatusBarExpanded,
    } from "$stores/mobile/StatusBarStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    //
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let wallpaper: string = "/images/wallpapers/custom-design-01-1280x720.png";
    let currentProcess: ProcessObject | null = null;
    let currentWindow: WindowObject | null = null;
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    processesStore.subscribe((processes) => {
        let process = processes.find(
            (process) => process.getWindow().z_index >= maxWindowZIndex
        );
        if (process === undefined) {
            currentProcess = null;
            return;
        }
        currentProcess = process;
        currentWindow = currentProcess.getWindow();
        // currentWindow.fullscreen = true;
        // currentWindow.minimized = false;
    });
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    //
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    function openApplicationDrawer() {
        showApplicationsMenu();
    }
    function closeApplicationDrawer() {
        hideApplicationsMenu();
    }
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function handleOpenWindowsButtonPress() {}
    function handleHomeButtonPress() {
        collapseStatusBar();
        if (currentProcess !== null) {
            currentWindow.minimized = true;
        }
        closeApplicationDrawer();
    }
    function handleReturnButtonPress() {
        if (isStatusBarExpanded()) {
            collapseStatusBar();
            return;
        }
        if (currentProcess !== null) {
            removeProcessByUuid(currentProcess.uuid);
            return;
        }
        closeApplicationDrawer();
    }
    /** ENDOF EVENT HANDLERS */
</script>

<svelte:head>
    <title>Jitze Jan Kerkstra</title>
</svelte:head>

<Wallpaper src={wallpaper} />

<div class="grid-container">
    <Grid
        topOffset={2.5}
        bottomOffset={3.5 * 2}
        columnWidth={5}
        columnHeight={6}
        gap={1.5}
        padding={1}
    />
</div>

<QuickBar
    heightInRem={3.5}
    distanceFromBottomInRem={4}
    onApplicationsButtonPress={openApplicationDrawer}
/>

<Applications distanceFromBottomInRem={3.5} distanceFromTopInRem={2.5} />

<div class="window-container">
    {#if currentProcess !== null}
        <MobileWindow
            maximized={true}
            minimized={currentWindow.minimized}
            bottomOffset={convertRemToPixels(1.5)}
            topOffset={convertRemToPixels(2.5)}
        >
            <svelte:component
                this={currentProcess.getWindow().component}
                {...currentProcess.getWindow().componentAttributes}
                slot="content"
            />
        </MobileWindow>
    {/if}
</div>

<StatusBar
    statusBarHeightInRem={2.5}
    bottomOffsetInPX={convertRemToPixels(3.5)}
/>

<NavigationBar
    buttonHeightInRem={3.5}
    onOpenWindowsButtonPress={handleOpenWindowsButtonPress}
    onHomeButtonPress={handleHomeButtonPress}
    onBackButtonPress={handleReturnButtonPress}
/>

{#if $contextMenuStore.show}
    <ContextMenu x={$contextMenuStore.x} y={$contextMenuStore.y} z_index={10}>
        <div slot="options">
            {#each $contextMenuStore.options as option}
                <ContextMenuOption
                    name={option.name}
                    icon={option.icon}
                    onClick={option.onClick}
                />
            {/each}
        </div>
    </ContextMenu>
{/if}

<style lang="scss">
    .grid-container {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
    }
</style>
