import React from "react";
import HamburgerIcon from "./hamburger.svg";
import Navigation from "./Navigation";
import { stack } from "../../styles/recipes/stack.css";
import { container, hamburger } from "./TopBar.css";

export const TopBar: React.FC = () => {
    return (
        <header className={container}>
            <HamburgerIcon className={hamburger} />
            <h1>room</h1>
            <Navigation />
        </header>
    );
};
