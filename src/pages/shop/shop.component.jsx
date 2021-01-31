import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, useRouteMatch } from "react-router-dom";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  convertCollectionsSnapshotToMap,
  firestore
} from "../../firebase/firebase.utils";
import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { updateCollections } from "../../redux/shop/shop.actions";
import CollectionPage from "../category/collection.component";

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = () => {
  const match = useRouteMatch();

  const [isLoading, setIsLoading] = useState(true);

  /**
   * Dispatch function
   * @type {any}
   */
  const dispatch = useDispatch();

  useEffect(() => {
    const collectionRef = firestore.collection("collections");
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);

      dispatch(updateCollections(collectionsMap));
      setIsLoading(false);
    });

    return () => {};
  }, [dispatch]);

  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={props => (
          <CollectionsOverviewWithSpinner isLoading={isLoading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={props => (
          <CollectionPageWithSpinner isLoading={isLoading} {...props} />
        )}
      />
    </div>
  );
};

export default ShopPage;
