<script>
    import HeartButton from "../heart-button/heart-button.svelte";
    export let src;
    export let alt;

    let isClicked = false;

    function handleClick() {
        isClicked = true;
        setTimeout(() => {
            isClicked = false;
        }, 100); 
    }
</script>

<div class="relative w-40 h-40 rounded-lg overflow-hidden shadow-lg">
    <div class="group" on:click={handleClick}>
        <img {src} {alt} class="object-cover transition duration-300" />

        <div
            class="absolute inset-0 bg-black transition duration-300 opacity-0"
            class:opacity-80={isClicked}
            class:group-hover:opacity-20={!isClicked}
        ></div>
    </div>

    <div class="absolute bottom-2 right-2 hover:scale-110">
        <HeartButton />
    </div>
</div>
