import React from "react";
import './Footer.css';
import facebook from './facebook.png';
import twiter from './twiter.jpg'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footerbox">
                <div className="links">
                    <h3>Company</h3>
                    <p>About Us</p>
                    <p>Careers</p>
                </div>

                <div className="links">
                    <h3>View website in</h3>
                    <p>English</p>
                </div>

                <div className="links">
                    <h3>Need Help?</h3>
                    <p>Visit Help Centre</p>
                    <p>Share Feedback</p>
                </div>

                <div className="links">
                    <h3>Connect With Us</h3>
                    <img src={facebook} />
                    <img src={twiter} />
                </div>
            </div>
            <div className="endtext" >
            <p>&copy; 2023 STAR. All Rights Reserved.</p>
            <p>Terms Of Use  Privacy Policy  FAQ</p>
            </div>
        </div>
    )
}

export default Footer;