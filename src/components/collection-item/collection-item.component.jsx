import React from 'react';
import './collection-item.styles.scss';
import './custom-buttom.styles.scss'
import {addItemToCart} from "../../redux/cart/cart.actions";
import {useDispatch} from "react-redux";

const CollectionItem = ({imageUrl, name, price, id}) => {
  const dispatch = useDispatch();

  const addItem = (item) => dispatch(addItemToCart(item));
  const product = {
    name: name,
    imgUrl: imageUrl,
    price: price,
    id: id
  }
  return (
    <div className="collection-item">
      <img className="image" src={imageUrl} alt={name}/>
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button type="button" className="custom-button" onClick={() => {addItem(product)}}>
          ADD TO CART
      </button>
    </div>

  )
}

export default CollectionItem;
