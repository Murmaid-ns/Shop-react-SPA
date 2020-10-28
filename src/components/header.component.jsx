import React from 'react';
import '../assets/styles/header.styles.scss';
import '../assets/styles/cart-icon.styles.scss';
import Logo from "../assets/crown.svg";
import Bag from "../assets/shopping-bag.svg";

const Header = () => {
    return (
        <div className="header">
            <a href="#" className="logo-container">
                <img src={Logo} alt=""/>
            </a>
            <nav className="options">
                <a href="#" className="option"><span>SHOP</span></a>
                <a href="#" className="option"><span>CONTACT</span></a>
                <a href="#" className="option"><span>SIGN IN</span></a>
                <a href="#" className="cart-icon">
                    <img className='shopping-icon' src={Bag} alt=""/>
                    <span className='item-count'>0</span>
                </a>
            </nav>
        </div>
    );
}
export default Header;
