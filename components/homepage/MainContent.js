"use client";
import React from "react";
import classes from "./MainContent.module.css";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import Animation from "../threejs/Animation";
import Image from "next/image";

export default function MainContent() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={classes.imageContainer}>
          <Image
            src="/atom.svg"
            width={100}
            height={100}
            layout="responsive"
            alt="Grafika przedstawiająca logo firmy Domiweb w kształcie niebieskiego atomu"
          />
        </div>

        <div className={classes.container}>
          <div className={classes.textContainer}>
            <h1>
              <span>Domiweb</span> to Twoje miejsce na profesjonalną stronę
              internetową z pełnym pozycjonowaniem SEO oraz opieką techniczną.
            </h1>
            <p>
              Z nami nie musisz martwić się o szczegóły techniczne – tworzymy,
              optymalizujemy i zajmujemy się stroną na każdym etapie. Strony
              internetowe, które przyciągają klientów, są teraz w Twoim zasięgu!
            </p>
          </div>
          <div className={classes.buttonContainer}>
            <button className={classes.button}>
              <Link href="/kontakt">Zacznijmy!</Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
