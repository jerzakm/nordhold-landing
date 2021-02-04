<script>
  import TransitionWrapper from '../components/animations/TransitionWrapper.svelte'
  import HeroCarousel from '../components/Home/HeroCarousel.svelte'
  import NewsletterSignup from '../components/Home/NewsletterSignup.svelte'
  import BrandQualities from '../components/Home/BrandQualities.svelte'
  import BrandStats from '../components/Home/BrandStats.svelte'
  import CategoryPreview from '../components/Home/CategoryPreview.svelte'
</script>

<style>

</style>

<svelte:head>
  <title>Nordhold</title>
</svelte:head>

<heroHome>
  <HeroCarousel/>
  <BrandStats/>
  <CategoryPreview categoryName={"Fotele obrotowe"}/>
  <BrandQualities/>
  <CategoryPreview categoryName={"Biurka"}/>
  <NewsletterSignup/>
</heroHome>
