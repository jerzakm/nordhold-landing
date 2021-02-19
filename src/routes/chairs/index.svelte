<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		// the `slug` parameter is available because this file
        // is called [slug].svelte
		const { type } = page.query;

		const res = await this.fetch('chairs/chairlist.json')
		const productList = await res.json()





		return { type, productList };
	}
</script>

<script>

	import TransitionWrapper from '../../components/animations/TransitionWrapper.svelte'
	import Image from '../../components/Image.svelte'
	import { languageStore } from '../../stores.js'
	import {onMount} from 'svelte'

	export let type = ''
	export let productList = []

	let language = 'pl'


	onMount(()=> {

		languageStore.subscribe((lang) => {
		language = lang
		})
	})

</script>
<TransitionWrapper>
<section class="px-6 md:px-12 xxl:px-32">
	<h1 class="text-6xl mt-8">Fotele {type}</h1>

	<div class="grid grid-cols-5 ">
		{#each productList[language].products as product,i}
			<a href={`chairs/${product.slug}`} rel="prefetch">
				<div class={`flex-shrink-0 m-4 relative overflow-hidden bg-white shadow-2xl rounded-md h-full`}>
					<div class="relative pt-10 px-2 flex items-center justify-center">
						<Image style="relative object-cover w-full transform scale-125" imgSrc={`img/${product.productVariants[0].images[0].id}`}/>
					</div>
					<div class="relative text-black px-6 pb-6 mt-6 grid grid-cols-2">
						<!-- <span class="block opacity-75 -mb-1">Ergo</span> -->
							<span class="block font-semibold text-xl">{product.name}</span>
							<span class="text-black text-sm font-bold px-3 py-2 leading-none flex items-center ">
								<span>{product.price} zł</span>
							</span>
						<span class="flex items-center">
							<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-yellow-500" viewBox="0 0 24 24">
								<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
							</svg>
							<span class="text-black ml-3">({product.testimonials.length})</span>
						</span>
						<span class="grid ml-1 p-1 grid-cols-5 gap-1">
							{#each product.productVariants as variant,i}
								<span class="w-4 h-4 rounded-full border-gray-900" style={`background-color: ${variant.color.hex}; border-width: 1px;`}/>
							{/each}
						</span>
					</div>
				</div>
			</a>
		{/each}
	</div>
</section>
</TransitionWrapper>