import { StyleRule } from "@vanilla-extract/css";

const LAYOUT_BREAKPOINT = "768px";

export const onMobile = (styles: StyleRule) => ({
    "@media": {
        [`screen and (max-width: ${LAYOUT_BREAKPOINT})`]: styles
    }
});

export const onDesktop = (styles: StyleRule) => ({
    "@media": {
        [`screen and (min-width: ${LAYOUT_BREAKPOINT})`]: styles
    }
})