import React from "react";
import menuItemStyles from "./menu-item.styles.module.scss";

const MenuItem = ({ title, imageUrl, size }) => {
  return (
    <div className={`${menuItemStyles.menuItem} ${menuItemStyles[size]}`}>
      <div
        className={menuItemStyles.backgroundImage}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={menuItemStyles.content}>
        <h1 className={menuItemStyles.title}>{title.toUpperCase()}</h1>
        <span className={menuItemStyles.subtitle}>SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
