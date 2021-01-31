import React from "react";
import { useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selectors";
import {
  CollectionContainer,
  CollectionItemsContainer,
  CollectionTitle
} from "./collection.styles";

const CollectionPage = () => {
  const match = useRouteMatch();
  const collection = useSelector(selectCollection(match.params.collectionId));

  const { title, items } = collection;

  return (
    <CollectionContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionItemsContainer>
    </CollectionContainer>
  );
};

export default CollectionPage;
