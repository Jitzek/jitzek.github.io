<script lang="ts">
  /** IMPORTS */
  // "svelte"
  import { DeviceType, forceDeviceType } from "$stores/shared/DeviceTypeStore";
  //

  // "components"
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
  function handleSwitchToMobileButtonClick(_e: MouseEvent) {
    forceDeviceType(DeviceType.MOBILE);
  }
  /** ENDOF EVENT HANDLERS */
</script>

<button
  class="switch-to-mobile-button"
  on:click={handleSwitchToMobileButtonClick}
>
  <img
    src="/images/desktop/menu/mobile.svg"
    alt="Mobile View"
    height="75%"
    width="auto"
  />
</button>

<style lang="scss">
  .switch-to-mobile-button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    width: 3rem;

    background-color: #9671d1;
    transition: transform 0.25s, background-color 0.25s;

    outline: none;
    border: none;

    color: inherit;
    font-family: inherit;
    font-size: inherit;

    cursor: pointer;

    border-radius: 12px;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.2);
  }

  .switch-to-mobile-button:hover {
    background-color: #9066d3;
    transform: translateY(-0.2rem);
  }
</style>
