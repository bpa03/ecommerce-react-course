import React  from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import CollectionsOverview from '../../components/CollectionsOverview/CollectionsOverview.component';
import Collection from '../collection/Collection.component';

const Shop = () => {
  const match = useRouteMatch();
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
  )
}

export default Shop;
