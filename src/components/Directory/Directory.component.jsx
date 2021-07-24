import React from "react";
import { connect } from 'react-redux';
import { createStructuredSelector } from "reselect";

import MenuItem from "../MenuItem/MenuItem.component";
import "./directory.styles.scss";

import { selectDirectorySections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => {
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);
