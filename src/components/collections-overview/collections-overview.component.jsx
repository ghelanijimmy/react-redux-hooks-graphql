import React from "react";
import { useSelector } from "react-redux";
import { selectCollectionsForPreview } from "../../redux/shop/shop.selectors";
import CollectionPreview from "../preview-collection/collection-preview.component";
import collectionsOverviewStyles from "./collections-overview.styles.module.scss";

const CollectionsOverview = () => {
  const shopCollections = useSelector(selectCollectionsForPreview);
  return (
    <div className={collectionsOverviewStyles.collectionsOverview}>
      {shopCollections.map(({ id, title, items, routeName }) => (
        <CollectionPreview
          key={id}
          title={title}
          items={items}
          routeName={routeName}
        />
      ))}
    </div>
  );
};

export default CollectionsOverview;
