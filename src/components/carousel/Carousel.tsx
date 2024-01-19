import React from "react";
import image from "./images/desktop-image-hero-1.jpg";
import ChevronLeft from "./images/icon-angle-left.svg";
import ChevronRight from "./images/icon-angle-right.svg";
import { carouselWithButtons, carouselButton } from "./carousel.css";
import { stack } from "../../styles/recipes/stack.css";

interface Props {}
export const Carousel: React.FC<Props> = () => (
    <div className={carouselWithButtons}>
        <img src={image}></img>
        <div className={stack()}>
            <button className={carouselButton}>
                <ChevronLeft/>
            </button>
            <button className={carouselButton}>
                <ChevronRight />
            </button>
        </div>
    </div>
);
