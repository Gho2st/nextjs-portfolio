"use client";
import { useEffect, useState } from "react";
import classes from "./Footer.module.css";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentYearNow = new Date().getFullYear();
      if (currentYearNow !== currentYear) {
        setCurrentYear(currentYearNow);
      }
    }, 1000);
    return () => clearInterval(intervalId);
  }, [currentYear]);

  return (
    <>
      <footer>
        <div className={classes.container}>
          <p className={classes.text}>
            Domiweb - Made With love by
            <Link href="https://dominikjojczyk.pl/"> Dominik</Link> &copy;{" "}
            {currentYear}
          </p>
          <a
            className={classes.policy}
            href="/polityka_prywatnosci_domiweb.pdf"
            target="_blank"
          >
            Polityka Prywatności
          </a>
        </div>
      </footer>
    </>
  );
}
