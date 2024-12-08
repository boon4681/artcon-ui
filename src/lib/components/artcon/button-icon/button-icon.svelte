<script lang="ts">
    import { type Variant, variants } from "./index.js";
    import { cn } from "$lib/utils.js";

    let className: string = "";
    export let variant: Variant = "default";
    export { className as class };
</script>

<button class={cn(variants({ variant, className }))}>
    <slot></slot>
</button>
