import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { rootStyles } from "./styles/theme.css";
import { TopBar } from "./components/top-bar/TopBar";
import { Carousel } from "./components/carousel/Carousel";
import { AboutUs } from "./components/about-us/AboutUs";
import favicon from "./assets/favicon-32x32.png"

const Page = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Room</title>
                <link rel="icon" href={favicon} />
                <link rel="stylesheet" href="main.css" />
            </head>
            <body className={rootStyles}>
                <Carousel>
                    <TopBar />
                </Carousel>
                <AboutUs />
            </body>
        </html>
    );
};

export default "<!DOCTYPE html>" + renderToStaticMarkup(<Page />);
