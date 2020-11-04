import React from "react";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import './cart-item.styles.scss'
import './cart-dropdown.styles.scss'

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    console.log(cartItems);
    if (cartItems !== null) {
        return (
            <div className="cart-dropdown">
                <div className='cart-items'>
                    {cartItems.map(({imgUrl, name, price}) => {
                        return (
                            <div className='cart-item'>
                                <img className='img' src={imgUrl} alt={name}/>
                                <div className='item-details'>
                                  <span>{name}</span>
                                  <span>${price}</span>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <Link to='/checkout' className='custom-button'>GO TO CHECKOUT</Link>
            </div>
        )

    }

}
export default CartDropdown;