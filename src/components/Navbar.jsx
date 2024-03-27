import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logoImage from "../Images/Manasarovar.png";
import profileimages from "../Images/943e7e0891056899a8f9d2b286be6250.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="logo">
                    <Link to="/">
                        <img src={logoImage} alt="" />
                    </Link>
                </div>
                <div className="nav-links">
                    <ul>
                        <li><Link to="/categories">Categories |</Link></li>
                        <li><Link to="/resorts">Resorts |</Link></li>
                        <li><Link to="/gurus">Gurus |</Link></li>
                        <li><Link to="/groups">Groups |</Link></li>
                    </ul>
                </div>
            </div>
            <div className="profile">
                    <img src={profileimages} alt="" />
                </div>
        </nav>
    );
}

export default Navbar;
