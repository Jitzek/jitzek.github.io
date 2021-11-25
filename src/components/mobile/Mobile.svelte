<script lang="ts">
  /** IMPORTS */
  // "svelte"
  //

  // "components"
  import Grid from "$components/shared/grid/Grid.svelte";
  import Wallpaper from "$components/shared/Wallpaper.svelte";
  import StatusBar from "$components/mobile/status_bar/StatusBar.svelte";
  import ContextMenu from "$components/desktop/context_menu/ContextMenu.svelte";
  import ContextMenuOption from "$components/desktop/context_menu/ContextMenuOption.svelte";
  import { contextMenuStore } from "$stores/desktop/ContextMenuStore";
  import NavigationBar from "./navigation_bar/NavigationBar.svelte";
  import { convertRemToPixels } from "$objects/shared/conversions";
  //

  // "objects"
  //

  // "stores"
  //

  /** ENDOF IMPORTS*/

  /** EXPORTS */
  //
  /** ENDOF EXPORTS */

  /** VARIABLE DECLARATION */
  let wallpaper: string = "/images/wallpapers/custom-design-01-1280x720.png";
  /** ENDOF VARIABLE DECLERATION */

  /** STORE CALLBACKS */
  //
  /** ENDOF STORE CALLBACKS */

  /** REACTIVE VARIABLES */
  //
  /** ENDOF REACTIVE VARIABLES */

  /** HELPER FUNCTIONS */
  //
  /** ENDOF HELPER FUNCTIONS */

  /** EVENT HANDLERS */
  //
  /** ENDOF EVENT HANDLERS */
</script>

<svelte:head>
  <title>Jitze Jan Kerkstra</title>
</svelte:head>

<Wallpaper src={wallpaper} />
<NavigationBar buttonHeightInRem={3.5} />

<div class="grid-container">
  <Grid
    topOffset={2.5}
    columnWidth={5}
    columnHeight={6}
    gap={1.5}
    padding={1}
  />
</div>

<StatusBar
  statusBarHeightInRem={2.5}
  bottomOffsetInPX={convertRemToPixels(3.5)}
/>

{#if $contextMenuStore.show}
  <ContextMenu x={$contextMenuStore.x} y={$contextMenuStore.y} z_index={10}>
    <div slot="options">
      {#each $contextMenuStore.options as option}
        <ContextMenuOption
          name={option.name}
          icon={option.icon}
          onClick={option.onClick}
        />
      {/each}
    </div>
  </ContextMenu>
{/if}

<style lang="scss">
  .grid-container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
</style>
