import React from "react";
import styles from "./Category.module.css";
import css from "../assets/css.png";
import js from "../assets/js.png";
import tailwind from "../assets/tailwind.png";
import vue from "../assets/vue.png";
import react from "../assets/react.png";

export const Category = () => {
  return (
    <section className={styles.categoryContainer}>
      <div className={styles.titleContainer}>
        <h2> Browse The Category — </h2>
        <h2> See All Category › </h2>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardStyle}>
          <img className={styles.imgStyle} src={css} alt="category" />
          <p className={styles.categoryStyle}>CSS</p>
        </div>
        <div className={styles.cardStyle}>
          <img className={styles.imgStyle} src={js} alt="category" />
          <p className={styles.categoryStyle}>Javascript</p>
        </div>
        <div className={styles.cardStyle}>
          <img className={styles.imgStyle} src={tailwind} alt="category" />
          <p className={styles.categoryStyle}>Tailwind</p>
        </div>
        <div className={styles.cardStyle}>
          <img className={styles.imgStyle} src={vue} alt="category" />
          <p className={styles.categoryStyle}>Vue JS</p>
        </div>
        <div className={styles.cardStyle}>
          <img className={styles.imgStyle} src={react} alt="category" />
          <p className={styles.categoryStyle}>React Js</p>
        </div>
      </div>
    </section>
  );
};
