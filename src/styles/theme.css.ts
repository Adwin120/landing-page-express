import { createTheme, fontFace, style } from "@vanilla-extract/css";
import LeagueSpartanSrc from "../assets/LeagueSpartan.woff2"

const LeagueSpartan = fontFace({
    fontStyle: "normal",
    src: `url(${LeagueSpartanSrc}) format('woff2')`,
    fontWeight: "100 900",
    fontDisplay: "swap",
});

export const [themeProviderClass, theme] = createTheme({
    color: {
        darkGray: "hsl(0, 0%, 63%)",
        veryDarkGray: "hsl(0, 0%, 27%)"
    },
    typography: {
        bodyFontSize: "12",
        fontFamily: `${LeagueSpartan}, system-ui`,
        weights: {
            medium: "500",
            semibold: "600",
            bold: "700"
        }
    }
});

export const rootStyles = style([
    themeProviderClass,
    {
        margin: 0,
        fontSize: theme.typography.bodyFontSize,
        fontFamily: theme.typography.fontFamily
    }
]);
