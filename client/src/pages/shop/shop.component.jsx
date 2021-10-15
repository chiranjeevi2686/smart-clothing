import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({ match }) => {

   const isCollectionFetching = useSelector(selectIsCollectionFetching);
   const isCollectionsLoaded = useSelector(selectIsCollectionsLoaded);

   const dispatch = useDispatch();
   useEffect(() => {
      dispatch(fetchCollectionsStart());
   }, [dispatch])
   
   return (
      <div>
         <Route
            exact
            path={`${match.path}`}
            render={props => (
               <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} />
            )}
         />
         <Route
            path={`${match.path}/:collectionId`}
            render={props => (
               <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />
            )}
         />
      </div>
   )

}

export default ShopPage;