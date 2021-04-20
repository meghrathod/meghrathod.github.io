import React from "react";
import "./Left.scss";
import memoji from "./memoji_new.png";
import hand from "./hand.png";
import TypeIt from "typeit-react";

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
                {" "}
                <TypeIt
                    getBeforeInit={(instance) => {
                        instance.type("<h1>Hello World!</h1>");
                        return instance;
                    }}
                />
                ;
            </div>
        </div>
    );
}

export default Left;
