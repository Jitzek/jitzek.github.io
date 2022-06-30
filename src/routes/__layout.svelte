<script lang="ts">
    import { setup as setupWindowQueries } from "$stores/shared/DeviceTypeStore";
    import { onMount } from "svelte";

    import { setTheme } from "$stores/shared/ThemeStore";
    import { NordTheme } from "$objects/shared/themes/ThemeNord";

    import { setFont } from "$stores/shared/FontStore";
    import { FontDefault } from "$objects/shared/fonts/FontDefault";
    import { clearData } from "$stores/shared/DragAndDropStore";

    let wrapper: HTMLDivElement;
    onMount(() => {
        // Function should be called within the onMount function since it requires window to be assigned
        setupWindowQueries({
            desktopQuery: "screen and (min-width: 768px)",
            listen: true,
        });

        document.getElementById("svelte").style.height = "100%";

        setTheme(wrapper, new NordTheme());
        setFont(wrapper, new FontDefault());
    });

    function test(e: DragEvent) {
        clearData();
    }
</script>

<svelte:window on:dragend={test} />

<div class="layout-wrapper" bind:this={wrapper}>
    <div class="build-label">This website is in development</div>
    <div class="slot-container">
        <slot />
    </div>
</div>

<style lang="scss">
    .layout-wrapper {
        height: 100%;

        color: var(--fg_color_primary);

        .build-label {
            position: relative;
            text-align: center;
            z-index: 1;
        }
        .slot-container {
            all: unset;
            z-index: 0;
        }
    }

    :global(html),
    :global(body) {
        position: relative;
        z-index: -1;
        margin: 0;
        height: 100%;

        color: var(--fg_color_primary);
        background-color: var(--bg_color_primary);

        font-weight: 500;
    }
</style>
