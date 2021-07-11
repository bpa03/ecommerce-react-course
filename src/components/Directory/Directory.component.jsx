import React, { useState } from "react";

import MenuItem from "../MenuItem/MenuItem.component";
import SECTIONS from '../../const/sections';
import "./directory.styles.scss";

const Directory = () => {
  const [sections, setSections] = useState(SECTIONS);
  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Directory;
