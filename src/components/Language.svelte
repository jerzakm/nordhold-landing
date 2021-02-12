<script>
    import {languageStore} from '../stores'
</script>

<languages class="flex absolute p-2 top-0 right-0">
    <button on:click={()=> languageStore.set('pl')}>
        <img src="pl.svg" alt="Polski" class="h-4 mr-2 border-gray-900 border-solid" style="border-width: 1px;">
    </button>
    <button on:click={()=> languageStore.set('en')}>
        <img src="uk.svg" alt = "English" class="h-4 mr-2 border-gray-900 border-solid" style="border-width: 1px;">
    </button>
</languages>