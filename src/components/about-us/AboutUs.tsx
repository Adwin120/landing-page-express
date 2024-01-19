import React from "react";
import imageDark from "./image-about-dark.jpg";
import imageLight from "./image-about-light.jpg";
import { responsiveStack } from "./AboutUs.css";

interface Props {}
export const AboutUs: React.FC<Props> = () => {
    return (
        <article className={responsiveStack}>
            <img src={imageDark}></img>
            <section>
                <h1>About our furniture</h1>
                <p>
                    Our multifunctional collection blends design and function to
                    suit your individual taste. Make each room unique, or pick a
                    cohesive theme that best express your interests and what
                    inspires you. Find the furniture pieces you need, from
                    traditional to contemporary styles or anything in between.
                    Product specialists are available to help you create your
                    dream space.
                </p>
            </section>
            <img src={imageLight}></img>
        </article>
    );
};
