<script>
  import Nav from '../components/Nav.svelte'
  import Footer from '../components/Footer.svelte'

  // import WaterBg from "./../components/WaterBg.svelte";

  export let segment
</script>

<style>
  main {
    position: relative;
    box-sizing: border-box;
  }
</style>

<!-- <WaterBg/> -->

<Nav {segment} />

<main>
  <slot />
</main>

<Footer />
