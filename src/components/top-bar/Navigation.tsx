import React from "react";
import { stack } from "../../styles/recipes/stack.css";

const Navigation: React.FC = () => {
    return (
        <nav className={stack({ gap: "small" })}>
            <a href="#">home</a>
            <a href="#">shop</a>
            <a href="#">about</a>
            <a href="#">contact</a>
        </nav>
    );
};

export default Navigation;
