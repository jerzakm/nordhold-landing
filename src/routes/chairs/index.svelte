<script context="module">
	// the (optional) preload function takes a
	// `{ path, params, query }` object and turns it into
	// the data we need to render the page
	export async function preload(page, session) {
		// the `slug` parameter is available because this file
        // is called [slug].svelte
		const { type } = page.query;

		// `this.fetch` is a wrapper around `fetch` that allows
		// you to make credentialled requests on both
		// server and client


		return { type };
	}
</script>

<script>
	import TransitionWrapper from '../../components/animations/TransitionWrapper.svelte'
	export let type
</script>
<TransitionWrapper>
<section class="px-6 md:px-12 xxl:px-32">
	<h1 class="text-6xl mt-8">Fotele {type? type : ''}</h1>

	<div class="grid grid-cols-5">
		{#each {length: 12} as g,i}
		<a href="chairs/skadi">
			<div class={`flex-shrink-0 m-4 relative overflow-hidden`}>
				<div class="relative pt-10 px-2 flex items-center justify-center">
					<div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
					<img class="relative w-64" src="skadi_hero2.png" alt="">
				</div>
				<div class="relative text-black px-6 pb-6 -mt-6">
					<span class="block opacity-75 -mb-1">Ergo</span>
					<div class="flex justify-between">
					<span class="block font-semibold text-xl">Skadi</span>
					<span class="bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none flex items-center">499 zł</span>
					</div>
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
					<svg fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
						<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
					</svg>
					<span class="text-black ml-3">(64)</span>
					</span>
				</div>
			</div>
		</a>
		{/each}
	</div>
</section>
</TransitionWrapper>