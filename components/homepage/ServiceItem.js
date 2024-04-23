import classes from "./ServiceItem.module.css";
import Link from "next/link";

export default function ServiceItem(props) {
  return (
    <>
      <div className={classes.item}>
        {props.icon && (
          <div
            className={classes.icon}
            style={{ background: props.background }}
          >
            {props.icon}
          </div>
        )}
        <h2 className={classes.title}>{props.title}</h2>
        <p className={classes.description}>{props.description}</p>
        
      </div>
    </>
  );
}
