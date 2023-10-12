import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { container } from "./page.css";

const Page = () => {
    return (
        <html lang="en">
            <head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Document</title>
                <link rel="stylesheet" href="main.css" />
            </head>
            <body>
                <p className={container}>test</p>
                <button>click me</button>
            </body>
        </html>
    );
};

export default "<!DOCTYPE html>" + renderToStaticMarkup(<Page />);
