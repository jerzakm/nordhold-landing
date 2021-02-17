<script>
    import { imageConfig } from '../constants/imageConfig'
    import { onMount } from 'svelte'

    export let imgSrc
    export let desc = ''
    export let style = ''
    export let fullSize = false

    let image = imageConfig.placeholder

    let jpgSrc
    let webpSrc

    let el

    let changeCount = 0

    $: imgSrc && renderImage()

    let windowWidth = 0

    function renderImage(){
        // if(changeCount>0){
        //     let width = el.getBoundingClientRect().width

        //     const sizes = [...imageConfig.sizes].reverse()

        //     windowWidth = window.innerHeight? window.innerWidth : window.innerHeight

        //     if(fullSize){
        //         width = windowWidth
        //     }

        //     for(let i =0; i< sizes.length;i++) {
        //         if(sizes[i]>=width){
        //             jpgSrc = `${imgSrc}_${sizes[i]}.jpg`
        //             webpSrc = `${imgSrc}_${sizes[i]}.webp`
        //         }
        //         }
        //         if(!jpgSrc&&!webpSrc){
        //             jpgSrc = `${imgSrc}_${sizes[0]}.jpg`
        //             webpSrc = `${imgSrc}_${sizes[0]}.webp`
        //         }
        //     }
        // changeCount++
        jpgSrc = `${imgSrc}_1400.jpg`
        webpSrc = `${imgSrc}_1400.webp`
    }

    onMount(()=> {
        renderImage()

        window.addEventListener('resize', ()=> {
            windowWidth = window.innerHeight? window.innerWidth : window.innerHeight
            renderImage()
        })
    })

</script>

<picture bind:this={el} class={style}>
    {#if jpgSrc && webpSrc}
        <source srcset={webpSrc} type="image/webp">
        <source srcset={jpgSrc} type="image/jpeg">
    {/if}
    <img src={image} alt={desc} >
</picture>