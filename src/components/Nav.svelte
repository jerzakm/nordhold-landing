<script>
  import { onMount } from 'svelte'

  export let segment

  const navMap = {
    products: 'Produkty',
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
    margin: 0;
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
  }



</style>

<nav class="flex lg:mt-8 items-center justify-between z-50">
  <a href=".">
    <h1 class="logo tracking-wide"><img src="nordhold_logo.png" alt="Logo Nordhold" class="w-64"></h1>
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
          class="text-blue-900 py-3 lg:mr-12 tracking-wider ">
          {navMap[route]}
        </a>
      </li>
    {/each}
  </ul>


</nav>
