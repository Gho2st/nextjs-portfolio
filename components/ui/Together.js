import classes from "./Together.module.css";
import Link from "next/link";
import Socials from "./Socials";

export default function Together() {
  return (
    <>
      <div className={classes.container}>
        <p className={classes.text}>Popracujmy razem</p>
        <h2 className={classes.header}>Potrzebujesz ciekawy projekt?</h2>
        <div className={classes.buttonContainer}>
          <Link href="/kontakt">
            <button className={classes.button}>Porozmawiajmy</button>
          </Link>
        </div>
      </div>
      <Socials/>
    </>
  );
}
