<script>
    const colors = [
        "bg-royalblue-600",
        "bg-orange-600",
        "bg-purple-600",
        "bg-red-600",
        "bg-green-600"
    ]

    export let categoryName
</script>

<style>

</style>

<section class="text-gray-600 body-font mb-8">
    <div class="container px-5 mx-auto">
      <div class="flex flex-col">
        <div class="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 class="sm:w-2/5 text-gray-900 uppercase raleway text-2xl mb-2 sm:mb-0" style="letter-spacing: 0.3em;">{categoryName}</h1>
          <p class="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam, nemo deleniti eum explicabo perferendis illum harum quasi commodi pariatur corporis?</p>
        </div>
      </div>


      <div class="flex flex-no-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 justify-between">
        {#each {length: 5} as g, i}


          <div class={`flex-shrink-0 m-4 relative overflow-hidden ${colors[i]} rounded-lg max-w-xs shadow-2xl`}>
            <svg class="absolute bottom-0 left-0 mb-8" viewBox="0 0 375 283" fill="none" style="transform: scale(1.5) translateY(-50px); opacity: 0.1;">
              <rect x="159.52" y="175" width="152" height="152" rx="8" transform="rotate(-45 159.52 175)" fill="white"/>
              <rect y="107.48" width="152" height="152" rx="8" transform="rotate(-45 0 107.48)" fill="white"/>
            </svg>


            <div class="relative pt-10 px-2 flex items-center justify-center">
              <div class="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3" style="background: radial-gradient(black, transparent 60%); transform: rotate3d(0, 0, 1, 20deg) scale3d(1, 0.6, 1); opacity: 0.2;"></div>
              <img class="relative w-64" src="skadi_hero2.png" alt="">
            </div>
            <div class="relative text-white px-6 pb-6 -mt-6">
              <span class="block opacity-75 -mb-1">Ergo</span>
              <div class="flex justify-between">
                <span class="block font-semibold text-xl">Skadi</span>
                <span class="block bg-white rounded-full text-black text-xs font-bold px-3 py-2 leading-none flex items-center">499 zł</span>
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
                <span class="text-white ml-3">(64)</span>
              </span>
            </div>
          </div>
          {/each}
      </div>
    </div>
  </section>