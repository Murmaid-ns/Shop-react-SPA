import React from "react";
import '../assets/styles/directory.styles.scss'
import '../assets/styles/menu-item.styles.scss'
import {SECTIONS_DATA} from "../data/sections.data";

const Menu = () => {
  return (
    <div className='directory-menu'>
      {SECTIONS_DATA.map((element) => {
        console.log(element)
        const {title, imageUrl, id, size} = element;
        return(
          <div className={`menu-item ${size}`} key={id}>
            <img src={imageUrl} alt="" className="background-image"/>
            <div className="content">
              <div className="title">{title.toUpperCase()}</div>
              <div className="subtitle">SHOP NOW</div>
            </div>
          </div>);
      })}
    </div>)

}

export default Menu;
