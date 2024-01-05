"use client";
import Link from "next/link";
import classes from "./Header.module.css";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

export default function Header() {
  const [isBurgerVisible, setBurgerVisible] = useState(false);

  function clickHandler() {
    setBurgerVisible(!isBurgerVisible);
    console.log(isBurgerVisible);
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <Link href="/" className={classes.logo}>
            <Image
              src={"/atom.svg"}
              width={40}
              height={40}
              alt="logo firmy DJJ software w ksztalcie atomu"
              className={classes.logoImage}
            ></Image>
            <span className={classes.logoText}>DJJ Software</span>
          </Link>
        </div>
        <div className={classes.burgerContainer}>
          <RxHamburgerMenu
            onClick={clickHandler}
            className={classes.burgerMenu}
          />
        </div>
        {!isBurgerVisible && (
          <nav className={classes.navbar}>
            <Link href="/autor">o Autorze</Link>
            <Link href="/kontakt">
              <button className={classes.button}>Porozmawiajmy</button>
            </Link>
          </nav>
        )}
      </div>
      {isBurgerVisible && (
        <nav className={classes.navbarMobile}>
          <div>
            <Link href="/autor">o Autorze</Link>
            <Link href="/kontakt">
              <button className={classes.button}>Porozmawiajmy</button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
