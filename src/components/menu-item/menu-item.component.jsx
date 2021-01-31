import React from "react";
import {
  ContentContainer,
  MenuBackgroundImage,
  MenuItemContainer,
  MenuSubTitle,
  MenuTitle
} from "./menu-item.styles";
import { useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
  const history = useHistory();
  const match = useRouteMatch();

  return (
    <MenuItemContainer
      size={size}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <MenuBackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <ContentContainer>
        <MenuTitle>{title.toUpperCase()}</MenuTitle>
        <MenuSubTitle>SHOP NOW</MenuSubTitle>
      </ContentContainer>
    </MenuItemContainer>
  );
};

export default MenuItem;
