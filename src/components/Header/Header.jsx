import React from "react";
import "./Header.scss";
import Typing from "react-typing-animation";


function Header() {
    return (
        <div className="header">
            <div className="heading">
                <a href="https://me.meghrathod.tech/">
                    <span>&#60;</span>
                    <span>&#160;</span>
                    <div className="typewriter-header">
                        <span>
                            <Typing hideCursor={true}>
                                M . E . G . H / <span>Rathod</span>
                                <Typing.Delay ms={750} />
                                <Typing.Backspace count={22} />A /{" "}
                                <span>Programmer</span>
                                <Typing.Delay ms={500} />
                                <Typing.Backspace count={10} />
                                <span>Developer</span>
                                <Typing.Delay ms={500} />
                                <Typing.Backspace count={15} />M . E . G . H /{" "}
                                <span>Rathod</span>
                            </Typing>
                        </span>
                    </div>

                    <span>&#160;</span>
                    <span>&#62;</span>
                </a>
            </div>
            <div className="links">
                <a
                    href="mailto:me@meghrathod.dev"
                    className="glowButton"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fas fa-envelope"></i>
                </a>
                <a
                    href="https://www.github.com/meghrathod/"
                    className="glowButton"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/rathod-megh/"
                    className="glowButton"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fab fa-linkedin"></i>
                </a>
                <a
                    href="https://resume.meghrathod.dev/"
                    className="glowButton"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i class="fa-regular fa-address-card"></i>
                </a>
            </div>
        </div>
    );
}

export default Header;
