<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    // "components"
    import Shortcut from "$components/shared/grid/Shortcut.svelte";
    //

    // "objects"
    import type { GridItem as GridItemObject } from "$objects/shared/grid/GridItem";
    import type { GridPosition as GridPositionObject } from "$objects/shared/grid/GridPosition";
    //

    // "stores"
    import { desktop, mobile } from "$stores/shared/DeviceTypeStore";
    import {
        deselectGridItem,
        gridStore,
        removeGridItem,
        selectGridItem,
    } from "$stores/shared/GridStore";
    import {
        hideContextMenu,
        showContextMenu,
    } from "$stores/shared/ContextMenuStore";

    import {
        clearData as clearDragAndDropData,
        dragAndDropStore,
        keyExists as dragAndDropKeyExists,
    } from "$stores/shared/DragAndDropStore";
    //

    // "actions"
    import { clickOutside } from "$actions/mouseoutside";
    import { longpressTouch } from "$actions/longpress";
    import { setData as setDragAndDropData } from "$stores/shared/DragAndDropStore";
    import { processesStore } from "$stores/shared/ProcessesStore";
    import { touchDragOrPress } from "$actions/touchdrag";
    import { executeProgramById } from "$stores/shared/ProgramsStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let gridPosition: GridPositionObject;

    export let onDragStart: (
        x: number,
        y: number,
        item: GridItemObject
    ) => void = (x: number, y: number, item: GridItemObject) => {};

    export let onDragEnd: (
        x: number,
        y: number,
        item: GridItemObject
    ) => void = (x: number, y: number, item: GridItemObject) => {};

    /** @deprecated due to potential performance issues */
    export const onTouchMove: (
        x: number,
        y: number,
        item: GridItemObject
    ) => void = (x: number, y: number, item: GridItemObject) => {};

    export let onTouchEnd: (
        x: number,
        y: number,
        item: GridItemObject
    ) => void = (x: number, y: number, item: GridItemObject) => {};

    export let onTouchDragStart: (
        x: number,
        y: number,
        item: GridItemObject
    ) => void = (x: number, y: number, item: GridItemObject) => {};

    export let onTouchDragEnd: (
        x: number,
        y: number,
        item: GridItemObject
    ) => void = (x: number, y: number, item: GridItemObject) => {};
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let isDragging: boolean = false;

    let dragStartX: number;
    let dragStartY: number;

    let shiftDown: boolean = false;
    let ctrlDown: boolean = false;

    let touchStart: number;
    let longPressTouchTime: number = 250;
    let touchMoving: boolean = false;
    let touchCanceled: boolean = false;
    let touchDragging: boolean = false;

    let clientX: number;
    let clientY: number;
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    //
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    //
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    function showContextMenuHelper(x: number, y: number) {
        showContextMenu(x, y, [
            {
                name: "Launch",
                icon: gridPosition.item.program.icon,
                onClick: () => {
                    hideContextMenu();
                    executeProgramById(
                        gridPosition.item.program.id
                    )?.bringToTop();
                },
            },
            {
                name: "Remove Shortcut",
                icon: null,
                onClick: () => {
                    hideContextMenu();
                    if (gridPosition.item !== null) {
                        removeGridItem(gridPosition.item.id);
                    }
                },
            },
        ]);
    }
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    /** @deprecated functionality might be handled in {Grid.svelte} instead **/
    function window_handleDragOver(e: DragEvent) {
        e.preventDefault();
        if (isDragging) {
            let gridPositionBeingDraggedOver: GridPositionObject | null = $gridStore.getClosestGridPositionToPosition(
                e.clientX,
                e.clientY
            );
            if (
                gridPositionBeingDraggedOver &&
                gridPositionBeingDraggedOver.item !== null &&
                gridPosition.item !== null &&
                gridPositionBeingDraggedOver.item.id !== gridPosition.item.id
            ) {
                e.dataTransfer.dropEffect = "link";
            } else {
                e.dataTransfer.dropEffect = "move";
            }
        }
        /*
        	The dragend event will always show 0 for the clientX and clientY on Firefox.
        	As a workaround we can keep track of the end position by taking the last clientX and clientY of the dragover event.
    	*/
        handleMove(e.clientX, e.clientY);
        // onDragMove(e.clientX, e.clientY, gridPosition.item);
    }
    function window_handleKeyDown(e: KeyboardEvent) {
        shiftDown = e.shiftKey;
        ctrlDown = e.ctrlKey;
    }
    function window_handleKeyUp(e: KeyboardEvent) {
        shiftDown = e.shiftKey;
        ctrlDown = e.ctrlKey;
    }
    function window_handleDragEnd(_e: DragEvent) {
        if (gridPosition.item === null) return;
        handleMoveEnd(clientX, clientY);
        onDragEnd(clientX, clientY, gridPosition.item);
    }
    function window_handleTouchEnd(_e: TouchEvent) {
        const x = clientX;
        const y = clientY;
        if (touchDragging) {
            touchDragging = false;
            onTouchDragEnd(x, y, gridPosition.item);
        }
        if (gridPosition.item !== null) {
            if (touchMoving && gridPosition.item.selected) {
                // This is currently bugged on Mozilla Firefox
                // preventDefault() in contextmenu listener cancels touch event generation (sends touchcancel)
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1481923
                handleMoveEnd(x, y);
            }
            deselectGridItem(gridPosition.item);
        } else if (!dragAndDropKeyExists("program_id")) {
            return;
        }
        onTouchEnd(x, y, gridPosition.item);
    }

    function handleMoveStart(x: number, y: number) {
        dragStartX = x;
        dragStartY = y;
        isDragging = true;
    }

    function handleMove(x: number, y: number) {
        if (!isDragging) return;

        clientX = x;
        clientY = y;
    }

    function handleMoveEnd(x: number, y: number) {}

    function handleTouchDragOrPress(e: CustomEvent) {
        e.preventDefault();

        if (e.detail.press) {
            // Open program
            let processAlreadyRunning = false;
            if ($mobile) {
                for (let process of $processesStore) {
                    if (
                        process.getProgramId() === gridPosition.item.program.id
                    ) {
                        process.bringToTop();
                        process.unMinimizeWindow();
                        processAlreadyRunning = true;
                        break;
                    }
                }
            }
            if (!processAlreadyRunning || !$mobile) {
                executeProgramById(gridPosition.item.program.id)?.bringToTop();
            }
            return;
        }
        if (!e.detail.drag) return;

        const x = (e.target as HTMLElement).offsetLeft;
        const y = (e.target as HTMLElement).offsetTop;
        handleMoveStart(x, y);
        selectGridItem(gridPosition.item);
        // setDragAndDropData({
        //     program_id: gridPosition.item.program.id.toString(),
        // });
        onTouchDragStart(x, y, gridPosition.item);
        // onDragStart(x, y, gridPosition.item);
        touchDragging = true;
    }

    function handleTouchMove(e: TouchEvent) {
        e.preventDefault();
        touchMoving = true;
        const x = e.targetTouches[0].clientX;
        const y = e.targetTouches[0].clientY;
        handleMove(x, y);
        // onTouchMove(x, y, gridPosition.item);
        hideContextMenu();
    }

    function handleDragStart(e: DragEvent) {
        // setDragAndDropData({
        //     program_id: gridPosition.item.program.id.toString(),
        // });
        handleMoveStart(e.clientX, e.clientY);
        onDragStart(e.clientX, e.clientY, gridPosition.item);
    }

    function handleDrop(e: DragEvent) {
        e.preventDefault();
    }

    function handleClickOutside(e: MouseEvent) {
        if (ctrlDown) return;
        if (gridPosition.item.selected) {
            deselectGridItem(gridPosition.item);
        }
    }

    function handleContextMenu(e: MouseEvent) {
        e.preventDefault();
        showContextMenuHelper(e.clientX, e.clientY);
    }

    function handleLongPressTouch(e: CustomEvent) {
        e.preventDefault();
        showContextMenuHelper(e.detail.clientX, e.detail.clientY);
    }

    function handleMouseDown(e: MouseEvent) {
        if (!ctrlDown && $gridStore.getSelectedItems().length <= 1) {
            $gridStore.gridItems.forEach((gridItem) => {
                if (gridItem.id !== gridPosition.item.id)
                    deselectGridItem(gridItem);
            });
        }
        selectGridItem(gridPosition.item);
    }

    function handleDoubleClick(e: MouseEvent) {
        executeProgramById(gridPosition.item.program.id)?.bringToTop();
    }

    /** ENDOF EVENT HANDLERS */
</script>

<svelte:window
    on:dragover={window_handleDragOver}
    on:keydown={window_handleKeyDown}
    on:keyup={window_handleKeyUp}
    on:dragend={window_handleDragEnd}
    on:touchend={window_handleTouchEnd}
/>

{#if gridPosition.item == null}
    <div
        class="grid-element"
        style="grid-row: {gridPosition.row}; grid-column: {gridPosition.column}; width: {gridPosition.width}rem; height: {gridPosition.height}rem;"
    />
{:else}
    <div
        class:desktop
        class:mobile
        class="grid-element-overlay {gridPosition.item.selected
            ? 'selected'
            : ''}"
    >
        <div
            class:desktop
            class:mobile
            class="grid-element"
            style="grid-row: {gridPosition.row}; grid-column: {gridPosition.column}; width: {gridPosition.width}rem; height: {gridPosition.height}rem;"
            draggable={true}
            on:contextmenu={handleContextMenu}
            use:touchDragOrPress={250}
            on:touchdragorpress={handleTouchDragOrPress}
            on:touchdragmove={handleTouchMove}
            on:dragstart={handleDragStart}
            on:drop={handleDrop}
            use:clickOutside
            on:clickoutside={handleClickOutside}
            use:longpressTouch={500}
            on:longpresstouch={handleLongPressTouch}
            on:mousedown={handleMouseDown}
            on:dblclick={handleDoubleClick}
        >
            <Shortcut program={gridPosition.item.program} />
        </div>
    </div>
{/if}

<style lang="scss">
    .grid-element {
        overflow: hidden;

        -moz-user-select: none;
        -webkit-user-select: none;
        user-select: none;
    }
    .grid-element-overlay {
        outline: 0 solid rgba(255, 255, 255, 0.5);
    }

    .grid-element-overlay.desktop:hover,
    .grid-element-overlay.desktop.selected {
        outline-width: 1px;
        background-color: rgba(255, 255, 255, 0.4);
    }

    .grid-element-overlay.mobile:hover,
    .grid-element-overlay.mobile.selected {
        outline-width: 1px;
        background-color: rgba(255, 255, 255, 0.4);
        /* TODO */
    }
</style>
