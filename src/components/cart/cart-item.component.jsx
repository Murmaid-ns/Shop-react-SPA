import React from 'react';
import './cart-item.styles.scss'

const CartItem = ({
                    item: {
                      imgUrl,
                      name,
                      price,
                      quantity,
                    },
                  }) => {

  return (
    <div className="cart-item">
      <img
        className="cart-item__image"
        src={imgUrl}
        alt={name}
      />

      <div className="cart-item__details">
        <span className="cart-item__name">{name}</span>
        <span>
        {quantity}
          x $
          {price}
      </span>
      </div>
    </div>
  );
}
export default React.memo(CartItem);
