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
  //

  // "actions"
  import { clickOutside } from "$actions/mouseOutside";
  import { longpressTouch } from "$actions/longpress";
  //

  /** ENDOF IMPORTS*/

  /** EXPORTS */
  export let gridPosition: GridPositionObject;

  export let onDragStart: (
    x: number,
    y: number,
    item: GridItemObject
  ) => void = (x: number, y: number, item: GridItemObject) => {};
  export let onDragMove: (
    x: number,
    y: number,
    item: GridItemObject
  ) => void = (x: number, y: number, item: GridItemObject) => {};
  export let onDragEnd: (x: number, y: number, item: GridItemObject) => void = (
    x: number,
    y: number,
    item: GridItemObject
  ) => {};
  export let onTouchStart: (
    x: number,
    y: number,
    item: GridItemObject
  ) => void = (x: number, y: number, item: GridItemObject) => {};
  export let onTouchMove: (
    x: number,
    y: number,
    item: GridItemObject
  ) => void = (x: number, y: number, item: GridItemObject) => {};
  export let onTouchEnd: (
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
          gridPosition.item.program.createProcess().bringToTop();
        },
      },
      {
        name: "Remove Desktop Shortcut",
        icon: null,
        onClick: () => {
          hideContextMenu();
          removeGridItem(gridPosition.item.id);
        },
      },
    ]);
  }
  /** ENDOF HELPER FUNCTIONS */

  /** EVENT HANDLERS */
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
    onDragMove(e.clientX, e.clientY, gridPosition.item);
  }
  function window_handleKeyDown(e: KeyboardEvent) {
    shiftDown = e.shiftKey;
    ctrlDown = e.ctrlKey;
  }
  function window_handleKeyUp(e: KeyboardEvent) {
    shiftDown = e.shiftKey;
    ctrlDown = e.ctrlKey;
  }

  function handleMoveStart(x: number, y: number) {
    dragStartX = x;
    dragStartY = y;
    isDragging = true;
  }

  let clientX: number;
  let clientY: number;
  function handleMove(x: number, y: number) {
    if (!isDragging) return;

    clientX = x;
    clientY = y;
  }

  function handleMoveEnd(x: number, y: number) {}

  function handleTouchStart(e: TouchEvent) {
    e.preventDefault();
    touchMoving = false;
    touchCanceled = false;
    touchStart = +new Date();
    const x = (e.target as HTMLElement).offsetLeft;
    const y = (e.target as HTMLElement).offsetTop;
    handleMoveStart(x, y);
    setTimeout(() => {
      if (!touchCanceled && !touchMoving) {
        selectGridItem(gridPosition.item);
      }
    }, longPressTouchTime);
    onTouchStart(x, y, gridPosition.item);
  }

  function handleTouchMove(e: TouchEvent) {
    e.preventDefault();
    touchMoving = true;
    const x = e.targetTouches[0].clientX;
    const y = e.targetTouches[0].clientY;
    handleMove(x, y);
    onTouchMove(x, y, gridPosition.item);
    hideContextMenu();
  }

  function handleTouchEnd(_e: TouchEvent) {
    let touchEnd: number = +new Date();
    touchCanceled = true;
    const x = clientX;
    const y = clientY;
    if (touchMoving && gridPosition.item.selected) {
      // This is currently bugged on Mozilla Firefox
      // preventDefault() in contextmenu listener cancels touch event generation (sends touchcancel)
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1481923
      handleMoveEnd(x, y);
      onTouchEnd(x, y, gridPosition.item);
    } else if (!touchMoving && touchEnd - touchStart < longPressTouchTime) {
      // Open program
      gridPosition.item.program.createProcess().bringToTop();
    }
    deselectGridItem(gridPosition.item);
  }

  function handleDragStart(e: DragEvent) {
    e.dataTransfer.setData(
      "program_id",
      gridPosition.item.program.id.toString()
    );
    handleMoveStart(e.clientX, e.clientY);
    onDragStart(e.clientX, e.clientY, gridPosition.item);
  }

  function handleDragEnd(_e: DragEvent) {
    handleMoveEnd(clientX, clientY);
    onDragEnd(clientX, clientY, gridPosition.item);
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
        if (gridItem.id !== gridPosition.item.id) deselectGridItem(gridItem);
      });
    }
    selectGridItem(gridPosition.item);
  }

  function handleDoubleClick(e: MouseEvent) {
    gridPosition.item.program.createProcess().bringToTop();
  }
  /** ENDOF EVENT HANDLERS */
</script>

<svelte:window
  on:dragover={window_handleDragOver}
  on:keydown={window_handleKeyDown}
  on:keyup={window_handleKeyUp}
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
    class="grid-element-overlay {gridPosition.item.selected ? 'selected' : ''}"
  >
    <div
      class:desktop
      class:mobile
      class="grid-element"
      style="grid-row: {gridPosition.row}; grid-column: {gridPosition.column}; width: {gridPosition.width}rem; height: {gridPosition.height}rem;"
      draggable={true}
      on:contextmenu={handleContextMenu}
      on:touchstart={handleTouchStart}
      on:touchmove={handleTouchMove}
      on:touchend={handleTouchEnd}
      on:dragstart={handleDragStart}
      on:dragend={handleDragEnd}
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