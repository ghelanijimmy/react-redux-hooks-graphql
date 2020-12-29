import React from "react";
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
    </div>
  );
};
CollectionItem.propTypes = {};

export default CollectionItem;
