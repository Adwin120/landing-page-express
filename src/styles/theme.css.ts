import { createTheme, fontFace, style } from "@vanilla-extract/css";

const LeagueSpartan = fontFace({
    fontStyle: "normal",
    src: "url(https://fonts.gstatic.com/s/leaguespartan/v11/kJEnBuEW6A0lliaV_m88ja5Twtx8BWhtkDVmjZvM_oTZDc1dJgs.woff2) format('woff2')",
    fontWeight: [400, 700],
    fontDisplay: "fallback",
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
            normal: "500",
            bold: "600",
            bolder: "700"
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
