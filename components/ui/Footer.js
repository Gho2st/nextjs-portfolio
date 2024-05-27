'use client'
import { useEffect, useState } from "react";
import classes from "./Footer.module.css";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentYearNow = new Date().getFullYear();
      if (currentYearNow !== currentYear) {
        setCurrentYear(currentYearNow)
      }
    },1000);
    return () => clearInterval(intervalId)
  }, [currentYear]);

  return (
    <>
      <div className={classes.container}>
        <p className={classes.text}> Domiweb by Dominik &copy; {currentYear}</p>
      </div>
    </>
  );
}
