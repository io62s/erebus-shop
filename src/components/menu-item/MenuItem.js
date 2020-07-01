import React from "react";
import { withRouter } from "react-router-dom";
import "./MenuItemStyles.scss";

function MenuItem({ title, imageUrl, size, linkUrl, history, match }) {
  return (
    <div
      className={`menu-item ${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className="content">
        <h1 className="title">{title}</h1>
<<<<<<< HEAD
=======
        
>>>>>>> 87bb600a1e2fbd9209bab7130043d745449bfbf0
      </div>
    </div>
  );
}

export default withRouter(MenuItem);
