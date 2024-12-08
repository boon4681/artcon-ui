<script lang="ts">
    import { cn } from "$lib/utils.js";
    export let src: string;
    export let alt: string;

    let className: string = "";
    export { className as class };
</script>

<div class={cn("relative inline-block rounded-full overflow-hidden size-10", className)}>
    <!-- Avatar image -->
    <img {src} {alt} class={`w-full h-full object-cover`} on:error={() => (src = "default-avatar.png")} />
</div>
