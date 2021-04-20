import React from "react";
import "./Header.scss";
import TypeIt from "typeit-react";


function Header() {
    return (
        <div className="header">
            <div className="heading">
                <a href="https://me.meghrathod.tech/">
                    <span>&#60;</span>
                    <span>&#160;</span>

                    <TypeIt
                        getBeforeInit={(instance) => {
                            instance
                                .type("M . E . G . H / <span>Rathod</span>")
                                .pause(750)
                                .delete()
                                .pause(500)
                                .type("A / <span>Programmer</span>")
                                .pause(750)
                                .delete(10)
                                .pause(500)
                                .type("<span>Developer</span>")
                                .pause(750)
                                .delete()
                                .pause(500)
                                .type("M . E . G . H / <span>Rathod</span>")
                            // Remember to return it!
                            return instance;
                        }}
                    />
                    <span>&#160;</span>
                    <span>&#62;</span>
                </a>
            </div>
            <div className="links">
                <a
                    href="mailto:me@meghrathod.tech"
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
            </div>
        </div>
    );
}

export default Header;
