import React from "react";
import "./Right.scss";
import python from "./python.svg";
import webdev from "./web_dev.svg";
import java from "./java.svg";
import { motion } from "framer-motion";

const fadeVariant1 = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: "easeInOut" } },
};

const fadeVariant2 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 0.5, duration: 1, ease: "easeInOut" },
    },
};
const fadeVariant3 = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { delay: 1, duration: 1, ease: "easeInOut" },
    },
};

function Right() {
    let w = window.screen.width;
    return (
        <div className="right-container">
            <div className="right-list">
                <h1>Who am I?</h1>

                <motion.div
                    className="right-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeVariant1}
                >
                    <img src={webdev} alt="webdev"></img>
                    <div>
                        <h1>Web Developer</h1>
                        <p>
                            Practising web development with some cool and
                            amazing technologies like NodeJS and React.
                            Currently working on small interesting projects.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="right-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={w > 1200 ? fadeVariant2 : fadeVariant1}
                >
                    <img src={java} alt="java"></img>
                    <div>
                        <h1>Object-Oriented Programmer in Java</h1>
                        <p>
                            Learnt objected-oriented programming in Java.
                            Currently learning and implementing a chat app using
                            concurrency and socket programming. Also working
                            with various frameworks like Spring.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    className="right-item"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={w > 1200 ? fadeVariant3 : fadeVariant1}
                >
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
                </motion.div>
            </div>
        </div>
    );
}

export default Right;
