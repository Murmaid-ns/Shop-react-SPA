export const selectCartItems = (state) => state.cart.cartItems;

export const selectCartItemsQuantity = (state) => {
    const cartItems = Object.values(state.cart.cartItems);
    cartItems.reduce((total, item) => {
        return total + item.quantity;
    })
}

