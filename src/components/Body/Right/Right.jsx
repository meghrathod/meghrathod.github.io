import "./Right.scss";
import cloud from "./cloud-computing.svg";
import java from "./java.svg";
import { motion } from "framer-motion/dist/framer-motion";
import React from "react";
import webdev from "./web_dev.svg";

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

// Right side Body component
function Right() {
  const w = window.screen.width;
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
          <img src={cloud} alt="cloud" />
          <div>
            <h1>Cloud Computing and DevOps Enthusiast</h1>
            <p>
              Currently exploring Cloud Computing with the Google Cloud
              Platform. Along with that I'm also exploring DevOps technologies
              like Docker, Kubernetes, etc.
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
          <img src={java} alt="java" />
          <div>
            <h1>Object-Oriented Programmer in Java</h1>
            <p>
              Learnt objected-oriented programming in Java. Currently learning
              and implementing a chat app using concurrency and socket
              programming. Also working with various frameworks like Spring.
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
          <img src={webdev} alt="webdev" />
          <div>
            <h1>Web Developer</h1>
            <p>
              Practising web development with some cool and amazing technologies
              like NodeJS and React. Currently working on small interesting
              projects.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default Right;
