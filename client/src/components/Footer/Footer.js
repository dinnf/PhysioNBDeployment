import React from "react";
import {Link} from "react-router-dom";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="Footer">
            <h2 className="FooterTitle">PhysioNB</h2>
            <div className="Router">
                <span className="Routes">About</span>
                <a href="https://www.linkedin.com/in/denis-finn-44768214b/" target="_blank"><span className="Routes">Contact</span></a>
                <Link to={`/mydetails`}> <span className="Routes details">My Details</span></Link>
            </div>
        </div>
    );
};

export default Footer;
