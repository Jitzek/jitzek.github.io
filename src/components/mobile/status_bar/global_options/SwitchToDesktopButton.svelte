<script lang="ts">
  import { DeviceType, forceDeviceType } from "$stores/shared/DeviceTypeStore";

  function handleSwitchToDesktopButtonClick(_e: MouseEvent) {
    forceDeviceType(DeviceType.DESKTOP);
  }
</script>

<button
  class="switch-to-desktop-button"
  on:click={handleSwitchToDesktopButtonClick}
>
  <!-- <img src="/images/mobile/statusbar/desktop.svg" alt="Desktop View" height="75%" width="auto" /> -->
  <svg
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 512 512"
    style="enable-background:new 0 0 512 512;"
    xml:space="preserve"
  >
    <g>
      <g>
        <path
          d="M452,36H60C26.916,36,0,62.916,0,96v240c0,33.084,26.916,60,60,60h176v40H132v40h248v-40H276v-40h176
			c33.084,0,60-26.916,60-60V96C512,62.916,485.084,36,452,36z M472,336c0,11.028-8.972,20-20,20H60c-11.028,0-20-8.972-20-20V96
			c0-11.028,8.972-20,20-20h392c11.028,0,20,8.972,20,20V336z"
        />
      </g>
    </g>
  </svg>
</button>

<style lang="scss">
  .switch-to-desktop-button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;
    width: 3rem;

    background-color: transparent;
    transition: transform 0.25s, background-color 0.25s;

    outline: none;
    border: none;

    color: inherit;
    font-family: inherit;
    font-size: inherit;

    cursor: pointer;

    border-radius: 100%;

    svg {
      width: 80%;
      path {
        fill: var(--input_fg_color);
      }
    }
  }

  .switch-to-desktop-button:hover {
    background-color: var(--input_hover_bg_color);
  }
</style>
