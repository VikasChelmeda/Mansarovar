import React from "react";
import { GrCart } from "react-icons/gr";
import "./Header.css";
const Header = () => {
    const handleLogin = () => {
        console.log("Login Clicked");
    }

    const handleSignup = () => {
        console.log("Signup Clicked");
    }
    return (
        <header>
            <>
                <div className="logo">logo</div>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/shop"> <GrCart style={{ verticalAlign: 'middle' }}/>Shop </a></li>
                        <button onClick={handleLogin}>Login</button>
                        <button onclick={handleSignup}>Signup</button>
                    </ul>
                </nav>
            </>
        </header>
    );
}
export default Header;