import React from "react";
import './Right.scss'
import python from './python.svg'
import webdev from './web_dev.svg'
import c from './c.svg'

function Right() {
    return (
        <div className="right-container">
            <div className="right-list">
                <h1>Who am I?</h1>

                <div className="right-item">
                    <img src={webdev} alt="webdev"></img>
                    <div>
                        <h1>Web Developer</h1>
                        <p>
                            Finished learning basics of Web development along
                            with some cool and amazing technologies like NodeJS
                            and React. Currently working on small yet cool and
                            interesting projects.
                        </p>
                    </div>
                </div>
                <div className="right-item">
                    <img src={c} alt="c"></img>
                    <div>
                        <h1>C/C++ Programmer</h1>
                        <p>
                            Well versed with Data Structure in C and Object
                            Oriented programming in C++. I find this quite
                            interesting.
                        </p>
                    </div>
                </div>
                <div className="right-item">
                    <img src={python} alt="webdev"></img>
                    <div>
                        <h1>Machine Learning and Python Enthusiast</h1>
                        <p>
                            Have completed an extensive course in Python and
                            just begun learning Machine Learning. Machine
                            Learning is very intriguing and curious to see how
                            the journey goes.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Right;
