import "./Left.scss";
import hand from "./hand.webp";
import memoji from "./memoji_new.webp";
import { TypeAnimation } from "react-type-animation";
import React from "react";


// Memoji component
function Memoji() {
    return (
        <div className="memoji-container">
            <img src={memoji} alt="megh's memoji" className="memoji" />
            <img src={hand} alt="megh's memoji" className="hand" />
        </div>
    );
}

// Left component
function Left() {
    return (
        <div className="left-container">
            <Memoji />
            <div className="hello">
                <TypeAnimation sequence={["Hello World"]} wrapper="h1" />
            </div>
        </div>
    );
}

export default Left;
