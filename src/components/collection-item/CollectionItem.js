import React from "react";

import "./CollectionItemStyles.scss";

function CollectionItem({ id, name, price, imageUrl }) {
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">
          <strong>${price}</strong>
        </span>
      </div>
    </div>
  );
}

export default CollectionItem;
