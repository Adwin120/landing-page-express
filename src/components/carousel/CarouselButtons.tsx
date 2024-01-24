import React from "react";
import { buttonGroup, carouselButton } from "./CarouselButtons.css";
import ChevronLeft from "./images/icon-angle-left.svg";
import ChevronRight from "./images/icon-angle-right.svg";

interface Props {
    prevId: string,
    nextId: string
}
export const CarouselButtons: React.FC<Props> = ({prevId, nextId}) => (
    <div className={buttonGroup}>
        <a className={carouselButton} href={`#${prevId}`} >
            <ChevronLeft />
        </a>
        <a className={carouselButton} href={`#${nextId}`}>
            <ChevronRight />
        </a>
    </div>
);
