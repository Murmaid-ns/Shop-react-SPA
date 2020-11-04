import React from "react";
import Bag from "../../assets/shopping-bag.svg";
import './cart-icon.styles.scss';
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";

// import CartDropdown from "./cart-dropdown.component";

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <div>
      <div className="cart-icon">
        <img className='shopping-icon' src={Bag}/>
        <span className='item-count'>{cartItems.length}</span>
      </div>
      {/*<CartDropdown />*/}
    </div>
  )
}

export default Cart;
