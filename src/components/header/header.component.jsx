import React from 'react';
import './header.styles.scss';
import Logo from "../../assets/crown.svg";
import {Link} from "react-router-dom";
import Cart from "../cart/cart.component";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <img src={Logo} alt=""/>
            </Link>
            <nav className="options">
                <Link to="/shop" className="option"><span>SHOP</span></Link>
                <Link to="/signIn" className="option"><span>SIGN IN</span></Link>
                <Cart/>
            </nav>
        </div>
    );
}
export default Header;
