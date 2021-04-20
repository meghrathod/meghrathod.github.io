import React from 'react'
import './Footer.scss'

const Footer = () => {
    return (
        <div className="footer">
                &copy; {new Date().getFullYear()} Megh Rathod
        </div>
    );
}

export default Footer;