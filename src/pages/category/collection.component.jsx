import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import collectionStyles from "./collection.styles.module.scss";

const CollectionPage = () => {
  const match = useRouteMatch();
  const collection = useSelector(selectCollection(match.params.collectionId));

  const { title, items } = collection;

  return (
    <div className={collectionStyles.collectionPage}>
      <h2 className={collectionStyles.title}>{title}</h2>
      <div className={collectionStyles.items}>
        {items.map(item => (
          <CollectionItem
            key={item.id}
            item={item}
            addClass={collectionStyles.collectionItem}
          />
        ))}
      </div>
    </div>
  );
};

export default CollectionPage;
