import React from 'react';
import '../../assets/styles/header.styles.scss';
import '../../assets/styles/cart-icon.styles.scss';
import Logo from "../../assets/crown.svg";
import Bag from "../../assets/shopping-bag.svg";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header">
            <Link to="/" className="logo-container">
                <img src={Logo} alt=""/>
            </Link>
            <nav className="options">
                <Link to="/shop" className="option"><span>SHOP</span></Link>
                <Link to="/signIn" className="option"><span>SIGN IN</span></Link>
                <Link to="cart" className="cart-icon">
                    <img className='shopping-icon' src={Bag} alt=""/>
                    <span className='item-count'>0</span>
                </Link>
            </nav>
        </div>
    );
}
export default Header;
