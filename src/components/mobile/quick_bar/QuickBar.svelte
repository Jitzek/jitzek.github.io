<script lang="ts">
    /** IMPORTS */
    // "svelte"
    //

    import Launcher from "$components/desktop/taskbar/Launcher.svelte";
    import Shortcut from "$components/shared/grid/Shortcut.svelte";
    import ApplicationsButton from "./ApplicationsButton.svelte";

    // "components"
    //

    // "objects"
    //

    // "stores"
    //

    /** ENDOF IMPORTS*/

    /** EXPORTS */
    export let heightInRem: number = 3.5;
    export let distanceFromBottomInRem: number = 3.5;
    export let onApplicationsButtonPress: Function = () => {};
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

<div
    class="quick-bar"
    style="bottom: {distanceFromBottomInRem}rem; height: {heightInRem}rem;"
>
    <div class="quick-bar-item" />
    <div class="quick-bar-item" />

    <div class="quick-bar-item" />

    <div class="quick-bar-item" />

    <div class="quick-bar-item">
        <ApplicationsButton onClick={onApplicationsButtonPress} />
    </div>
</div>

<style lang="scss">
    .quick-bar {
        display: flex;
        position: absolute;
        justify-content: center;
        width: 100%;
        height: 100px;

        .quick-bar-item {
            width: 20%;
            text-align: center;
            margin-left: 1%;
            margin-right: 1%;
        }
    }
</style>
