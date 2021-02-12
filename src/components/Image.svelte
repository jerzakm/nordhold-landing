<script>
    import { imageConfig } from '../constants/imageConfig'
    import { onMount } from 'svelte'

    export let imgSrc
    export let desc
    export let style

    let image = imageConfig.placeholder

    let jpgSrc
    let webpSrc

    let el

    let changeCount = 0

    $: imgSrc && renderImage()

    function renderImage(){
        if(changeCount>0){
            const width = el.getBoundingClientRect().width
            const sizes = [...imageConfig.sizes].reverse()
            for(let i =0; i< sizes.length;i++) {
                if(sizes[i]>=width){
                    jpgSrc = `${imgSrc}_${sizes[i]}.jpg`
                    webpSrc = `${imgSrc}_${sizes[i]}.webp`
                }
            }
            if(!jpgSrc&&!webpSrc){
                jpgSrc = `${imgSrc}_${sizes[0]}.jpg`
                webpSrc = `${imgSrc}_${sizes[0]}.webp`
            }
        }
        changeCount++
    }

    onMount(()=> {
        // const resizeObserver = new ResizeObserver(entries => {

        // console.log('Size changed');
        // console.log(el.getBoundingClientRect())
        // });

        // resizeObserver.observe(el);
        renderImage()
    })

</script>

<picture bind:this={el} class={style}>
    {#if jpgSrc && webpSrc}
        <source srcset={webpSrc} type="image/webp">
        <source srcset={jpgSrc} type="image/jpeg">
    {/if}
    <img src={image} alt={desc} >
</picture>