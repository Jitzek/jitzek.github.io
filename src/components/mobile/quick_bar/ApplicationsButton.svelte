<script lang="ts">
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
    export let onClick: Function = () => {};
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
    function handleClick(e: MouseEvent) {
        onClick();
    }
    /** ENDOF EVENT HANDLERS */
</script>

<button class="applications-button" on:click={handleClick}>
    <svg viewBox="0 0 32 32" version="1.1" id="svg5">
        <defs id="defs2" />
        <g id="layer1">
            <circle class="outer-circle" id="path236" cx="16" cy="16" r="16" />
            <circle
                class="inner-circle"
                id="path236-3"
                cx="9.6253319"
                cy="12.705384"
                r="2"
            />
            <circle
                class="inner-circle"
                style=""
                id="path236-3-6"
                cx="16.05113"
                cy="12.716358"
                r="2"
            />
            <circle
                class="inner-circle"
                id="path236-3-6-7"
                cx="22.362909"
                cy="12.72947"
                r="2"
            />
            <circle
                class="inner-circle"
                style=""
                id="path236-3-5"
                cx="9.6014242"
                cy="19.092691"
                r="2"
            />
            <circle
                class="inner-circle"
                id="path236-3-6-3"
                cx="16.027224"
                cy="19.103664"
                r="2"
            />
            <circle
                class="inner-circle"
                id="path236-3-6-7-5"
                cx="22.339003"
                cy="19.116777"
                r="2"
            />
        </g>
    </svg>
</button>

<style lang="scss">
    .applications-button {
        background: none;
        border: none;

        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;

        cursor: pointer;

        svg {
            width: 3rem;
        }

        .outer-circle {
            fill: var(--input_bg_color);
            transition: fill 0.25s;
        }
        .inner-circle {
            fill: var(--input_fg_color);
            fill-opacity: 1;
            stroke-width: 0.125;
            transition: fill 0.25s;
        }
    }

    .applications-button:hover {
        .outer-circle {
            fill: var(--input_hover_bg_color);
        }
        .inner-circle {
            fill: var(--input_hover_fg_color);
        }
    }

    .applications-button:active {
        .outer-circle {
            fill: var(--input_active_bg_color);
        }
        .inner-circle {
            fill: var(--input_active_fg_color);
        }
    }
</style>
