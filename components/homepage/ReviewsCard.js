import classes from "./ReviewsCard.module.css";
import { FaGoogle } from "react-icons/fa";
import Stars from "../ui/Stars";

export default function ReviewsCard(props) {
  return (
    <>
      <div className={classes.card}>
        <div className={classes.logoContainer}>
          <FaGoogle color="orange" />
          <div className={classes.star}>
            <Stars />
          </div>
        </div>
        <div className={classes.text}>
          {props.text}
        </div>
        <div className={classes.autor}>{props.autor}</div>
      </div>
    </>
  );
}
