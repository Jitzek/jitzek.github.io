<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    // "components"
    import GridPosition from "$components/shared/grid/GridPosition.svelte";
    //

    // "objects"
    import { GridItem as GridItemObject } from "$objects/shared/grid/GridItem";
    import type { GridPosition as GridPositionObject } from "$objects/shared/grid/GridPosition";
    //

    // "stores"
    import { hideMenu } from "$stores/desktop/MenuStore";
    import { getProgramById } from "$stores/shared/ProgramsStore";
    import {
        addGridItem,
        gridStore,
        rearrangeGrid,
        setGridParameters,
        setPreferredPositionOfGridItem,
    } from "$stores/shared/GridStore";
    import {
        clearData as clearDragAndDropData,
        dragAndDropStore,
        keyExists as dragAndDropKeyExists,
    } from "$stores/shared/DragAndDropStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let widthOffset: number = 0;
    export let topOffset: number = 0;
    export let bottomOffset: number = 0;

    // Column width in Rem
    export let columnWidth: number = 3;
    // Column height in Rem
    export let columnHeight: number = 4;

    // Gaps between columns and rows in Rem
    export let gap: number = 2.5;
    // Padding of the grid in Rem
    export let padding: number = 1;
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let screenWidth: number;
    let screenHeight: number;

    let gridItemBeingDragged: GridItemObject = null;
    let positionsBeingHovered: GridPositionObject[] = [];

    let lastKnownX = 0;
    let lastKnownY = 0;
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    dragAndDropStore.subscribe((_) => {
        if (!dragAndDropKeyExists("program_id")) hideGridHelperLines();
    });
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    $: {
        [
            screenWidth,
            screenHeight,
            gap,
            widthOffset,
            topOffset,
            bottomOffset,
            padding,
            columnWidth,
            columnHeight,
        ];
        setGridParameters(
            gap,
            widthOffset,
            topOffset,
            bottomOffset,
            padding,
            columnWidth,
            columnHeight
        );
        if (screenWidth && screenHeight) {
            rearrangeGrid(screenWidth, screenHeight);
        }
    }
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    function placeGridItemOnGrid(x: number, y: number, item: GridItemObject) {
        // lastKnownX and lastKnownY seem more reliable
        x = lastKnownX;
        y = lastKnownY;
        let offsetX = x - item.position.x;
        let offsetY = y - item.position.y;

        let position = $gridStore.getClosestGridPositionToPosition(x, y);
        // Check if the GridItem being dragged is dropped on an occupied spot
        if (position && position.item != null) {
            if (position.item == item) return;
            // Attempt to handle data transfer of dragged gridItems
        } else {
            // Attempt to place GridItem on grid
            $gridStore.getSelectedItems().forEach((gridItem) => {
                let or_gridPosition = $gridStore.gridPositions.find(
                    (_position) =>
                        _position.item != null &&
                        _position.item.id == gridItem.id
                );
                let new_gridPosition = $gridStore.getClosestGridPositionToPosition(
                    or_gridPosition.x + offsetX,
                    or_gridPosition.y + offsetY,
                    (position: GridPositionObject) =>
                        position.item == null || position.item == gridItem
                );
                setPreferredPositionOfGridItem(
                    gridItem,
                    new_gridPosition.row,
                    new_gridPosition.column
                );
            });
        }
    }
    function hideGridHelperLines() {
        gridItemBeingDragged = null;
        positionsBeingHovered = [];
    }
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    // TODO: Closely resembles {placeGridItemOnGrid}, maybe use a generic function instead?
    function handleGridMoveOver(x: number, y: number) {
        lastKnownX = x;
        lastKnownY = y;
        positionsBeingHovered = [];
        let position = $gridStore.getClosestGridPositionToPosition(x, y);
        if (gridItemBeingDragged === null) {
            if (dragAndDropKeyExists("program_id")) {
                positionsBeingHovered.push(position);
            }
            return;
        }
        let offsetX = x - gridItemBeingDragged.position.x;
        let offsetY = y - gridItemBeingDragged.position.y;

        // Check if the GridItem being dragged is dropped on an occupied spot
        if (position && position.item != null) {
            if (position.item == gridItemBeingDragged) return;
            // Inform user about potential data transfer of dragged gridItems
        } else {
            // Fill list with the grid positions where the currently selected/dragged items will be placed
            $gridStore.getSelectedItems().forEach((gridItem) => {
                let or_gridPosition = $gridStore.gridPositions.find(
                    (_position) =>
                        _position.item != null &&
                        _position.item.id == gridItem.id
                );
                let new_gridPosition = $gridStore.getClosestGridPositionToPosition(
                    or_gridPosition.x + offsetX,
                    or_gridPosition.y + offsetY,
                    (position: GridPositionObject) =>
                        position.item == null || position.item == gridItem
                );
                positionsBeingHovered.push(new_gridPosition);
            });
        }
    }

    function handleGridDrop(e: DragEvent) {
        handlePlaceItem(e.clientX, e.clientY);
    }

    function handleGridContextMenu(e: MouseEvent) {
        // FIXME: Calling preventDefault() also calls touchCancel.
        // This causes the touchMove to be canceled and no helper grid to appear.
        e.preventDefault();
    }

    function handlePlaceItem(x: number, y: number) {
        x = x === undefined ? lastKnownX : x;
        y = y === undefined ? lastKnownY : y;

        positionsBeingHovered = [];

        if (gridItemBeingDragged !== null) {
            placeGridItemOnGrid(x, y, gridItemBeingDragged);
            gridItemBeingDragged = null;
            return;
        }

        let position = $gridStore.getClosestGridPositionToPosition(x, y);
        if (position.item !== null) {
            // Position is already occupied by another grid item
            // Do nothing for now
            return;
        } else {
            if (!dragAndDropKeyExists("program_id")) return;
            let programId: number = Number($dragAndDropStore["program_id"]);
            if (isNaN(programId)) return;
            addGridItem(
                new GridItemObject(
                    getProgramById(programId),
                    position.row,
                    position.column
                )
            );
        }
        clearDragAndDropData();
    }

    function handleGridItemDragStart(
        x: number,
        y: number,
        item: GridItemObject
    ) {
        gridItemBeingDragged = item;
    }

    function window_handleGridDragOver(e: DragEvent) {
        if (
            gridItemBeingDragged === null &&
            !dragAndDropKeyExists("program_id")
        )
            return;
        e.preventDefault();
        handleGridMoveOver(e.clientX, e.clientY);
    }
    function handleGridItemDragEnd(x: number, y: number, item: GridItemObject) {
        hideGridHelperLines();
    }
    function handleGridItemTouchStart(
        x: number,
        y: number,
        item: GridItemObject
    ) {
        // gridItemBeingDragged = item;
    }
    function window_handleGridItemTouchMove(e: TouchEvent) {
        handleGridMoveOver(
            e.targetTouches[0].clientX,
            e.targetTouches[0].clientY
        );
    }

    function window_handleTouchCancel(_e: TouchEvent) {
        handlePlaceItem(lastKnownX, lastKnownY);
        hideGridHelperLines();
    }

    function handleGridItemTouchEnd(
        x: number,
        y: number,
        item: GridItemObject
    ) {
        handlePlaceItem(x, y);
        hideGridHelperLines();
    }

    function handleGridItemTouchDragStart(
        x: number,
        y: number,
        item: GridItemObject
    ) {
        gridItemBeingDragged = item;
    }

    function handleGridItemTouchDragEnd(
        x: number,
        y: number,
        item: GridItemObject
    ) {
        handlePlaceItem(x, y);
        hideGridHelperLines();
        gridItemBeingDragged = null;
    }

    /** ENDOF EVENT HANDLERS */
</script>

<svelte:window
    bind:innerWidth={screenWidth}
    bind:innerHeight={screenHeight}
    on:dragover={window_handleGridDragOver}
    on:touchmove={window_handleGridItemTouchMove}
    on:touchcancel={window_handleTouchCancel}
/>

<div
    class="grid"
    style="grid-template-columns: {$gridStore.gridTemplateColumns}; gap: {$gridStore.gap}rem; padding: {$gridStore.padding}rem; margin-top: {$gridStore.topOffset}rem; margin-bottom: {$gridStore.bottomOffset}rem;"
    on:mousedown={hideMenu}
    on:drop={handleGridDrop}
    on:contextmenu={handleGridContextMenu}
>
    {#each $gridStore.gridPositions as gridPosition}
        <div
            class="grid-child {gridItemBeingDragged !== null ||
            positionsBeingHovered.length > 0
                ? 'show-outline'
                : ''} {positionsBeingHovered.includes(gridPosition)
                ? 'hovered'
                : ''}"
        >
            <GridPosition
                {gridPosition}
                onDragStart={handleGridItemDragStart}
                onDragEnd={handleGridItemDragEnd}
                onTouchEnd={handleGridItemTouchEnd}
                onTouchDragStart={handleGridItemTouchDragStart}
                onTouchDragEnd={handleGridItemTouchDragEnd}
            />
        </div>
    {/each}
</div>

<style lang="scss">
    .grid {
        display: inline-grid;
        display: -ms-inline-grid;
        display: -moz-inline-grid;
        overflow: hidden;

        .grid-child {
            outline: 1px dashed #ffffff00;
            transition: outline 0.25s;
        }

        .grid-child.show-outline {
            outline: 1px dashed #ffffff55;

            &.hovered {
                outline: 1px solid #ffffff77;
            }
        }
    }
</style>
