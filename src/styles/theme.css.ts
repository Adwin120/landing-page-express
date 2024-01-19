import { createTheme, fontFace, style } from "@vanilla-extract/css";

const LeagueSpartan = fontFace({
    src: "url(https://fonts.google.com/specimen/League+Spartan)",
});

export const [themeProviderClass, theme] = createTheme({
    color: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)",
    },
    typography: {
        bodyFontSize: "12",
        fontFamily: LeagueSpartan,
        weights: {
            normal: "500",
            bold: "600",
            bolder: "700",
        },
    },
});

export const rootStyles = style([
    themeProviderClass,
    {
        margin: 0,
        fontSize: theme.typography.bodyFontSize,
        fontFamily: theme.typography.fontFamily,
    },
]);
