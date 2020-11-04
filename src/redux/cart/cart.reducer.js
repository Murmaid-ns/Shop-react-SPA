import cartActionTypes from "./cart.types";
import {addItemToCart} from "./cart.actions";

const INITIAL_STATE = {
    cartItems: {},
    isOpened: false
};
const addToCart = (cartItems, item) => {
    const cartItemInCart = cartItems[item.id];

    if (cartItemInCart) {
        return {
            ...cartItems,
            [item.id]: {
                ...item,
                quantity: cartItemInCart ? cartItemInCart.quantity + 1 : 1,
            }
        }
    }
}

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case cartActionTypes.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: {
                    ...state.cartItems,
                    [action.payload.id]: {
                        ...action.payload
                    }
                }
            };

        case "TOGGLE_CART":
            return {
                ...state,
                isOpened: !state.isOpened
            };

        default:
            return state;
    }
};

export default cartReducer;
