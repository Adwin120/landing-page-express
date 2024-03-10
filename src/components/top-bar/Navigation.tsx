import React from "react";
import { nav } from "./TopBar.css";

const Navigation: React.FC = () => {
    return (
        <nav className={nav}>
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
        </nav>
    );
};

export default Navigation;
