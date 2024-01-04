import classes from "./PortfolioItem.module.css";
import Image from "next/image";

export default function PortfolioItem(props) {
  return (
    <>
      <div className={classes.item}>
        <div className={classes.img}>
          <Image
            width={410}
            height={250}
            style={{ objectFit: "contain" }}
            src={props.source}
            alt={props.title}
          />
        </div>
        <div className={classes.textContainer}>
          <h5 className={classes.header}>{props.title}</h5>
          <p className={classes.text}>{props.text}</p>
        </div>
        
      </div>
    </>
  );
}
