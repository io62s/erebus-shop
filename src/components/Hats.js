import React from "react";
import ShopData from "../pages/shop/shop-data";
import CollectionItem from "./collection-item/CollectionItem";
import "./HatsStyles.scss";

function Hats() {
  return (
    <div>
      <div>
        <h1>hats</h1>
      </div>
      <div className="hats-wrapp">
        {ShopData[0].items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Hats;
