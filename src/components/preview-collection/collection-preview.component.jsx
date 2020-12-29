import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import previewStyles from "./collection-preview.styles.module.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <div className={previewStyles.collectionPreview}>
      <h1 className={previewStyles.title}>{title.toUpperCase()}</h1>
      <div className={previewStyles.preview}>
        {items
          .filter((item, index) => index < 4)
          .map(item => (
            <CollectionItem
              price={item.price}
              imageUrl={item.imageUrl}
              name={item.name}
              key={item.id}
            />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
