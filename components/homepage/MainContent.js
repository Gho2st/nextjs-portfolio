"use client";
import React from "react";
import classes from "./MainContent.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Animation from "../threejs/Animation";


export default function MainContent() {
  return (
    <>
      <div>
        <Animation />
      </div>

      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1 className={classes.text}>
            Djj Software to miejsce, gdzie jako programista łączę swoją pasję do
            technologii z umiejętnościami projektowania stron internetowych.
          </h1>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button}>
            <Link href="/kontakt">
              Zacznijmy! <FaArrowRight />
            </Link>
          </button>
        </div>
      </div>
    </>
  );
}
