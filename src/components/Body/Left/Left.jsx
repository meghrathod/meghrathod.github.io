import React from "react";
import "./Left.scss";
import memoji from "./memoji_new.webp";
import hand from "./hand.webp";
import Typing from "react-typing-animation";

function Memoji() {
    return (
        <div className="memoji-container">
            <img src={memoji} alt="megh's memoji" className="memoji"></img>
            <img src={hand} alt="megh's memoji" className="hand"></img>
        </div>
    );
}

function Left() {
    return (
        <div className="left-container">
            <Memoji />
            <div className="hello">
                <Typing hideCursor={true}>
                    <h1>Hello, World!</h1>
                </Typing>
            </div>
        </div>
    );
}

export default Left;
