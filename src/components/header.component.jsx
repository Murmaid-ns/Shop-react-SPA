import React from 'react';
import '../assets/styles/header.styles.scss';
import '../assets/styles/cart-icon.styles.scss';
import Logo from "../assets/crown.svg";
import Bag from "../assets/shopping-bag.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img src={Logo} alt=""/>
      </div>
      <div className="options">
        <div className="option"><span>SHOP</span></div>
        <div className="option"><span>CONTACT</span></div>
        <div className="option"><span>SIGN IN</span></div>
        <div className="cart-icon">
          <img className='shopping-icon' src={Bag} alt=""/>
          <span className='item-count'>0</span>
        </div>
      </div>
    </div>
  );
}
export default Header;
