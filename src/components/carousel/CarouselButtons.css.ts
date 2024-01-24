import { style, StyleRule } from "@vanilla-extract/css";
import { square } from "../../styles/patterns/square.css";
import { stack, centerContents } from "../../styles/recipes/stack.css";
import { onMobile } from "../../styles/responsive.css";
import { theme } from "../../styles/theme.css";

const chevronDesktopSize = 40;
const buttonDesktopSize = 100;
const buttonMobileSize = 100; //FIXME: change

export const buttonGroup = style([
    stack(),
    //move to the bottom right corner of the image
    onMobile({
        marginTop: -buttonMobileSize,
        alignSelf: "end"
    })
]);

const buttonIconStyles: StyleRule = {
    fontSize: chevronDesktopSize,
    color: theme.color.darkGray
};
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