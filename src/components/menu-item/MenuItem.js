import React from "react";
import "./MenuItemStyles.scss";

function MenuItem({ title, img, size }) {
  return (
    <div
      className={`menu-item ${size}`}
      style={{ backgroundImage: `url(${img})` }}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">Shop Now</span>
      </div>
    </div>
  );
}

export default MenuItem;
