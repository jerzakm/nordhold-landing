<script>
  import { onMount } from 'svelte'

  import Search32 from "carbon-icons-svelte/lib/Search32";
  import Umbrella20 from "carbon-icons-svelte/lib/Umbrella20";

  export let segment

  const navMap = {
    chairs: 'Fotele',
    desks: 'Biurka',
    support: 'Wsparcie',
    contact: 'Kontakt'
  }

  let navList
  let width = 9999



  onMount(() => {
    function resize() {
      width = window.innerWidth
      // for (const el of navList.children) {
      //   if (width <= 1024) {
      //     el.style.right = `-100px`
      //     el.style.bottom = `-100px`
      //     el.style.opacity = 0
      //   } else {
      //     el.style.opacity = 1
      //     el.style.right = 'unset'
      //     el.style.bottom = 'unset'
      //   }
      // }
    }

    resize()
    window.onresize = resize
  })
</script>

<style>
  ul {
    margin-bottom: -8px;
    padding: 0;
  }

  li {
    float: left;
    font-size: 1.15rem;
    font-weight: 500;
  }
  @media (min-width: 1024px) {
    li {
      font-size: 1.4rem;
    }
  }


  a {
    text-decoration: none;
  }


  .logo {
    width: 20rem;
  }


</style>

<nav class="fixed md:relative flex md:items-center md:justify-between z-50 mt-4 px-6 md:px-12 xxl:px-32 bottom-0 bg-white md:bg-transparent w-full pt-4 pb-6 md:py-0">
  <a href=".">
    <img src="nordhold_logo.png" alt="Logo Nordhold" class="logo hidden md:block">
  </a>
  <ul class="z-50 flex justify-around content-around flex-row w-full max-w-xl md:mt-8" bind:this={navList}>
    {#each Object.keys(navMap) as route, i}
      <li
        class="lg:p-0
        p-1 z-40">
        <a
          rel="prefetch"
          aria-current={segment === `${route}` ? 'page' : undefined}
          href={route}
          class="lg:mr-12 tracking-wider">
          <div class="flex flex-col items-center">
            <Umbrella20 style="width: 8vw; height: 8vw;" class="block md:hidden"/>
            {navMap[route]}
          </div>
        </a>
      </li>
    {/each}
  </ul>

  <searchbox class=" hidden md:block">
      <div class="bg-white flex items-center rounded-full shadow-2xl">
        <input class="rounded-l-full w-full py-2 px-6 text-gray-800 leading-tight focus:outline-none hidden xxl:block" type="text" placeholder="Wyszukaj">

        <div class="p-4">
          <button class="bg-black text-white rounded-full p-2 hover:bg-red-600 focus:outline-none w-12 h-12 flex items-center justify-center">
            <Search32 class="w-4/5"/>
          </button>
          </div>
        </div>

  </searchbox>

</nav>
