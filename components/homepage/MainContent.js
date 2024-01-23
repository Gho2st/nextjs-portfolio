"use client";
import React from "react";
import classes from "./MainContent.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import Animation from "../threejs/Animation";

export default function MainContent() {
  const { scrollY } = useScroll();
  const yScale = useTransform(scrollY, [0, 1300], [1, 1.5]);
  const yText = useTransform(
    scrollY,
    [0, 20, 50, 100, 200],
    [0, 20, 50, 100, 200]
  );

  return (
    <>
      <div>
        <Animation />
      </div>

      <motion.div
        className={classes.container}
        style={{ scale: yScale, y: yText }}
      >
        {/* <h1 className={classes.header}>DJJ Software</h1> */}
        <div className={classes.textContainer}>
          <p className={classes.text}>
            To miejsce, gdzie innowacje technologiczne łączą się z pasją do
            projektowania stron internetowych. Tworzymy unikalne, nowoczesne i
            responsywne strony, które przyciągają uwagę i pozostawiają trwałe
            wrażenie.
          </p>
        </div>
        <div className={classes.buttonContainer}>
          <button className={classes.button}>
            <Link href="/kontakt">
              Zacznijmy! <FaArrowRight />
            </Link>
          </button>
        </div>
      </motion.div>
    </>
  );
}
