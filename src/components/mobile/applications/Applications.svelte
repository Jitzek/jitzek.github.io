<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    // "components"
    import Categories from "$components/desktop/taskbar/menu/categories/Categories.svelte";
    import MenuLauncherButton from "$components/desktop/taskbar/menu/categories/MenuLauncherButton.svelte";
    //

    // "objects"
    import { changeCursor, Cursor } from "$objects/desktop/cursors";
    import { convertRemToPixels } from "$objects/shared/conversions";
    import type { Category as CategoryObject } from "$objects/shared/program/Category";
    //

    // "stores"
    import { showApplicationsStore } from "$stores/mobile/ApplicationsStore";
    import {
        categoriesStore,
        categoryAll,
    } from "$stores/shared/CategoriesStore";
    import { programsStore } from "$stores/shared/ProgramsStore";
    import { forIn, max } from "lodash";
    import ApplicationLauncher from "./ApplicationLauncher.svelte";
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let distanceFromBottomInRem = 3.5;
    export let distanceFromTopInRem = 2.5;
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let hide = false;
    let currentPage = 1;
    let categories: Array<CategoryObject> = [];
    let scrollOffsetInPx = 0;
    let isDragging = false;
    let minX = 0;
    let maxX = 0;
    let innerWidth: number;
    let deltaX: number = 0;
    let startX = 0;
    let applicationRowCount: Array<number> = [];
    let graceZone = 0;

    let velocityX = 0;
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    showApplicationsStore.subscribe((showApplications) => {
        hide = !showApplications;
    });
    categoriesStore.subscribe((_categories) => {
        categories = _categories;
        maxX = innerWidth * categories.length;
    });
    $: {
        innerWidth;
        maxX = innerWidth * (categories.length - 1);
        graceZone = innerWidth / 2;
    }
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    //
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    //
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function handleApplicationsContainerMoveStart(x: number) {
        isDragging = true;
        startX = scrollOffsetInPx + x;
        changeCursor(Cursor.GRABBING);
    }
    function handleApplicationsContainerMove(x: number) {
        if (!isDragging) return;
        deltaX = startX - (startX + x);
        velocityX = startX + deltaX - scrollOffsetInPx;
        scrollOffsetInPx = startX + deltaX;
        if (scrollOffsetInPx <= minX) scrollOffsetInPx = minX;
        else if (scrollOffsetInPx >= maxX) scrollOffsetInPx = maxX;

        if (currentPage * innerWidth - graceZone < scrollOffsetInPx)
            currentPage++;
        else if ((currentPage - 1) * innerWidth - graceZone > scrollOffsetInPx)
            currentPage--;
    }
    function handleApplicationsContainerEnd(y: number) {
        if (!isDragging) return;
        changeCursor(Cursor.AUTO);
        isDragging = false;
        // Go to next or previous page if the user is swiping fast enough
        if (velocityX > 0 && velocityX > 2) {
            scrollOffsetInPx =
                scrollOffsetInPx + innerWidth > maxX
                    ? maxX
                    : scrollOffsetInPx + innerWidth;
        } else if (velocityX < 0 && velocityX < -2) {
            scrollOffsetInPx =
                scrollOffsetInPx - innerWidth < 0
                    ? 0
                    : scrollOffsetInPx - innerWidth;
        }
        // Check to which page the applications container should be locked to
        for (let i = 0; i < categories.length; i++) {
            if (i * innerWidth + graceZone < scrollOffsetInPx) {
                continue;
            }
            scrollOffsetInPx = i * innerWidth;
            break;
        }

        currentPage = 1 + scrollOffsetInPx / innerWidth;
    }
    function handleApplicationsContainerTouchStart(e: TouchEvent) {
        handleApplicationsContainerMoveStart(e.targetTouches[0].clientX);
    }
    function handleApplicationsContainerMouseDown(e: MouseEvent) {
        handleApplicationsContainerMoveStart(e.clientX);
    }
    function handleApplicationsContainerContextMenu(e: MouseEvent) {}

    function window_handleTouchMove(e: TouchEvent) {
        if (!isDragging) return;
        handleApplicationsContainerMove(e.targetTouches[0].clientX);
    }
    function window_handleTouchEnd(e: TouchEvent) {
        if (!isDragging) return;
        e.preventDefault();
        handleApplicationsContainerEnd(e.changedTouches[0].clientX);
    }

    function window_handleMouseMove(e: MouseEvent) {
        if (!isDragging) return;
        e.preventDefault();
        handleApplicationsContainerMove(e.clientX);
    }

    function window_handleMouseUp(e: MouseEvent) {
        if (!isDragging) return;
        e.preventDefault();
        handleApplicationsContainerEnd(e.clientX);
    }
    /** ENDOF EVENT HANDLERS */
</script>

<svelte:window
    bind:innerWidth
    on:touchend={window_handleTouchEnd}
    on:mousemove={window_handleMouseMove}
    on:mouseup={window_handleMouseUp}
    on:touchmove={window_handleTouchMove}
/>

<div
    class="applications-container"
    style="--height: calc(100% - {distanceFromBottomInRem +
        distanceFromTopInRem}rem); height: var(--height); bottom: {distanceFromBottomInRem}rem;"
    class:hide
    on:touchstart={handleApplicationsContainerTouchStart}
    on:mousedown={handleApplicationsContainerMouseDown}
    on:contextmenu={handleApplicationsContainerContextMenu}
>
    <div
        class="category-with-applications"
        style="max-width: calc(100% * {categories.length})"
    >
        {#each categories as category, i}
            <div
                class="category-with-applications-item {!isDragging
                    ? 'animate'
                    : ''}"
                style="position: fixed; transform: translateX(calc(({i} * 100%) - {scrollOffsetInPx}px));"
            >
                <div class="category">{category.name}</div>
                <div class="applications">
                    <div class="applications-wrapper">
                        {#each $programsStore.sort((a, b) =>
                            a.name.localeCompare(b.name)
                        ) as program (program.id)}
                            {#if program.categories.find((_category) => _category.id === category.id) || category.id === categoryAll.id}
                                <ApplicationLauncher
                                    {program}
                                    sizeInRem={5.5}
                                />
                                <span hidden>{applicationRowCount.push(0)}</span
                                >
                            {/if}
                        {/each}
                        {#each applicationRowCount as _count}
                            <ApplicationLauncher
                                program={null}
                                sizeInRem={5.5}
                                ghost={true}
                            />
                        {/each}
                        <span hidden>{(applicationRowCount = [])}</span>
                    </div>
                </div>
            </div>
        {/each}
    </div>

    <div class="pages">
        {#each categories as _category, i}
            <div
                class="page-indicator {i + 1 == currentPage ? 'active' : ''}"
            />
        {/each}
    </div>
</div>

<style lang="scss">
    .applications-container {
        overflow: hidden;
        transition: transform 0.25s ease-in-out;
        height: 100%;
        width: 100%;
        position: absolute;
        background-color: var(--bg_color_primary);

        .category-with-applications {
            height: var(--height);
            margin: auto;
            overflow: hidden;
            width: 100%;
            left: 0;

            .category-with-applications-item {
                width: 100%;
                .category {
                    text-align: center;
                }

                .applications {
                    margin: 1rem;
                    position: relative;
                    display: table;

                    .applications-wrapper {
                        display: table-cell;
                        text-align: center;
                        vertical-align: middle;
                    }
                }
            }
            .category-with-applications-item.animate {
                transition: transform 0.5s;
            }
        }

        .pages {
            text-align: center;
            display: flex;
            justify-content: center;

            .page-indicator {
                width: 0.5rem;
                height: 0.5rem;
                border-radius: 100%;
                background-color: var(--fg_color_secondary);
                margin-left: 0.15rem;
                margin-right: 0.15rem;
            }
            .page-indicator.active {
                background-color: var(--fg_color_primary);
            }
        }
    }

    .applications-container.hide {
        transform: translateY(100%);
    }
</style>
