<script context="module">
  import YAML from 'YAML'

	export async function preload(page) {

    const chairModel = page.params.slug

    const response = await this.fetch(`content/chairs/${chairModel}.yaml`);
    const yaml = await response.text()
    const data = YAML.parse(yaml)

    return {data}
	}
</script>

<script>
  import TransitionWrapper from '../../components/animations/TransitionWrapper.svelte'
  import { colorDictionary } from '../../constants/colorDictionary'
  import { specsDictionary } from '../../constants/specsDictionary'
  import { languageStore } from '../../stores.js'
  import {onMount} from 'svelte'

  export let data

  let variantChosen = 0
  let activeImage = 0
  let language = 'pl'

  onMount(()=> {
    languageStore.subscribe((lang) => {
      language = lang
    })
  })

</script>

<style>
  .activeGalleryImage {
    box-shadow: -1px 1px 10px 3px rgba(67,169,255,0.52);
  }
</style>


<TransitionWrapper>
  <div class="px-6 md:px-12 xxl:px-32">
      <section class="text-gray-700 body-font overflow-hidden">
          <div class="container py-24 pb-6 ">
            <div class="mx-auto flex flex-wrap">
              <div class="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center flex flex-col">
                  <img alt={`${data.name} ${activeImage+1}`} class="w-3/4 mx-auto shadow-2xl" src={`img/${data.slug}/${data.variants[variantChosen].images[activeImage]}.jpg`}>
                  <gallery class="grid grid-cols-5 gap-3 mt-4 w-3/4 mx-auto">
                    {#each data.variants[variantChosen].images as img,i}
                      <button on:click={()=> activeImage = i} class={`focus:outline-none duration-500 ${activeImage==i? 'activeGalleryImage':''}`}>
                        <img alt={`${data.name} ${i+1}`} src={`img/${data.slug}/200/${data.variants[variantChosen].images[i]}.jpg`}>
                      </button>
                    {/each}
                  </gallery>
              </div>
              <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 class="text-md title-font text-gray-500 tracking-widest">{data.series[language]}</h2>
                <h1 class="text-gray-900 text-5xl title-font font-medium mb-1" style="font-weight: 700;">{data.name}</h1>
                <div class="flex mb-4">
                  <span class="flex items-center">
                    {#each {length: data.rating} as g,i}
                      <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                    {/each}
                    <span class="text-gray-600 ml-3">({data.testimonials.length})</span>
                  </span>
                </div>
                <p class="leading-relaxed">{data.description[language]}</p>
                <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-400 mb-5">
                  <div class="flex">
                    <span class="mr-3">Kolor</span>
                    {#each data.variants as variant, variantIndex}
                      <button class={`border-2 focus:outline-none border-gray-300 ml-1 bg-${colorDictionary[variant.color]} rounded-full w-6 h-6 focus:outline-none hover:scale-150 transform duration-150`}
                        on:click={()=> {
                          variantChosen = variantIndex
                          activeImage = 0
                        }}
                      />
                    {/each}
                  </div>

                </div>
                <div class="flex">
                  <span class="title-font font-medium text-2xl text-gray-900">{data.price} zł</span>
                </div>

                <div class="grid grid-cols-2 py-8 text-gray-900">
                  {#each Object.keys(data.specs) as specKey,i}
                      <span class="text-gray-700 pb-1 tracking-wide">{specsDictionary[specKey][language]}:</span>
                      <span class="text-gray-800 pb-1">{data.specs[specKey]}</span>
                  {/each}
                </div>
              </div>
            </div>
          </div>


        </section>



        <section>
          <div class="container mx-auto flex flex-wrap mb-8">
            <div class="flex flex-wrap md:-m-2 -m-1">
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-1/2 ">
                  <img alt="gallery" class="object-cover w-full h-full shadow-2xl block" src={`img/${data.slug}/${data.variants[variantChosen].images[6]}.jpg`}>
                </div>
                <div class="md:p-2 p-1 w-1/2 ">
                  <img alt="gallery" class="object-cover w-full h-full shadow-2xl  block" src={`img/${data.slug}/${data.variants[variantChosen].images[3]}.jpg`}>
                </div>
                <div class="md:p-2 p-1 w-full ">
                  <img alt="gallery" class="object-cover w-full h-full shadow-2xl  block" src={`img/${data.slug}/${data.variants[variantChosen].images[5]}.jpg`}>
                </div>
              </div>
              <div class="flex flex-wrap w-1/2">
                <div class="md:p-2 p-1 w-full">
                  <img alt="gallery" class="object-cover w-full h-full shadow-2xl  block" src={`img/${data.slug}/${data.variants[variantChosen].images[1]}.jpg`}>
                </div>
                <div class="md:p-2 p-1 w-1/2 ">
                  <img alt="gallery" class="object-cover w-full h-full shadow-2xl  block" src={`img/${data.slug}/${data.variants[variantChosen].images[4]}.jpg`}>
                </div>
                <div class="md:p-2 p-1 w-1/2 ">
                  <img alt="gallery" class="object-cover w-full h-full shadow-2xl  block" src={`img/${data.slug}/${data.variants[variantChosen].images[2]}.jpg`}>
                </div>
              </div>
            </div>
          </div>
        </section>
  </div>
</TransitionWrapper>