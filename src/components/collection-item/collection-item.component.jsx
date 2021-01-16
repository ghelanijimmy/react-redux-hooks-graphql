import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import itemStyles from "./collection-item.styles.module.scss";

const CollectionItem = ({ id, name, price, imageUrl }) => {
  return (
    <div className={itemStyles.collectionItem}>
      <div
        className={itemStyles.image}
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
      <div className={itemStyles.collectionFooter}>
        <span className={itemStyles.name}>{name}</span>
        <span className={itemStyles.price}>{price}</span>
      </div>

      <CustomButton addClass={itemStyles.customButton} inverted>
        {" "}
        Add to cart{" "}
      </CustomButton>
    </div>
  );
};
CollectionItem.propTypes = {};

export default CollectionItem;
