import React, { useState } from 'react';

import SHOP_DATA from '../../const/shopItems';
import PreviewCollection from '../../components/PreviewCollection/PreviewCollection.component';

const Shop = () => {
  const [collections, setCollections] = useState(SHOP_DATA);

  return (
    <div className="shop-page">
      {collections.map(({ id, ...otherCollectionProps}) => {
        return <PreviewCollection key={id} {...otherCollectionProps}/>
      })}
    </div>
  )
}

export default Shop;
