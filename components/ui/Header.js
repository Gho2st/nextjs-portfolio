"use client";
import Link from "next/link";
import classes from "./Header.module.css";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isBurgerVisible, setBurgerVisible] = useState(false);

  function clickHandler() {
    setBurgerVisible(!isBurgerVisible);
    console.log(isBurgerVisible);
  }

  function hideMenu() {
    setBurgerVisible(false);
  }

  return (
    <>
      <div className={classes.container}>
        <motion.div className={classes.logoContainer} whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.8 }}>
          <Link href="/" className={classes.logo}>
            <Image
              src={"/atom.svg"}
              width={40}
              height={40}
              alt="logo firmy Domiweb w ksztalcie atomu"
              className={classes.logoImage}
            ></Image>
            <span className={classes.logoText}>Domiweb</span>
          </Link>
        </motion.div>
        <div className={classes.burgerContainer}>
          <RxHamburgerMenu
            onClick={clickHandler}
            className={classes.burgerMenu}
          />
        </div>
        {!isBurgerVisible && (
          <nav className={classes.navbar}>
            <Link className={classes.link} href="/autor">o Autorze</Link>
            <Link href="/kontakt">
              <button className={classes.button}>Kontakt</button>
            </Link>
          </nav>
        )}
      </div>
      {isBurgerVisible && (
        <nav className={classes.navbarMobile}>
          <div>
            <Link onClick={hideMenu} href="/autor">
              o Autorze
            </Link>
            <Link href="/kontakt">
              <button onClick={hideMenu} className={classes.button}>
                Kontakt
              </button>
            </Link>
          </div>
        </nav>
      )}
    </>
  );
}
