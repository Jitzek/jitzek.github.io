<script lang="ts">
  /** IMPORTS */
  // "svelte"
  import { onMount } from "svelte";
  //

  // "components"
  //

  // "objects"
  //

  // "stores"
  //

  /** ENDOF IMPORTS*/

  /** EXPORTS */
  export let name: string;
  export let icon: string;
  export let activated: boolean = false;
  /** ENDOF EXPORTS */

  /** VARIABLE DECLARATION */
  let categoryButtonElement: HTMLElement;

  onMount(() => {
    // Disable image dragging
    categoryButtonElement.ondragstart = () => false;
  });
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

<button
  bind:this={categoryButtonElement}
  class:activated
  class="menu-launcher-button"
  on:click
>
  <div class="menu-launcher-button-content">
    <img src={icon} alt={name} />
    <span class="name">{name}</span>
  </div>
</button>

<style lang="scss">
  .menu-launcher-button {
    @include input-inherit;
    outline: none;
    border: none;

    transition: background-color 0.25s;

    display: block;

    cursor: pointer;

    width: 100%;
    height: 3.25rem;

    .menu-launcher-button-content {
      display: flex;
      height: 100%;
      align-items: center;
      overflow: hidden;

      img {
        display: inline;
        margin: 0;
        margin-right: 8px;
        width: 2.5rem;
        transition: width 0.25s;
        height: auto;
      }
    }
  }

  .menu-launcher-button:hover,
  .menu-launcher-button:focus,
  .menu-launcher-button.activated {
    @include input-hover-inherit;
    img {
      width: 2.75rem;
    }
  }
</style>
