<script lang="ts">
    import ChangeThemeSwitch from "$components/desktop/taskbar/menu/global_options/ChangeThemeSwitch.svelte";

    /** IMPORTS */
    // "svelte"
    //

    // "components"
    //

    // "objects"
    import { changeCursor, Cursor } from "$objects/desktop/cursors";
    import { convertRemToPixels } from "$objects/shared/conversions";
    import { expandStatusBarStore, expandStatusBar as expandStatusBarWithStore, collapseStatusBar as collapseStatusBarWithStore } from "$stores/mobile/StatusBarStore";
    //

    // "stores"
    import {
        dateStore,
        getDateString,
        getDayOfMonth,
        getDayOfWeekString,
        getMonthOfYearString,
        getTimeWithoutSecondsAsString,
    } from "$stores/shared/DateTimeStore";
    import DoubleArrow from "./DoubleArrow.svelte";
    import SwitchToDesktopButton from "./global_options/SwitchToDesktopButton.svelte";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let statusBarHeightInRem: number = 2.5;
    export let expanded: boolean = false;
    export let bottomOffsetInPX: number = 0;
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let expanding: boolean = false;
    let statusBarElement: HTMLDivElement;
    let statusBarBorderElement: HTMLDivElement;
    let innerHeight: number;
    let statusBarOffset: number = 0;
    let isResizing: boolean = false;
    let minY: number = 0;
    let maxY: number = 0;
    let deltaY: number = 0;
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    expandStatusBarStore.subscribe((expandStatusBar) => {
        expanded = expandStatusBar;
    });
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    $: {
        maxY =
            innerHeight -
            convertRemToPixels(statusBarHeightInRem) -
            bottomOffsetInPX;
        if (statusBarOffset >= maxY) statusBarOffset = maxY;
    }
    $: {
        expanded;
        if (!isResizing)
            expanded ? expandStatusBar(true) : collapseStatusBar(true);
    }
    $: {
        innerHeight;
        if (!isResizing)
            expanded ? expandStatusBar(false) : collapseStatusBar(false);
    }
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    function expandStatusBar(smoothly: boolean = true) {
        statusBarOffset = maxY;
        if (!smoothly) return;
        expanding = true;
        setTimeout(() => {
            expanding = false;
        }, 500);
        expandStatusBarWithStore();
    }
    function collapseStatusBar(smoothly: boolean = true) {
        statusBarOffset = minY;
        if (!smoothly) return;
        expanding = true;
        setTimeout(() => {
            expanding = false;
        }, 500);
        collapseStatusBarWithStore();
    }
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function handleStatusBarBorderMoveStart(y: number) {
        isResizing = true;
        changeCursor(Cursor.GRABBING);
        statusBarBorderElement.style.cursor = Cursor.GRABBING;
    }
    function handleStatusBarBorderMove(y: number) {
        if (!isResizing) return;
        deltaY = statusBarOffset - y;
        statusBarOffset = y;
        if (statusBarOffset <= minY) statusBarOffset = minY;
        else if (statusBarOffset >= maxY) statusBarOffset = maxY;
    }
    function handleStatusBarMoveBorderEnd(y: number) {
        if (!isResizing) return;
        changeCursor(Cursor.AUTO);
        statusBarBorderElement.style.cursor = Cursor.GRAB;
        isResizing = false;
        // Check if the statusbar should be locked as expanded or folded
        // If the acceleration of the status bar is going up and exceeding a predetermined number
        if (deltaY >= 2) {
            expanded = false;
        }
        // If the acceleration of the status bar is going down and exceeding a predetermined number
        else if (deltaY <= -2) {
            expanded = true;
        }
        // If the status bar halfway (or more) collapsed
        else if (statusBarOffset <= (maxY - minY) / 2) {
            expanded = false;
        }
        // If the status bar halfway (or more) expanded
        else if (statusBarOffset >= (maxY - minY) / 2) {
            expanded = true;
        }
    }
    function window_handleTouchEnd(e: TouchEvent) {
        if (!isResizing) return;
        e.preventDefault();
        handleStatusBarMoveBorderEnd(e.changedTouches[0].clientY);
    }
    function window_handleMouseMove(e: MouseEvent) {
        if (!isResizing) return;
        e.preventDefault();
        handleStatusBarBorderMove(e.clientY);
    }
    function window_handleMouseUp(e: MouseEvent) {
        if (!isResizing) return;
        e.preventDefault();
        handleStatusBarMoveBorderEnd(e.clientY);
    }

    function handleStatusBarBorderTouchStart(e: TouchEvent) {
        handleStatusBarBorderMoveStart(e.targetTouches[0].clientY);
    }
    function handleStatusBarBorderTouchMove(e: TouchEvent) {
        if (!isResizing) return;
        e.preventDefault();
        handleStatusBarBorderMove(e.targetTouches[0].clientY);
    }
    function handleStatusBarBorderMouseDown(e: MouseEvent) {
        handleStatusBarBorderMoveStart(e.clientY);
    }
    function handleStatusBarBorderContextMenu(e: MouseEvent) {
        e.preventDefault();
    }
    /** ENDOF EVENT HANDLERS */
</script>

<svelte:window
    bind:innerHeight
    on:touchend={window_handleTouchEnd}
    on:mousemove={window_handleMouseMove}
    on:mouseup={window_handleMouseUp}
/>

<div
    bind:this={statusBarElement}
    class:expanding
    class="status-bar"
    style="top: {statusBarOffset -
        maxY +
        convertRemToPixels(statusBarHeightInRem)}px; height: {maxY};"
>
    <div class="status-bar-content" style="height: {maxY}px;">
        <div class="status-bar-content-top">
            <div class="status-bar-content-top-left">
                <span class="date"
                    >{getDayOfWeekString($dateStore, "short")}, {getMonthOfYearString(
                        $dateStore,
                        "long"
                    )}
                    {getDayOfMonth($dateStore)}</span
                >
            </div>
            <div class="status-bar-content-top-right">
                <SwitchToDesktopButton />
                <div style="padding-left: 0.75rem;" />
                <ChangeThemeSwitch />
            </div>
        </div>
    </div>
</div>
<div class="status-bar-status" style="height: {statusBarHeightInRem}rem;">
    <div class="status-bar-status-left">
        <span>{getTimeWithoutSecondsAsString($dateStore)}</span>
    </div>
    <div class="status-bar-status-right">
        <!-- Right -->
    </div>
</div>
<div
    bind:this={statusBarBorderElement}
    class:expanding
    class:expanded
    class:isResizing
    class="status-bar-border"
    style="height: {statusBarHeightInRem}rem; top: {statusBarOffset}px"
    on:touchstart={handleStatusBarBorderTouchStart}
    on:mousedown={handleStatusBarBorderMouseDown}
    on:contextmenu={handleStatusBarBorderContextMenu}
    on:touchmove={handleStatusBarBorderTouchMove}
>
    <DoubleArrow size="1.5rem" rotation="{expanded ? "180deg" : "0deg"}" />
</div>

<style lang="scss">
    .status-bar {
        position: fixed;
        width: 100%;

        .status-bar-content {
            position: absolute;
            width: 100%;
            overflow: auto;
            background-color: var(--bg_color_secondary);

            .status-bar-content-top {
                display: flex;
                width: 100%;
                align-items: center;
                .status-bar-content-top-left {
                    margin: 0.5rem;
                    display: flex;
                    margin-right: auto;

                    .date {
                        font-size: 1.25rem;
                    }
                }
                .status-bar-content-top-right {
                    margin: 0.5rem;
                    display: flex;
                    margin-left: auto;
                }
            }
        }
    }

    .status-bar-border {
        cursor: grab;
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background-color: transparent;

        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }

    .status-bar.expanding {
        transition: top 0.5s;
    }
    .status-bar-border.expanding {
        transition: top 0.5s;
        background-color: var(--bg_color_primary);
    }
    .status-bar-border.expanded {
        background-color: var(--bg_color_primary);
    }
    .status-bar-border.isResizing {
        background-color: var(--bg_color_primary);
    }

    .status-bar-status {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        background-color: var(--bg_color_primary);
        width: 100%;

        .status-bar-status-left {
            position: absolute;
            left: 0;
            margin: 0.5rem;
        }

        .status-bar-status-middle {
            position: absolute;
            left: 50%;
            right: 50%;
            margin: 0.5rem;
        }

        .status-bar-status-right {
            position: absolute;
            right: 0;
            margin: 0.5rem;
        }
    }
</style>
