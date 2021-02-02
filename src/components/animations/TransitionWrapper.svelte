<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'

  let show = false

  onMount(() => {
    show = true
  })
</script>

<style>
  div {
    position: relative;
  }
</style>

{#if show}
  <div in:fly={{ x: -100, duration: 300 }}>
    <slot />
  </div>
{/if}
