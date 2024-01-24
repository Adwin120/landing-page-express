import React, { useId } from "react";
import { CarouselItem } from "./CarouselItem";
import { carousel } from "./carousel.css";

import image1 from "./images/desktop-image-hero-1.jpg";
import image2 from "./images/desktop-image-hero-2.jpg";
import image3 from "./images/desktop-image-hero-3.jpg";

export const Carousel: React.FC = () => {
    const item1 = useId();
    const item2 = useId();
    const item3 = useId();
    return (
        <div className={carousel}>
            <CarouselItem
                content={{
                    coverImageSrc: image1,
                    shopLinkHref: "#",
                    textContent: (
                        <>
                            <h1>Discover innovative ways to decorate</h1>
                            <p>
                                We provide unmatched quality, comfort, and style for
                                property owners across the country. Our experts
                                combine form and function in bringing your vision to
                                life. Create a room in your own style with our
                                collection and make your property a reflection of
                                you and what you love.
                            </p>
                        </>
                    )
                }}
                id={item1}
                nextId={item2}
                prevId={item2} />
            <CarouselItem
                id={item2}
                nextId={item1}
                prevId={item1}
                content={{
                    coverImageSrc: image2,
                    shopLinkHref: "#",
                    textContent: (
                        <>
                            <h1>We are available all across the globe</h1>
                            <p>
                                With stores all over the world, it's easy for you to
                                find furniture for your home or place of business.
                                Locally, we’re in most major cities throughout the
                                country. Find the branch nearest you using our store
                                locator. Any questions? Don't hesitate to contact us
                                today.
                            </p>
                        </>
                    )
                }} />
        </div>
    );
};
