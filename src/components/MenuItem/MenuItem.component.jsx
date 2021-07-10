import React from "react";
import { withRouter } from 'react-router-dom';

import "./menuItem.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {

  const handleClick = (e) => {
    history.push(`${match.url}${linkUrl}`);
  }

  return (
    <div className={`menu-item ${size}`} onClick={handleClick}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
