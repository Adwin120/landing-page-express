import { style } from "@vanilla-extract/css";
import { stack } from "../../styles/recipes/stack.css";
import { onMobile } from "../../styles/responsive.css";

export const responsiveStack = style([
    stack({ direction: "row" }),
    onMobile({ flexDirection: "column" })
]);
