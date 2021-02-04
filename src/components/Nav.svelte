<script>
  import { onMount } from 'svelte'

  import Search32 from "carbon-icons-svelte/lib/Search32";

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
      for (const el of navList.children) {
        if (width <= 1024) {
          el.style.right = `-100px`
          el.style.bottom = `-100px`
          el.style.opacity = 0
        } else {
          el.style.opacity = 1
          el.style.right = 'unset'
          el.style.bottom = 'unset'
        }
      }
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
  }
  @media (min-width: 1024px) {
    li {
      display: block;
    }
  }


  a {
    text-decoration: none;
    font-size: 1.3rem;
    font-weight: 500;
  }


  .logo {
    width: 20rem;
  }


</style>

<nav class="flex items-center justify-between z-50 mt-4 px-32">
  <a href=".">
    <img src="nordhold_logo.png" alt="Logo Nordhold" class="logo">
  </a>
  <ul class="fixed lg:relative bottom-0 right-0 z-50" bind:this={navList}>
    {#each Object.keys(navMap) as route}
      <li
        class="fixed lg:relative bottom-0 right-0 ease-in duration-300 lg:p-0
        p-1 rounded-full z-40 opacity-0 lg:opacity-100">
        <a
          rel="prefetch"
          aria-current={segment === `${route}` ? 'page' : undefined}
          href={route}
          class="lg:mr-12 tracking-wider">
          {navMap[route]}
        </a>
      </li>
    {/each}
  </ul>

  <searchbox>
      <div class="bg-white flex items-center rounded-full shadow-2xl">
        <input class="rounded-l-full w-full py-2 px-6 text-gray-800 leading-tight focus:outline-none" type="text" placeholder="Wyszukaj">

        <div class="p-4">
          <button class="bg-black text-white rounded-full p-2 hover:bg-royalblue-600 focus:outline-none w-12 h-12 flex items-center justify-center">
            <Search32 class="w-4/5"/>
          </button>
          </div>
        </div>

  </searchbox>

</nav>
