<script lang="ts">
  import { setup as setupWindowQueries } from "$stores/shared/DeviceTypeStore";
  import { onMount } from "svelte";

  import { setTheme } from "$stores/shared/ThemeStore";
  import { NordTheme } from "$objects/shared/themes/ThemeNord";

  import { setFont } from "$stores/shared/FontStore";
  import { FontDefault } from "$objects/shared/fonts/FontDefault";

  let wrapper: HTMLDivElement;
  onMount(() => {
    // Function should be called within the onMount function since it requires window to be assigned
    setupWindowQueries({
      desktopQuery: "screen and (min-width: 768px)",
      listen: true,
    });

    // themeStore.subscribe((new_theme) => {
    // document.documentElement.setAttribute('data-theme', new_theme);
    // });

    document.getElementById("svelte").style.height = "100%";

    setTheme(wrapper, new NordTheme());
    setFont(wrapper, new FontDefault());
  });
</script>

<div class="layout-wrapper" bind:this={wrapper}>
  <slot />
</div>

<style lang="scss">
  .layout-wrapper {
    height: 100%;

    color: var(--fg_color_primary);
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
