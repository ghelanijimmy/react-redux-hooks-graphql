import React from "react";
import menuItemStyles from "./menu-item.styles.module.scss";
import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  console.log(match);

  return (
    <div
      className={`${menuItemStyles.menuItem} ${menuItemStyles[size]}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
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
