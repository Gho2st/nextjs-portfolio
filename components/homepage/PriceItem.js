"use client";

import { useState } from "react";
import classes from "./PriceItem.module.css";
import { FaMinus } from "react-icons/fa";

export default function PriceItem(props) {
  const [isTextVisible, SetIsTextVisible] = useState(false);

  function clickHandler() {
    SetIsTextVisible(!isTextVisible);
  }
  return (
    <div className={classes.container} onClick={clickHandler}>
      <div className={classes.innerContainer}>
        <h6 className={classes.header} >
          {props.header}
        </h6>
        <div className={classes.icon}>
          <FaMinus />
        </div>
      </div>
      {isTextVisible && <p className={classes.text}>{props.text}</p>}
    </div>
  );
}
