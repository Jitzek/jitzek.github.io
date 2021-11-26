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
  import { isStringAPositiveNumber } from "$objects/shared/typechecks";
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
  /** ENDOF VARIABLE DECLERATION */

  /** STORE CALLBACKS */
  //
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
            _position.item != null && _position.item.id == gridItem.id
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
    positionsBeingHovered = [];
    let position = $gridStore.getClosestGridPositionToPosition(x, y);
    if (gridItemBeingDragged === null) {
      positionsBeingHovered.push(position);
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
            _position.item != null && _position.item.id == gridItem.id
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
    positionsBeingHovered = [];
    if (gridItemBeingDragged !== null) {
      placeGridItemOnGrid(e.clientX, e.clientY, gridItemBeingDragged);
      gridItemBeingDragged = null;
    }

    let position = $gridStore.getClosestGridPositionToPosition(
      e.clientX,
      e.clientY
    );
    if (position.item !== null) {
      // Position is already occupied by another grid item
      // Do nothing for now
      return;
    } else {
      if (!isStringAPositiveNumber($dragAndDropStore["program_id"].trim()))
        return;
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

  function handleGridItemDragStart(x: number, y: number, item: GridItemObject) {
    gridItemBeingDragged = item;
  }

  function handleGridDragOver(e: DragEvent) {
    if (!isStringAPositiveNumber($dragAndDropStore["program_id"].trim()))
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
    gridItemBeingDragged = item;
  }
  function handleGridItemTouchMove(e: TouchEvent) {
    e.preventDefault();
    handleGridMoveOver(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
  }
  function handleGridItemTouchEnd(x: number, y: number, item: GridItemObject) {
    placeGridItemOnGrid(x, y, item);
    hideGridHelperLines();
  }
  /** ENDOF EVENT HANDLERS */
</script>

<svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight} />

<div
  class="grid"
  style="grid-template-columns: {$gridStore.gridTemplateColumns}; gap: {$gridStore.gap}rem; padding: {$gridStore.padding}rem; margin-top: {$gridStore.topOffset}rem;"
  on:mousedown={hideMenu}
  on:drop={handleGridDrop}
  on:dragover={handleGridDragOver}
  on:touchmove={handleGridItemTouchMove}
>
  {#each $gridStore.gridPositions as gridPosition}
    <div
      class="grid-child {gridItemBeingDragged !== null ||
      positionsBeingHovered.length > 0
        ? 'show-outline'
        : ''} {positionsBeingHovered.includes(gridPosition) ? 'hovered' : ''}"
    >
      <GridPosition
        {gridPosition}
        onDragStart={handleGridItemDragStart}
        onDragEnd={handleGridItemDragEnd}
        onTouchStart={handleGridItemTouchStart}
        onTouchEnd={handleGridItemTouchEnd}
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
      outline: 1px none #ffffff00;
    }

    .grid-child.show-outline {
      outline: 1px dashed #ffffff55;
      transition: outline 0.25s;

      &.hovered {
        outline: 1px solid #ffffff77;
      }
    }
  }
</style>
