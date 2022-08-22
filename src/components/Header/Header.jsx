import React from "react";
import "./Header.scss";
import { TypeAnimation } from "react-type-animation";

function Header() {
  return (
    <div className="header">
      <div className="heading">
        <a href="https://me.meghrathod.dev/">
          <span>&#60;</span>
          <span>&#160;</span>
          <div className="typewriter-header">
            <span>
              <TypeAnimation
                sequence={[
                  "Megh Rathod",
                  1000,
                  "A Programmer",
                  1000,
                  "A Developer",
                  1000,
                  "Megh Rathod",
                  1000,
                ]}
                //  Continuing previous Text
                wrapper="div"
                cursor={false}
              />
            </span>
          </div>

          <span>&#160;</span>
          <span>/&#62;</span>
        </a>
      </div>
      <div className="links">
        <a
          href="mailto:me@meghrathod.dev"
          className="glowButton"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fas fa-envelope" />
        </a>
        <a
          href="https://www.github.com/meghrathod/"
          className="glowButton"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-github" />
        </a>
        <a
          href="https://www.linkedin.com/in/meghrathod/"
          className="glowButton"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin" />
        </a>
        <a
          href="https://resume.meghrathod.dev/"
          className="glowButton"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-regular fa-address-card" />
        </a>
      </div>
    </div>
  );
}

export default Header;
