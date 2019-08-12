import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItemStyles.scss";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={`menu-item ${size}`}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={() => history.push(`${linkUrl}`)}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
