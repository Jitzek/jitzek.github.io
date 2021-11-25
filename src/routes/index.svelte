<script lang="ts">
  import { desktop, mobile } from "$stores/shared/DeviceTypeStore";
  import Desktop from "$components/desktop/Desktop.svelte";
  import { onMount } from "svelte";
  import Mobile from "$components/mobile/Mobile.svelte";
  import LoadingScreen from "$components/shared/loading_screen/LoadingScreen.svelte";

  let mounted: boolean = false;
  onMount(() => {
    mounted = true;
  });
</script>

<svelte:head>
  <title>Jitze Jan Kerkstra</title>
</svelte:head>

{#if mounted}
  {#if $desktop}
    <Desktop />
  {:else}
    <Mobile />
  {/if}
{:else}
  <LoadingScreen />
{/if}
