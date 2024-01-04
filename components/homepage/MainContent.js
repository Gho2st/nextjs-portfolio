'use client'
import React from "react";
import classes from "./MainContent.module.css";
import { FaArrowRight } from "react-icons/fa6";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MainContent() {
  const { scrollY } = useScroll();
  const yScale = useTransform(scrollY, [0, 500], [1,1.3]);
  const yText = useTransform(scrollY, [0,100, 200], [0,150,250]);


  return (
    <motion.div className={classes.container} style={{ scale: yScale, y: yText }}>
      <h1 className={classes.header}>Digital Agency</h1>
      <div className={classes.textContainer}>
        <p className={classes.text}>
          Strony internetowe, aplikacje mobilne, UX UI design, loga, branding,
          social media marketing.
        </p>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.button}>
          Get Started <FaArrowRight />
        </button>
      </div>
    </motion.div>
  );
}

