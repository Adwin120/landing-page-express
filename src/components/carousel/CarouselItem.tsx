import React, { ReactNode } from "react";

import {
    carouselCell,
    moveToBottomOnMobile,
    textAndButtonsContainer
} from "./CarouselItem.css";
import { CarouselButtons } from "./CarouselButtons";

interface Props {
    id: string;
    prevId: string;
    nextId: string;
    content: {
        coverImageSrc: string;
        textContent: ReactNode;
        shopLinkHref: string;
    };
}
export const CarouselItem: React.FC<Props> = ({
    id,
    nextId,
    prevId,
    content: { coverImageSrc, shopLinkHref, textContent }
}) => (
    <article className={carouselCell} id={id}>
        <img src={coverImageSrc}></img>
        <div className={textAndButtonsContainer}>
            <section className={moveToBottomOnMobile}>
                {textContent}
                <a href={shopLinkHref}>Shop now</a>
            </section>
            <CarouselButtons prevId={prevId} nextId={nextId} />
        </div>
    </article>
);
