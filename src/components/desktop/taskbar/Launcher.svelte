<script lang="ts">
  /** IMPORTS */
  // "svelte"
  //

  // "components"
  import Tooltip from "$components/desktop/Tooltip.svelte";
  //

  // "objects"
  import type { Program as ProgramObject } from "$objects/shared/program/Program";
  //

  // "stores"
  import {
    hideContextMenu,
    showContextMenu,
  } from "$stores/shared/ContextMenuStore";
  import { hideMenu } from "$stores/desktop/MenuStore";
  import { removeProgramShortcut } from "$stores/desktop/TaskbarStore";
  import { executeProgramById } from "$stores/shared/ProgramsStore";
  //

  /** ENDOF IMPORTS*/

  /** EXPORTS */
  export let program: ProgramObject;
  export let row: number;
  export let size: string;
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
  function handleContextMenu(e: MouseEvent) {
    e.preventDefault();
    showContextMenu(e.clientX, e.clientY, [
      {
        name: "Launch",
        icon: program.icon,
        onClick: () => {
          hideContextMenu();
          executeProgramById(program.id)?.bringToTop();
          hideMenu();
        },
      },
      {
        name: "Unpin from taskbar",
        icon: "/images/desktop/unpin.svg",
        onClick: () => {
          hideContextMenu();
          removeProgramShortcut(program);
        },
      },
    ]);
  }

  function handleLauncherClick(_e: MouseEvent) {
    hideMenu();
    executeProgramById(program.id)?.bringToTop();
  }
  /** ENDOF EVENT HANDLERS */
</script>

<div
  style="grid-row: {row};"
  on:click={handleLauncherClick}
  on:contextmenu={handleContextMenu}
>
  <Tooltip tooltip={program.name} position="top">
    <button class="launcher" style="height: {size}; width: {size};">
      <img src={program.icon} alt={program.name} width="100%" height="auto" />
    </button>
  </Tooltip>
</div>

<style lang="scss">
  .launcher {
    background-color: rgba(0, 0, 0, 0);
    transition: background-color 0.25s;
    outline: none;
    border: none;

    cursor: pointer;

    img {
      width: 90%;
      transition: width 0.25s;
    }
  }

  .launcher:hover {
    background-color: var(--input_hover_bg_color);

    img {
      width: 100%;
    }
  }
</style>
