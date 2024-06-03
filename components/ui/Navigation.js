"use client";
import Link from "next/link";
import classes from "./Navigation.module.css";
import { useRef, useEffect } from "react";
import Image from "next/image";

export default function Navigation() {
  const checkboxRef = useRef(null);

  useEffect(() => {
    const handleLinkClick = () => {
      if (checkboxRef.current) {
        checkboxRef.current.checked = false;
      }
    };

    const links = document.querySelectorAll(`.${classes.navigation__link}`);
    links.forEach((link) => {
      link.addEventListener("click", handleLinkClick);
    });

    // Cleanup event listeners on unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleLinkClick);
      });
    };
  }, []);
  return (
    <div className={classes.navigation}>
      <div className={classes.logo}>
        <Link href="/" className={classes.logo__link}>
          <Image
            src={"/atom.svg"}
            width={40}
            height={40}
            alt="logo firmy Domiweb w ksztalcie atomu"
            className={classes.logoImage}
          ></Image>
          <span className={classes.logoText}>Domiweb</span>
        </Link>
      </div>
      <input
        ref={checkboxRef}
        type="checkbox"
        className={classes.navigation__checkbox}
        id="navi-toggle"
      ></input>
      <label for="navi-toggle" className={classes.navigation__button}>
        <span className={classes.navigation__icon}>&nbsp;</span>
      </label>
      <div className={classes.navigation__background}>&nbsp;</div>
      <nav className={classes.navigation__nav}>
        <ul className={classes.navigation__list}>
          <li className={classes.navigation__item}>
            <Link className={classes.navigation__link} href={"/"}>
              <span>01</span>
              Strona Główna
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link className={classes.navigation__link} href={"/autor"}>
              <span>02</span>
              Autor
            </Link>
          </li>
          <li className={classes.navigation__item}>
            <Link className={classes.navigation__link} href={"/kontakt"}>
              <span>03</span>
              Kontakt
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
