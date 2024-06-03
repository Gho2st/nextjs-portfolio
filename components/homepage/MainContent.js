"use client";
import React from "react";
import classes from "./MainContent.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Animation from "../threejs/Animation";

export default function MainContent() {
  return (
    <>
      <div className={classes.animation}>
        <Animation />
      </div>

      <div className={classes.container}>
        <div className={classes.textContainer}>
          <h1 className={classes.text}>
            Domiweb to miejsce, gdzie uzyskasz stronę internetową z
            pozycjonowaniem w rankingu wyszukiwarki oraz z opiekę nad witryną.
            Nie musisz znać spraw technicznych, wszystko zostanie dla Ciebie
            przygotowane i wytłumaczone.
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
