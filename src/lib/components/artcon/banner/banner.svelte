<script lang="ts">
    export let src: string = "";
    export let alt: string = "";
</script>

<div class="relative w-full h-[250px] bg-[#E4E4E4]">
    <div class="relative w-full h-full">
        <img {src} {alt} class="object-cover w-full h-full" />
        <div
            class="absolute bottom-0 left-0 w-full h-[30px] bg-gradient-to-t from-white to-transparent opacity-100"
        ></div>
    </div>
</div>
