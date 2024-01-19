import { StyleRule } from "@vanilla-extract/css";

export const onMobile = (styles: StyleRule) => ({
    "@media": {
        "screen and (max-width: 768px)": styles
    }
});