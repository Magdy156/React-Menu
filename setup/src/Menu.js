import React from "react";

const Menu = ({ menuItems }) => {
  return (
    <div className="section-centre">
      {menuItems.map((item) => {
        return (
          <article key={item.id} className="menu-item">
            <img src={item.img} alt={item.title} className="photo"></img>
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">{item.price}</h4>
              </header>
              <p>{item.desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
