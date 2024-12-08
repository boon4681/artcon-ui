import { type VariantProps, tv } from "tailwind-variants";

export const variants = tv({
    base: "flex justify-center items-center size-11 p-2 rounded-md border-transparent inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            default: "text-black bg-white hover:bg-neutral-400",
            black: "text-white bg-black hover:bg-neutral-600"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

export type Variant = VariantProps<typeof variants>["variant"];