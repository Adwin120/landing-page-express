import { style } from "@vanilla-extract/css";
import { stack } from "../../styles/recipes/stack.css";

// it's easier to reposition from desktop to mobile so mobile last is used

export const carousel = style([
    stack(),
    {
        overflowX: "scroll",
        scrollBehavior: "smooth",
        scrollSnapType: "x mandatory",
        scrollbarWidth: "none"
    }
]);


