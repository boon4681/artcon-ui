<script>
    export let src;
    export let alt;
</script>

<div class="relative inline-block  w-10 h-10 ">
    <!-- Avatar image -->
    <img
        {src}
        {alt}
        class={`rounded-full w-full h-full object-cover`}
        on:error={() => (imageUrl = "default-avatar.png")}
    />
</div>
