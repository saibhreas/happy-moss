import React from "react";
import ShopMen from "./../../assets/shopMens.png";

import ShopWomen from "./../../assets/shopWomens.jpg";

//This is a functional component
const Directory = (props) => {
  return (
    <div className="Directory">
      <div className="wrap">
        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopWomen})`,
          }}
        >
          <a>Shop Womens</a>
        </div>

        <div
          className="item"
          style={{
            backgroundImage: `url(${ShopMen})`,
          }}
        >
          <a>Shop Mens</a>
        </div>
      </div>
    </div>
  );
};

export default Directory;
