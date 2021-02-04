<script>
  import TransitionWrapper from '../components/animations/TransitionWrapper.svelte'
  import HeroCarousel from '../components/Home/HeroCarousel.svelte'
  import NewsletterSignup from '../components/Home/NewsletterSignup.svelte'
  import BrandQualities from '../components/Home/BrandQualities.svelte'
</script>

<style>

</style>

<svelte:head>
  <title>Nordhold</title>
</svelte:head>

<heroHome>
  <HeroCarousel/>
  <BrandQualities/>
  <NewsletterSignup/>
</heroHome>

