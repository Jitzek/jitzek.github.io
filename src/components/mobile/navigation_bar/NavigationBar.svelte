<script lang="ts">
  import WhiskerMenu from "$components/shared/svg/whisker-menu.svelte";
  import OpenWindowsButton from "./OpenWindowsButton.svelte";
  import ReturnButton from "./ReturnButton.svelte";

  /** IMPORTS */
  // "svelte"
  //

  // "components"
  //

  // "objects"
  //

  // "stores"
  //

  /** ENDOF IMPORTS*/

  /** EXPORTS */
  export let buttonHeightInRem: number = 2.5;
  /** ENDOF EXPORTS */

  /** VARIABLE DECLARATION */
  //
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

<div class="app-drawer-bar" style="height: {buttonHeightInRem}rem;">
  <div class="app-drawer-bar-button open-windows-button-container">
    <div style="width: 2rem;">
      <OpenWindowsButton />
    </div>
  </div>
  <div class="app-drawer-bar-button middle-button-container">
    <div style="height: 95%; width: 100%;">
      <WhiskerMenu />
    </div>
  </div>
  <div class="app-drawer-bar-button return-button-container">
    <div style="width: 2rem;">
      <ReturnButton />
    </div>
  </div>
</div>

<style lang="scss">
  .app-drawer-bar {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0;

    background-color: var(--bg_color_primary);

    width: 100%;

    overflow: hidden;

    .app-drawer-bar-button {
      flex: 1;
      height: 100%;
      width: 100%;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 2.5rem;

      transition: background-color 0.25s;
    }

    .app-drawer-bar-button:hover,
    .app-drawer-bar-button:focus {
      @include input-hover-inherit;
    }

    .app-drawer-bar-button:active {
      @include input-active-inherit;
    }
  }
</style>
