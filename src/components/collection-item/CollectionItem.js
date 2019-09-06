import React from "react";
import CustomButton from "../custom-button/CustomButton";

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
      <CustomButton inverted>Add to Cart</CustomButton>
    </div>
  );
}

export default CollectionItem;
