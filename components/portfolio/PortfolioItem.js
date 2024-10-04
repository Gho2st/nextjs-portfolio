'use client'
import classes from "./PortfolioItem.module.css";
import Image from "next/image";

export default function PortfolioItem(props) {
  return (
    <>
      
        <div className={classes.item} onClick={() => window.location.href = props.href}>
          <div className={classes.img}>
            <Image
              width={410}
              height={250}
              className={classes.image}
              src={props.source}
              alt={props.title}
              layout="responsive"
            />
          </div>
          <div className={classes.textContainer}>
            <h3 className={classes.header}>{props.title}</h3>
            <p className={classes.text}>{props.text}</p>
          </div>
        </div>
      
    </>
  );
}
