import { StyleRule, style } from "@vanilla-extract/css";
import { theme } from "../../styles/theme.css";
import { centerContents, stack } from "../../styles/recipes/stack.css";
import { square } from "../../styles/patterns/square.css";

// it's easier to reposition from desktop to mobile so mobile last is used
const onMobile = (styles: StyleRule) => ({
    "@media": {
        "screen and (max-width: 768px)": styles
    }
});

export const carousel = style([
    stack({ direction: "row" }),
    onMobile({ flexDirection: "column" })
]);

export const textAndButtonsContainer = style([
    stack({ direction: "column", justify: "spaceBetween" }),
    // grouping of text with buttons does not exist on mobile view
    onMobile({ display: "contents" })
]);

export const moveToBottomOnMobile = style(onMobile({ order: 1 }));

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
