<script context="module">

	export async function preload(page) {

    const productRes = await this.fetch(page.path+'.json')
    const {productData,variableLocales} = await productRes.json()


    return { productData,variableLocales }
	}
</script>

<script>
  import TransitionWrapper from '../../components/animations/TransitionWrapper.svelte'
  import IntersectionObserver from '../../components/IntersectionObserver.svelte'
  import Checkmark24 from "carbon-icons-svelte/lib/Checkmark32";
  import Close24 from "carbon-icons-svelte/lib/Close24";
  import { languageStore } from '../../stores.js'
  import {onMount} from 'svelte'
  import Image from '../../components/Image.svelte'


  export let productData
  export let variableLocales

  let variantChosen = 0
  let activeImage = 0
  let language = 'pl'

  onMount(()=> {
    console.log(variableLocales)

    languageStore.subscribe((lang) => {
      language = lang
    })
  })

</script>

<style>
  .activeGalleryImage {
    box-shadow: -1px 1px 10px 3px rgba(67,169,255,0.52);
  }

  :global(p#product-description > ul li::before) {
    content: "\2022";
    color: #121212;
    display: inline-block;
    width: 1em;
    margin-left: -1em;
  }

</style>


<TransitionWrapper>
  <div class="px-6 md:px-12 xxl:px-32">
      <section class="text-gray-700 body-font overflow-hidden">
          <div class="container py-24 pb-6 ">
            <div class="mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center flex flex-col">
                  <!-- <img alt={`${data.name} ${activeImage+1}`} class="w-3/4 mx-auto shadow-2xl" src={`img/${data.slug}/1400/${data.variants[variantChosen].images[activeImage]}.jpg`}> -->
                  <Image desc={`${productData[language].product.name} ${activeImage+1}`} style="w-3/4 mx-auto shadow-2xl" imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[activeImage].id}`}/>
                  <gallery class="grid grid-cols-5 gap-3 mt-4 w-3/4 mx-auto">
                    {#each productData[language].product.productVariants[variantChosen].images as img,i}
                      <button on:click={()=> activeImage = i} class={`focus:outline-none duration-500 ${activeImage==i? 'activeGalleryImage':''}`}>
                        <Image desc={`${productData[language].product.name} ${i+1}`} imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[i].id}`}/>
                      </button>
                    {/each}
                  </gallery>
              </div>
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-md title-font text-gray-500 tracking-widest">{productData[language].product.series}</h2>
                <h1 class="text-gray-900 text-5xl title-font font-medium mb-1" style="font-weight: 700;">{productData[language].product.name}</h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    <!-- TODO - TESTIMONIAL LINK AND START AVG COUNTER !! -->
                    {#each {length: 5} as g,i}
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    {/each}
                    <span class="text-gray-600 ml-3">({productData[language].product.testimonials.length})</span>
                  </span>
                </div>
                <p class="leading-relaxed" id="product-description">{@html productData[language].product.description}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-400 mb-5">
                  <div class="flex">
                    <span class="mr-3">Kolor</span>
                    {#each productData[language].product.productVariants as variant, variantIndex}
                      <button class={`border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none hover:scale-150 transform duration-150`} style={`background-color: ${variant.color.hex}`}
                        on:click={()=> {
                          variantChosen = variantIndex
                          activeImage = 0
                        }}
                      />
                    {/each}
                  </div>

                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">{productData[language].product.price} zł</span>
                </div>

                <div class="grid grid-cols-2 py-8 text-gray-900">
                  {#each Object.keys(productData[language].product.chairSpec) as specKey,i}
                      {#if productData[language].product.chairSpec[specKey] != null}
                        <span class="text-gray-700 pb-1 tracking-wide">{variableLocales[language][specKey]}:</span>

                        <span class="text-gray-800 pb-1">
                        {#if productData[language].product.chairSpec[specKey] === true}
                          <Checkmark24 />
                        {:else if productData[language].product.chairSpec[specKey] === false}
                          <Close24 />
                        {:else}
                          {productData[language].product.chairSpec[specKey]}
                        {/if}
                        </span>
                      {/if}
                  {/each}
                </div>
              </div>
            </div>
          </div>


        </section>



        <section>
          <IntersectionObserver once={true} let:intersecting={intersecting}>
            {#if intersecting}
              <div class="container mx-auto flex flex-wrap mb-8">
                <div class="flex flex-wrap md:-m-2 -m-1">
                  <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-1/2 ">
                      <Image fullSize style={"object-cover w-full h-full shadow-2xl block"} desc={`${productData[language].product.name}`} imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[5].id}`}/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 ">
                      <Image fullSize style={"object-cover w-full h-full shadow-2xl block"} desc={`${productData[language].product.name}`} imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[3].id}`}/>
                    </div>
                    <div class="md:p-2 p-1 w-full ">
                      <Image fullSize style={"object-cover w-full h-full shadow-2xl  block"} desc={`${productData[language].product.name}`} imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[1].id}`}/>
                    </div>
                  </div>
                  <div class="flex flex-wrap w-1/2">
                    <div class="md:p-2 p-1 w-full">
                      <Image fullSize style={"object-cover w-full h-full shadow-2xl  block"} desc={`${productData[language].product.name}`} imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[2].id}`}/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 ">
                      <Image fullSize style={"object-cover w-full h-full shadow-2xl  block"} desc={`${productData[language].product.name}`} imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[6].id}`}/>
                    </div>
                    <div class="md:p-2 p-1 w-1/2 ">
                      <Image fullSize style={"object-cover w-full h-full shadow-2xl  block"} desc={`${productData[language].product.name}`} imgSrc={`img/${productData[language].product.productVariants[variantChosen].images[7].id}`}/>
                    </div>
                  </div>
                </div>
              </div>
            {/if}
          </IntersectionObserver>
        </section>
  </div>
</TransitionWrapper>