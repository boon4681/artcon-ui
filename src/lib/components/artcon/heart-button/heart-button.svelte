<script lang="ts">
    import HeartIcon from "lucide-svelte/icons/heart";
    import { cn } from "$lib/utils.js";
    let className = "";
    export { className as class };
    export let hearted = false;
    const toggleheart = () => (hearted = !hearted);
</script>

<!-- svelte-ignore a11y_click_events_have_key_events -->
<!-- svelte-ignore a11y_no_static_element_interactions -->
<button on:click={toggleheart} class={cn("cursor-pointer inline-block size-12", className)}>
    <HeartIcon
        class="w-full h-full transition-all duration-100 {hearted
            ? 'text-red-500 fill-red-500'
            : 'fill-white text-black-400'} hover:opacity-80"
        stroke="currentColor"
    />
</button>
