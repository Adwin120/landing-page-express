import { StyleRule, style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";
import { centerContents } from "../../styles/recipes/stack.css";
import { square } from "../../styles/patterns/square.css";

//TODO: mobile
export const carouselWithButtons = style({
    display: "flex",
    alignItems: "end"
});


const chevronDesktopSize = 40;
const buttonIconStyles: StyleRule = {
    fontSize: chevronDesktopSize,
    color: theme.color.darkGray
};
const buttonDesktopSize = 100;

export const carouselButton = style([
    centerContents,
    square(buttonDesktopSize),
    buttonIconStyles,
    {
        backgroundColor: "black",
        border: "unset",
        cursor: "pointer",
        ":hover": {
            backgroundColor: theme.color.veryDarkGray
        }
    }
]);
