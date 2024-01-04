import classes from "./ServiceItem.module.css";
import { IoCodeSlash } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa6";
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
        <h3 className={classes.title}>{props.title}</h3>
        <p className={classes.description}>{props.description}</p>
        <div className={classes.buttonContainer}>
          <Link href='/' className={classes.button}>
            Read more <FaArrowRight />
          </Link>
        </div>
      </div>
    </>
  );
}
