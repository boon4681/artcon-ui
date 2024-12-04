<script>
    import { Heart as HeartIcon } from "lucide-svelte";
    export let size = 36;
    let isClicked = false;
    const toggleheart = () => (isClicked = !isClicked);
</script>

<div on:click={toggleheart} class="cursor-pointer inline-block">
    <HeartIcon
        class={`w-${size} h-${size} ${isClicked ? "text-red-500" : "text-black-400"}`}
        
        fill={isClicked ? 'red' : 'none'}
        stroke="currentColor"
    />
</div>
