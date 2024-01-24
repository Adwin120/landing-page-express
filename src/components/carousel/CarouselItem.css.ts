import { style } from "@vanilla-extract/css";
import { stack } from "../../styles/recipes/stack.css";
import { onMobile } from "../../styles/responsive.css";

export const carouselCell = style([
    stack({ direction: "row" }),
    onMobile({ flexDirection: "column" }),
    { minWidth: "100%", scrollSnapAlign: "center" }
]);

export const textAndButtonsContainer = style([
    stack({ direction: "column", justify: "spaceBetween" }),
    // grouping of text with buttons does not exist on mobile view
    onMobile({ display: "contents" })
]);

export const moveToBottomOnMobile = style(onMobile({ order: 1 }));
