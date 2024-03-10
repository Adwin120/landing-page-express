import { globalStyle, style } from "@vanilla-extract/css";
import { stack } from "../../styles/recipes/stack.css";
import { onDesktop } from "../../styles/responsive.css";

export const container = style([
    stack({ gap: "large", align: "center" }),
    {
        position: "absolute",
        color: "white",
        paddingInline: "1em"
    }
]);

export const hamburger = style([onDesktop({ display: "none" })]);

export const nav = style([stack({ gap: "large" })]);

globalStyle(`${nav} > a`, {
    color: "white",
    textDecoration: "none",
    textUnderlineOffset: 8,
});

globalStyle(`${nav} > a:hover`, {
    textDecoration: "underline"
})
