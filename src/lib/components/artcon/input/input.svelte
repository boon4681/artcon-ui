<script lang="ts">
    let placeholder: string = "";
    import { cn } from "$lib/utils.js";
    let className = "";
    export { className as class };
    export let value: string;
</script>

<input
    {placeholder}
    class={cn("border outline-none px-6 py-2.5 rounded-lg border-black min-w-[220px] min-h-10 text-sm", className)}
    type="text"
    {value}
/>
