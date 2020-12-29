import React, { useState } from "react";
import CollectionPreview from "../../components/preview-collection/collection-preview.component";
import SHOP_DATA from "./shop.data";

const ShopPage = () => {
  const [shopState] = useState([...SHOP_DATA]);

  return (
    <div className="shop-page">
      {shopState.map(({ id, title, items, routeName }) => (
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

export default ShopPage;
