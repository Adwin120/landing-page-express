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
            center: { alignItems: "center" },
            normal: { alignItems: "normal" }
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
