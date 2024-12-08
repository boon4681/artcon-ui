import { type VariantProps, tv } from "tailwind-variants";

export const variants = tv({
    base: "rounded-full border-transparent min-w-[120px] px-4 py-2 inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
    variants: {
        variant: {
            default: "text-white bg-black hover:bg-black/80",
            red: "text-white bg-red-500 hover:bg-red-500/80",
            blue: "text-white bg-blue-500 hover:bg-blue-500/80",
            gray: "text-black bg-neutral-300 hover:bg-neutral-300/80",
            outline: "text-black bg-white border border-black hover:bg-black hover:text-white"
        },
    },
    defaultVariants: {
        variant: "default",
        size: "default",
    },
});

export type Variant = VariantProps<typeof variants>["variant"];