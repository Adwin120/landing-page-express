import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { rootStyles } from "./styles/theme.css";
import { TopBar } from "./components/TopBar";
import { Carousel } from "./components/carousel/Carousel";

const Page = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <title>Document</title>
                <link rel="stylesheet" href="main.css" />
            </head>
            <body className={rootStyles}>
                <TopBar />
                <Carousel />
            </body>
        </html>
    );
};

export default "<!DOCTYPE html>" + renderToStaticMarkup(<Page />);
