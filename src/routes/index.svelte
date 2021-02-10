<script>
  import TransitionWrapper from '../components/animations/TransitionWrapper.svelte'
  import HeroCarousel from '../components/Home/HeroCarousel.svelte'
  import NewsletterSignup from '../components/Home/NewsletterSignup.svelte'
  import BrandQualities from '../components/Home/BrandQualities.svelte'
  import BrandStats from '../components/Home/BrandStats.svelte'
  import CategoryPreview from '../components/Home/CategoryPreview.svelte'
  import TestimonialScroll from '../components/Home/TestimonialScroll.svelte'
</script>

<style>

</style>

<svelte:head>
  <title>Nordhold</title>
</svelte:head>


<TransitionWrapper>
  <HeroCarousel/>
  <TestimonialScroll/>
  <CategoryPreview categoryName={"Fotele obrotowe"} series={"00 | Seria Ergo"}/>
  <BrandQualities/>
  <CategoryPreview categoryName={"Biurka"} series={"01 | Seria Gaming"}/>
  <BrandStats/>
  <NewsletterSignup/>
</TransitionWrapper>