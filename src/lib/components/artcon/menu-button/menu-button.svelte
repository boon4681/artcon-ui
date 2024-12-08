<script lang="ts">
    import { cn } from "$lib/utils.js";
    let className: string = "size-10";
    export { className as class };
</script>

<div class={cn("bg-white hover:bg-neutral-200 transition-all rounded p-1 text-sm px-2 cursor-pointer", className)}>
    My Profile
</div>
