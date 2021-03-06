import React from 'react';
import CollectionItem from "../../components/collection-item/collection-item.component";
import SHOP_DATA from "../../data/shop.data";
import { useHistory } from "react-router-dom";
import "./shop.styles.scss";


console.log(SHOP_DATA)
const ShopPage = () => {
  const history = useHistory();
  return (
    <div className="shop-page">
      <div className="shop-column">
        {
          SHOP_DATA.map((category, i) => (
            <div key={i} className="shop-row">
              <h1 onClick={() => history.push(`/shop/${category.routeName}`)}>{category.title}</h1>
              <div className="shop-category-offers">
                {
                  category.items.slice(0, 4).map((item) => <CollectionItem key={item.id} {...item} />)
                }
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ShopPage
