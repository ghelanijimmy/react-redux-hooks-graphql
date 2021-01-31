import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/collection-preview.component";
import CollectionsOverviewContainer from "./collections-overview-styles";

const CollectionsOverview = () => {
  const shopCollections = useSelector(selectCollectionsForPreview);
  return (
    <CollectionsOverviewContainer>
      {shopCollections.map(({ id, title, items, routeName }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
          routeName={routeName}
        />
      ))}
    </CollectionsOverviewContainer>
  );
};

export default CollectionsOverview;
