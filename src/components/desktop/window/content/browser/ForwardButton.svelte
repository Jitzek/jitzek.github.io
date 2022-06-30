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
    export let size: string = "1.25rem";

    export let onClick: Function = (e: MouseEvent) => {};
    /** ENDOF EXPORTS */

    /** VARIABLE DECLARATION */
    let buttonElement: HTMLElement;
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
    function handleRefreshButtonClick(_e: MouseEvent) {
        onClick();
        buttonElement.classList.remove("before");
        setTimeout(() => {
            buttonElement.classList.add("before");
        }, 400);
    }
    /** ENDOF EVENT HANDLERS */
</script>

<button
    class="before"
    bind:this={buttonElement}
    on:click={handleRefreshButtonClick}
    style="width: {size}; height: 100%;"
>
    <svg
        width="32.005726"
        height="24"
        viewBox="0 0 32.005726 24"
        version="1.1"
        id="svg5"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs id="defs2" />
        <g id="layer1" transform="translate(0,-4.0000005)">
            <rect
                style="fill:#ffffff;stroke-width:2.75123"
                id="rect184"
                width="27.739157"
                height="8"
                x="0"
                y="12"
                ry="4"
            />
            <path
                style="fill:#ffffff;fill-opacity:1;stroke:none;stroke-width:0.687643;stroke-dasharray:none;stroke-opacity:1"
                id="path396"
                transform="matrix(0,2.0966512,-1.5129998,0,34.053508,-21.341844)"
                class="UnoptimicedTransforms"
                d="m 23.489757,11.190684 c -0.567952,0.983723 -10.791098,0.983723 -11.35905,0 -0.567953,-0.983723 4.54362,-9.8372261 5.679525,-9.8372261 1.135905,0 6.247478,8.8535031 5.679525,9.8372261 z"
            />
        </g>
    </svg>
</button>

<style lang="scss">
    button {
        all: unset;
        padding: 0 0.5rem 0 0.5rem;
        svg {
            fill: var(--input_fg_color);
            width: 100%;
            height: 100%;
            transition: transform 0.15s ease-out;
            transform: translate(0.15rem);
        }
    }
    button.before {
        svg {
            transform: translate(0rem);
        }
    }
    button:hover {
        background-color: var(--input_hover_bg_color);
    }
</style>
