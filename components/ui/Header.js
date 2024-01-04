import Link from "next/link";
import classes from "./Header.module.css";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link href="/" className={classes.logo}>
            <Image src={"/atom.svg"} width={40} height={40} alt="logo firmy DJJ software w ksztalcie atomu" className={classes.logoImage}></Image>
            <span className={classes.logoText}>DJJ Software</span>
          </Link>
        </div>
        <nav className={classes.navbar}>
          <Link href="/autor">o Autorze</Link>
          <Link href="/kontakt">
            <button className={classes.button}>Let's talk</button>
          </Link>
        </nav>
      </div>
    </>
  );
}
