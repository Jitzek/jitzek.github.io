<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    // "components"
    import WindowCloseButton from "$components/desktop/window/control_buttons/WindowCloseButton.svelte";
    import WindowMinimizeButton from "$components/desktop/window/control_buttons/WindowMinimizeButton.svelte";
    import WindowResizeButton from "$components/desktop/window/control_buttons/WindowResizeButton.svelte";
    //

    // "objects"
    import { Cursor, changeCursor } from "$objects/desktop/cursors";
    import type { Process } from "$objects/shared/program/Process";
    //

    // "stores"
    import { processesStore } from "$stores/shared/ProcessesStore";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let title: string = "";
    export let icon: string = "";

    // Height of window in PX
    // Default to min
    export let height: number | null = null;
    // Width of window in PX
    // Defaults to min
    export let width: number | null = null;

    // X position of window in PX
    // Defaults to center
    export let x: number | null = null;
    // Y position of window in PX
    // Defaults to center
    export let y: number | null = null;

    // Height offset in PX
    export let heightOffset: number = 0;
    // Width offset in PX
    export let widthOffset: number = 0;

    // Minimal width of window in PX
    export let minWidth: number = 250;
    // Minimal width of window in PX
    export let minHeight: number = 250;

    export let maximized: boolean = false;
    export let minimized: boolean = false;

    export let z_index: number = 1;

    export let onSelection: Function = () => {};
    export let onMinimize: Function = () => {};
    export let onClose: Function = () => {};
    export let onMaximized: Function = () => {};
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let maxHeight: number = null;
    let maxWidth: number = null;

    let maxX: number;
    let maxY: number;

    let innerHeight: number;
    let innerWidth: number;

    let windowElement: HTMLDivElement;
    let windowContentElement: HTMLElement;

    let dragPrevX: number = 0;
    let dragPrevY: number = 0;

    let isMovingWindow: boolean = false;

    enum Direction {
        TOP,
        BOTTOM,
        LEFT,
        RIGHT,
        TOPRIGHT,
        TOPLEFT,
        BOTTOMRIGHT,
        BOTTOMLEFT,
    }
    let direction: Direction;
    let prevResizeX: number = 0;
    let prevResizeY: number = 0;
    let isResizingWindow: boolean = false;
    let dragHeight: number = height;
    let dragWidth: number = width;
    let dragX: number = x;
    let dragY: number = y;

    let cursorForDirection: Map<Direction, Cursor> = new Map([
        [Direction.TOP, Cursor.N_RESIZE],
        [Direction.BOTTOM, Cursor.S_RESIZE],
        [Direction.LEFT, Cursor.W_RESIZE],
        [Direction.RIGHT, Cursor.E_RESIZE],

        [Direction.TOPLEFT, Cursor.NW_RESIZE],
        [Direction.TOPRIGHT, Cursor.NE_RESIZE],
        [Direction.BOTTOMLEFT, Cursor.SW_RESIZE],
        [Direction.BOTTOMRIGHT, Cursor.SE_RESIZE],
    ]);
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    //
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    $: {
        [isMovingWindow, isResizingWindow];
        if (windowContentElement) {
            // Prevent content from being selected while resizing or moving the window
            windowContentElement.style.userSelect =
                isMovingWindow || isResizingWindow ? "none" : "initial";
            windowContentElement.style.pointerEvents =
                isMovingWindow || isResizingWindow ? "none" : "initial";
        }
    }

    $: {
        width;
        if (width < minWidth) width = minWidth;
        else if (maxWidth && width > maxWidth) width = maxWidth;
    }
    $: {
        height;
        if (height < minHeight) height = minHeight;
        else if (maxHeight && height > maxHeight) height = maxHeight;
    }

    $: maxWidth = innerWidth - widthOffset;
    $: maxHeight = innerHeight - heightOffset;
    $: {
        maxX = Math.abs(maxWidth - width);
        if (x == null && maxX) x = maxX / 2;
        else if (x >= maxX) x = maxX;
        else if (x < 0) x = 0;
    }
    $: {
        maxY = Math.abs(maxHeight - height);
        if (y == null && maxY) y = maxY / 2;
        else if (y >= maxY) y = maxY;
        else if (y < 0) y = 0;
    }

    $: if (width == null && maxWidth != null) width = maxWidth;
    $: if (height == null && maxHeight != null) height = maxHeight;
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    function startWindowMove(_x: number, _y: number) {
        isMovingWindow = true;
        dragPrevX = _x;
        dragPrevY = _y;
    }

    function endWindowMove(_x: number, _y: number) {
        isMovingWindow = false;
        onSelection();
    }

    function moveWindow(_x: number, _y: number) {
        if (!isMovingWindow) return;
        if (maximized) {
            maximized = false;
            x = _x - width / 2;
            y = maxY;
        }
        let offsetX = _x - dragPrevX;
        let offsetY = _y - dragPrevY;
        dragPrevX = _x;
        dragPrevY = _y;

        x += offsetX;
        y -= offsetY;
    }

    function startWindowResize(x: number, y: number) {
        prevResizeX = x;
        prevResizeY = y;
        isResizingWindow = true;
    }
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function window_handleDragOver(e: DragEvent) {
        if (!isMovingWindow) return;
        e.preventDefault();
        moveWindow(e.clientX, e.clientY);
        e.dataTransfer.dropEffect = "move";
    }
    function window_handleTouchMove(e: TouchEvent) {
        e.preventDefault();
        moveWindow(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    }
    function window_handleMouseMove(e: MouseEvent) {
        if (!isResizingWindow) return;
        let offsetX: number = e.clientX - prevResizeX;
        let offsetY: number = e.clientY - prevResizeY;
        if (
            direction == Direction.TOP ||
            direction == Direction.TOPLEFT ||
            direction == Direction.TOPRIGHT
        ) {
            if (dragY - offsetY < maxY) {
                height -= offsetY;
                dragHeight -= offsetY;
            }
        }
        if (
            direction == Direction.BOTTOM ||
            direction == Direction.BOTTOMLEFT ||
            direction == Direction.BOTTOMRIGHT
        ) {
            if (dragY - offsetY > 0) {
                if (dragHeight + offsetY >= minHeight) {
                    y -= offsetY;
                    height += offsetY;
                }
                dragHeight += offsetY;
            }
            dragY -= offsetY;
        }
        if (
            direction == Direction.RIGHT ||
            direction == Direction.TOPRIGHT ||
            direction == Direction.BOTTOMRIGHT
        ) {
            if (dragX + offsetX < maxX) {
                width += offsetX;
                dragWidth += offsetX;
            }
        }
        if (
            direction == Direction.LEFT ||
            direction == Direction.TOPLEFT ||
            direction == Direction.BOTTOMLEFT
        ) {
            if (dragX + offsetX > 0) {
                if (dragWidth - offsetX >= minWidth) {
                    x += offsetX;
                    width -= offsetX;
                }
                dragWidth -= offsetX;
            }
            dragX += offsetX;
        }
        prevResizeX = e.clientX;
        prevResizeY = e.clientY;
    }
    function window_handleMouseUp(e: MouseEvent) {
        if (isResizingWindow) {
            isResizingWindow = false;
            changeCursor(Cursor.AUTO);
            onSelection();
        }
    }

    function handleWindowDragStart(e: DragEvent) {
        startWindowMove(e.clientX, e.clientY);
    }
    function handleWindowTouchStart(e: TouchEvent) {
        // e.preventDefault();
        startWindowMove(e.targetTouches[0].clientX, e.targetTouches[0].clientY);
    }
    function handleWindowDragEnd(e: DragEvent) {
        e.preventDefault();
        endWindowMove(e.clientX, e.clientY);
    }
    function handleWindowTouchEnd(e: TouchEvent) {
        return;
    }

    function handleWindowResizeStart(e: MouseEvent, _direction: Direction) {
        direction = _direction;
        startWindowResize(e.clientX, e.clientY);
        changeCursor(cursorForDirection.get(direction));
        dragX = x;
        dragY = y;
        dragHeight = height;
        dragWidth = width;
    }

    function handleWindowDoubleClick(e: MouseEvent) {
        maximized = !maximized;
        onMaximized();
    }

    function handleMinimizeButtonClick() {
        minimized = true;
        onMinimize();
    }
    function handleResizeButtonClick() {
        maximized = !maximized;
        onMaximized();
    }
    function handleCloseButtonClick() {
        onClose();
    }

    function handleWindowMouseDown(e: MouseEvent) {
        onSelection();
    }
    /** ENDOF EVENT HANDLERS */
</script>

<svelte:window
    bind:innerHeight
    bind:innerWidth
    on:dragover={window_handleDragOver}
    on:touchmove={window_handleTouchMove}
    on:mouseup={window_handleMouseUp}
    on:mousemove={window_handleMouseMove}
/>

<div
    class:minimized
    bind:this={windowElement}
    class="window"
    style="
			width: {maximized ? maxWidth : width + x <= maxWidth ? width : maxWidth - x}px;
			height: {maximized
        ? maxHeight
        : height + y <= maxHeight
        ? height
        : maxHeight - y}px; 
			bottom: {heightOffset}px;
			transform: translate({maximized ? 0 : x}px, -{maximized ? 0 : y}px);
			min-width: {minWidth}px;
			min-height: {minHeight}px;
			z-index: {z_index};
			"
    on:mousedown={handleWindowMouseDown}
>
    <!-- Draggable bar -->
    <div
        class="control-bar"
        draggable="true"
        on:dragstart={handleWindowDragStart}
        on:touchstart={handleWindowTouchStart}
        on:dragend={handleWindowDragEnd}
        on:touchend={handleWindowTouchEnd}
        on:dblclick={handleWindowDoubleClick}
    >
        <div class="window-info" on:dragstart={(e) => e.preventDefault()}>
            <img class="window-icon" src={icon} alt={title} />
            <p class="window-title">{title}</p>
        </div>
        <div class="control-buttons">
            <WindowMinimizeButton
                width={"2.5rem"}
                height={"100%"}
                on:click={() => handleMinimizeButtonClick()}
            />
            <WindowResizeButton
                isMaximized={maximized}
                width={"2.5rem"}
                height={"100%"}
                on:click={() => handleResizeButtonClick()}
            />
            <WindowCloseButton
                width={"2.5rem"}
                height={"100%"}
                on:click={() => handleCloseButtonClick()}
            />
        </div>
    </div>
    <div bind:this={windowContentElement} class="window-content">
        <slot name="content" />
    </div>

    {#if !maximized}
        <div
            on:mousedown={(e) => handleWindowResizeStart(e, Direction.TOP)}
            class="border-top"
        />
        <div
            on:mousedown={(e) => handleWindowResizeStart(e, Direction.LEFT)}
            class="border-left"
        />
        <div
            on:mousedown={(e) => handleWindowResizeStart(e, Direction.RIGHT)}
            class="border-right"
        />
        <div
            on:mousedown={(e) => handleWindowResizeStart(e, Direction.BOTTOM)}
            class="border-bottom"
        />

        <div
            on:mousedown={(e) => handleWindowResizeStart(e, Direction.TOPLEFT)}
            class="border-top-left"
        />
        <div
            on:mousedown={(e) => handleWindowResizeStart(e, Direction.TOPRIGHT)}
            class="border-top-right"
        />
        <div
            on:mousedown={(e) =>
                handleWindowResizeStart(e, Direction.BOTTOMLEFT)}
            class="border-bottom-left"
        />
        <div
            on:mousedown={(e) =>
                handleWindowResizeStart(e, Direction.BOTTOMRIGHT)}
            class="border-bottom-right"
        />
    {/if}
</div>

<style lang="scss">
    $--border-offset: -2px;

    .window {
        $--control-bar-height: 2rem;

        background-color: var(--bg_color_primary);
        position: absolute;
        margin-left: auto;
        margin-right: auto;
        overflow: hidden;
        
        $--window-box-shadow-size: 1rem;
        $--window-box-shadow-color: rgba(0, 0, 0, 0.25);
        -moz-box-shadow: 0 0 $--window-box-shadow-size $--window-box-shadow-color;
        -webkit-box-shadow: 0 0 $--window-box-shadow-size $--window-box-shadow-color;
        box-shadow: 0 0 $--window-box-shadow-size $--window-box-shadow-color;

        .control-bar {
            height: $--control-bar-height;
            width: 100%;
            background-color: var(--border_color_primary);

            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -o-user-select: none;

            .window-info {
                float: left;
                display: flex;
                height: 100%;
                align-items: center;
                margin-left: 0.25rem;

                .window-icon {
                    width: 1.5rem;
                    height: auto;
                }

                .window-title {
                    margin-left: 0.25rem;
                }
            }

            .control-buttons {
                float: right;
                height: 100%;
                width: auto;
                display: flex;
            }
        }

        .window-content {
            width: 100%;
            height: calc(100% - #{$--control-bar-height});
            background-color: var(--bg_color_primary);
        }

        .border-top,
        .border-bottom,
        .border-left,
        .border-right,
        .border-top-left,
        .border-top-right,
        .border-bottom-left,
        .border-bottom-right {
            // background-color: black; // Window border color
            overflow: hidden;

            // Prevent border pushing other elements
            position: absolute;

            z-index: 9;
        }
        .border-top,
        .border-bottom {
            width: 100%;
            height: 0.3rem;
            left: 0;
        }
        .border-top {
            top: $--border-offset;
            cursor: n-resize;
        }
        .border-bottom {
            bottom: $--border-offset;
            cursor: s-resize;
        }
        .border-left,
        .border-right {
            height: 100%;
            width: 0.3rem;
            top: 0;
        }
        .border-left {
            left: $--border-offset;
            cursor: w-resize;
        }
        .border-right {
            right: $--border-offset;
            cursor: e-resize;
        }

        .border-top-left,
        .border-top-right,
        .border-bottom-left,
        .border-bottom-right {
            // background-color: blue; // Window corners color
            width: 0.5rem;
            height: 0.5rem;
        }
        .border-top-left {
            top: $--border-offset;
            left: $--border-offset;
            cursor: nw-resize;
        }
        .border-top-right {
            top: $--border-offset;
            right: $--border-offset;
            cursor: ne-resize;
        }
        .border-bottom-left {
            bottom: $--border-offset;
            left: $--border-offset;
            cursor: sw-resize;
        }
        .border-bottom-right {
            bottom: $--border-offset;
            right: $--border-offset;
            cursor: se-resize;
        }
    }

    .window.minimized {
        display: none;
    }
</style>
