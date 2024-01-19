import { recipe } from "@vanilla-extract/recipes";

export const stack = recipe({
    base: {
        display: "flex"
    },
    variants: {
        direction: {
            row: { flexDirection: "row" },
            column: { flexDirection: "column" }
        },
        align: {
            normal: { alignItems: "normal" },
            center: { alignItems: "center" }
        },
        justify: {
            normal: { justifyContent: "normal" },
            center: { justifyContent: "center" }
        },
        gap: {
            none: { gap: "initial" },
            small: { gap: "4px" }
            // medium: { gap: "8px" },
            // large: { gap: "12px" }
        }
    },
    defaultVariants: {
        direction: "row",
        align: "normal",
        gap: "none"
    }
});

export const centerContents = stack({
    justify: "center",
    align: "center"
});
