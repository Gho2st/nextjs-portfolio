import classes from "./Together.module.css";
import Link from "next/link";
import Socials from "./Socials";

export default function Together() {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.text}>Let's work together</p>
        <h4 className={classes.header}>Potrzebujesz ciekawy projekt?</h4>
        <div className={classes.buttonContainer}>
          <Link href="/kontakt">
            <button className={classes.button}>Let's talk</button>
          </Link>
        </div>
      </div>
      <Socials/>
    </>
  );
}
