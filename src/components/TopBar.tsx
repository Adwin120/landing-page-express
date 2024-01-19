import React from "react";
import HamburgerIcon from "./hamburger.svg";
import Navigation from "./Navigation";
import { stack } from "../styles/recipes/stack.css";

export const TopBar: React.FC = () => {
    return (
        <header className={stack({ gap: "small", align: "center" })}>
            <HamburgerIcon color="#AAA" />
            <h1>room</h1>
            <Navigation />
        </header>
    );
};
