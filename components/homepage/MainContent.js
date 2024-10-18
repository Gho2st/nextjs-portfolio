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
      <section>
        <div className={classes.wrapper}>
          <div className={classes.imageContainer}>
            <Image
              src="/atom.svg"
              width={100}
              height={100}
              layout="responsive"
              alt="Grafika przedstawiająca logo firmy Domiweb w formie niebieskiego atomu, symbolizująca nowoczesność, technologię i zaawansowane rozwiązania w tworzeniu stron internetowych."
            />
          </div>

          <div className={classes.container}>
            <div className={classes.textContainer}>
              <h1>
                Tworzenie Profesjonalnych Stron Internetowych z Pozycjonowaniem
                SEO – <span>Domiweb</span>
              </h1>
              <p>
                Z Domiweb nie musisz martwić się o techniczne szczegóły.
                Tworzymy i optymalizujemy strony internetowe na każdym etapie,
                dbając o to, by Twoja witryna przyciągała klientów i była
                widoczna w wyszukiwarkach. Nasze strony internetowe są
                dopasowane do Twoich potrzeb i mają jeden cel: przynieść sukces
                Twojej firmie online.
              </p>
            </div>
            <div className={classes.buttonContainer}>
              <button className={classes.button}>
                <Link href="/kontakt">Zacznij już teraz!</Link>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
