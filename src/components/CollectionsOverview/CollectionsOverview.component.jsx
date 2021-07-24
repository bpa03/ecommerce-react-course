import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectionsForPreview } from '../../redux/shop/shop.selectors';
import PreviewCollection from "../PreviewCollection/PreviewCollection.component";

import "./collectionsOverview.styles.scss";

const CollectionsOverview = ({ collections }) => {
  console.log(collections);
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <PreviewCollection key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  collections: selectionsForPreview
});

export default connect(mapStateToProps)(CollectionsOverview);
