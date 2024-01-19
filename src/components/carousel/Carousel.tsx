import React from "react";
import image from "./images/desktop-image-hero-1.jpg";
import ChevronLeft from "./images/icon-angle-left.svg";
import ChevronRight from "./images/icon-angle-right.svg";
import { moveToBottomOnMobile, carousel, carouselButton, textAndButtonsContainer, buttonGroup } from "./carousel.css";

export const Carousel: React.FC = () => (
    <article className={carousel}>
        <img src={image}></img>
        <div className={textAndButtonsContainer}>
            <section className={moveToBottomOnMobile}>
                <h1>Discover innovative ways to decorate</h1>
                <p>
                    We provide unmatched quality, comfort, and style for
                    property owners across the country. Our experts combine form
                    and function in bringing your vision to life. Create a room
                    in your own style with our collection and make your property
                    a reflection of you and what you love.
                </p>
                <a>Shop now</a>
            </section>
            <div className={buttonGroup}>
                <button className={carouselButton}>
                    <ChevronLeft />
                </button>
                <button className={carouselButton}>
                    <ChevronRight />
                </button>
            </div>
        </div>
    </article>
);
