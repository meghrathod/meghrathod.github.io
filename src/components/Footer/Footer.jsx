import "./Footer.scss";
import React from "react";

// Footer component
const Footer = () => {
    return (
        <div className="footer">
            &copy; {new Date().getFullYear()} Megh Rathod
        </div>
    );
};

export default Footer;
