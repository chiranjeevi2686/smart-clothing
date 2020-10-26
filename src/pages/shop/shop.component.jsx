import React from 'react';
import { Route } from 'react-router-dom';
import './shop.styles.scss';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../../pages/collection/collection.component';

const ShopPage = ({ match }) => {
   return ( <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />    </div>
   )
}

export default ShopPage;
//  <Route path={`${match.path}/:collectionId`} component={CollectionPage} />