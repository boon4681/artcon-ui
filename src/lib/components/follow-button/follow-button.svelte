<script>
    let isFollowing = false;

    function toggleFollow() {
        isFollowing = !isFollowing;
    }
</script>

<button
    on:click={toggleFollow}
    class="flex w-32 items-center justify-center px-6 py-2 border-2 rounded-full text-white transition-all duration-300"
    class:bg-gray-300={isFollowing}
    class:bg-blue-500={!isFollowing}
    class:border-gray-400={isFollowing}
    class:border-blue-500={!isFollowing}
>
    {#if isFollowing}
    <span class="text-gray-600">Followed</span>
    {:else}
        Follow
    {/if}
</button>
