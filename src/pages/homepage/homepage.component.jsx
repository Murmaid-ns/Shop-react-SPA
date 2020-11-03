import React from "react";
import './directory.styles.scss'
import './menu-item.styles.scss'
import {SECTIONS_DATA} from "../../data/sections.data";
import { useHistory } from 'react-router-dom';

const Homepage = () => {
    const history = useHistory();

    return (
        <section className='directory-menu'>
            {SECTIONS_DATA.map((element) => {
                const {title, imageUrl, id, size,linkUrl} = element;
                console.log(imageUrl);
                return (
                  <div
                    role="button"
                    tabIndex={id}
                    onClick={() => history.push(`/shop/${linkUrl}`)}
                    className={`menu-item ${size || ''}`}>
                      <div
                        className="background-image"
                        style={{ backgroundImage: `url(${imageUrl})` }}
                      />
                      <div className="content">
                          <span className="title">{ title.toUpperCase() }</span>
                          <span className="subtitle">SHOP NOW</span>
                      </div>
                  </div>);
            })}
        </section>)

}

export default Homepage;
