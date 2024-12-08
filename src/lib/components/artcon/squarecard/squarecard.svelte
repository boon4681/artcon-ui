<script lang="ts">
    import HeartButton from "../heart-button/heart-button.svelte";
    export let src: string;
    export let alt: string;
</script>

<div class="relative w-40 h-40 rounded-lg overflow-hidden shadow-lg select-none">
    <a class="group">
        <img {src} {alt} class="object-cover transition duration-300" />

        <div class="absolute inset-0 bg-black transition duration-300 opacity-0 group-hover:opacity-30"></div>
    </a>

    <div class="absolute bottom-2 right-2">
        <HeartButton />
    </div>
</div>
