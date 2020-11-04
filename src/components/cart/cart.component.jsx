import React from "react";
import Bag from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import './cart-dropdown.styles.scss';
import './cart-item.styles.scss'
// import {useSelector} from "react-redux";
// import {selectCartItems, selectCartItemsQuantity} from "../../redux/cart/cart.selectors";
import {useState} from 'react'
import CartDropdown from "./cart-dropdown.component";

const Cart = () => {
        const cartItems = 0;
    const [isVisible, setOpenCart] = useState(false);
    return (
        <div>
            <div className="cart-icon" onClick={() => setOpenCart(!isVisible)}>
                <img className='shopping-icon' src={Bag}/>
                <span className='item-count'>{cartItems}</span>
            </div>
            {isVisible && <CartDropdown/>}
        </div>
    )
}

export default Cart;
