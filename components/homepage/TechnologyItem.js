// TechnologyItem.js
import React from "react";
import classes from "./TechnologyItem.module.css";

const TechnologyItem = (props) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <div
      style={props.style}
      className={classes.itemContainer}
      onClick={handleClick}
    >
      {props.icon}
    </div>
  );
};

export default TechnologyItem;
