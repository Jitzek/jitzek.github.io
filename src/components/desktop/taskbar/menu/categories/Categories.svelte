<script lang="ts">
    /** IMPORTS */
    // "svelte"
    import { slide } from "svelte/transition";
    //

    // "components"
    import MenuLauncherButton from "$components/desktop/taskbar/menu/categories/MenuLauncherButton.svelte";
    import CategoryButton from "$components/desktop/taskbar/menu/categories/CategoryButton.svelte";
    //

    // "objects"
    import type { Category as CategoryObject } from "$objects/shared/program/Category";
    //

    // "stores"
    import {
        categoriesStore,
        categoryAll,
        categoryFavourites,
    } from "$stores/shared/CategoriesStore";
    import { programsStore } from "$stores/shared/ProgramsStore";
    import lodash from "lodash";
    const { sortBy } = lodash;
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    //
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    class CategoryWrapper {
        constructor(
            public category: CategoryObject,
            public activated: boolean
        ) {}
    }

    let categoryWrappers: Array<CategoryWrapper> = [];
    /** ENDOF VARIABLE DECLERATION */

    /** STORE CALLBACKS */
    categoriesStore.subscribe((categories) => {
        let existingCategories = categoryWrappers.flatMap(
            (categoryWrapper) => categoryWrapper.category
        );
        // Add all new categories
        categories
            .filter((category) => existingCategories.indexOf(category) === -1)
            .forEach((category) => {
                categoryWrappers.push(new CategoryWrapper(category, false));
            });
        // Filter out removed categories
        categoryWrappers = categoryWrappers.filter((categoryWrapper) =>
            categories.find(
                (category) => category.id === categoryWrapper.category.id
            )
        );
    });
    /** ENDOF STORE CALLBACKS */

    /** REACTIVE VARIABLES */
    //
    /** ENDOF REACTIVE VARIABLES */

    /** HELPER FUNCTIONS */
    //
    /** ENDOF HELPER FUNCTIONS */

    /** EVENT HANDLERS */
    function handleCategoryButtonClick(_e: MouseEvent, id: number) {
        categoryWrappers.forEach(
            (categoryWrapper: CategoryWrapper) =>
                (categoryWrapper.activated =
                    categoryWrapper.category.id === id &&
                    !categoryWrapper.activated)
        );
        categoryWrappers = categoryWrappers;
    }
    /** ENDOF EVENT HANDLERS */
</script>

<div class="categories-container">
    <div class="category-buttons-container">
        {#each sortBy(categoryWrappers, [(wrapper) => {
                return wrapper.category.id === categoryAll.id || wrapper.category.id === categoryFavourites.id || wrapper.category.name;
            }]) as { category, activated }}
            <CategoryButton
                icon={category.icon}
                name={category.name}
                {activated}
                on:click={(e) => handleCategoryButtonClick(e, category.id)}
            />
        {/each}
    </div>
    <div class="category-content-container">
        {#each categoryWrappers as { category, activated }}
            {#if activated}
                {#each $programsStore.sort((a, b) =>
                    a.name.localeCompare(b.name)
                ) as program (program.id)}
                    {#if program.categories.find((_category) => _category.id === category.id) || category.id === categoryAll.id}
                        <div
                            in:slide={{ duration: 500 }}
                            out:slide={{ duration: 250 }}
                        >
                            <MenuLauncherButton {program} />
                        </div>
                    {/if}
                {/each}
            {/if}
        {/each}
    </div>
</div>

<style lang="scss">
    .categories-container {
        display: flex;
        height: 20rem;
        width: 100%;

        .category-buttons-container {
            overflow-y: auto;
            overflow-x: hidden;
            width: 12rem;
            background-color: var(--bg_color_primary);
        }

        .category-content-container {
            overflow-y: auto;
            overflow-x: hidden;
            // 100% - the width of MenuButton
            width: calc(100% - 12rem);
            background-color: var(--bg_color_secondary);
        }
    }
</style>
