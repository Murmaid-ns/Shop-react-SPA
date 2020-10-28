import React from "react";
import '../assets/styles/directory.styles.scss'
import '../assets/styles/menu-item.styles.scss'
import {SECTIONS_DATA} from "../data/sections.data";

const Menu = () => {
    return (
        <section className='directory-menu'>
            {SECTIONS_DATA.map((element) => {
                const {title, imageUrl, id, size} = element;
                console.log(imageUrl);
                return (
                    <div className={`menu-item ${size || ''}`} key={id}>
                        <div
                            className="background-image"
                            style={{backgroundImage: `url(${imageUrl})`}}
                        />
                        <div className="content">
                            <span className="title">{title.toUpperCase()}</span>
                            <span className="subtitle">SHOP NOW</span>
                        </div>
                    </div>);
            })}
        </section>)

}

export default Menu;
