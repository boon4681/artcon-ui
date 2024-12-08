<script lang="ts">
    export let src: string;
    export let alt: string;

    let className: string = "size-10";
    export { className as class };
</script>

<div class="relative inline-block rounded-full overflow-hidden {className}">
    <!-- Avatar image -->
    <img {src} {alt} class={`w-full h-full object-cover`} on:error={() => (src = "default-avatar.png")} />
</div>
