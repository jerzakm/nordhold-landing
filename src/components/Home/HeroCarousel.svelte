<script>
    import Carousel from '@beyonk/svelte-carousel'
    import ArrowRight32 from 'carbon-icons-svelte/lib/ArrowRight32'
    import ArrowLeft32 from 'carbon-icons-svelte/lib/ArrowLeft32'
</script>

<style>
    h1 {
    font-weight: 700;
    line-height: 1;
    font-size: 5vw;
    }

    h2{
        letter-spacing: 0.3em;
    }

    .hero {
        transform-origin: center;
        transform: scale(1.3) translateY(90px);
    }
</style>


<Carousel perPage=1 autoplay=4000 duration=600 ease="easeOutCubic">
    <span class="control" slot="left-control">
        <ArrowLeft32 class="text-gray-700 hover:text-black" />
    </span>

    {#each {length: 5} as g}
        <div class="slide-content">
            <section class="grid grid-cols-2 gap-2 mt-8 px-32">
                <div class="">
                    <img
                        src="skadi_hero.png"
                        alt="skadi"
                        class="hero mt-8 block" />
                    </div>
                <div class="flex flex-col justify-around z-10">
                <div class="flex flex-col items-start ">
                    <h2 class="uppercase raleway ml-1">Seria Ergo</h2>
                    <h1 class="whitespace-no-wrap">
                    Skadi
                    </h1>

                    <p class="text-gray-800 text-2xl p-2 mt-8">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe a aspernatur neque architecto itaque dolorum ratione laudantium excepturi est deleniti?
                    </p>
                    <a
                    href="."
                    class="bg-black rounded-full px-10 py-6 text-2xl text-white mt-16
                    flex">
                    <ArrowRight32 class="mr-2" />
                    Przejdź do produktu
                    </a>
                </div>
                </div>

            </section>

        </div>
    {/each}
    <span class="control" slot="right-control">
        <ArrowRight32 class="text-gray-700 hover:text-black"/>
    </span>
</Carousel>