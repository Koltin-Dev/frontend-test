import React from 'react';

import styles from './styles/BrowseCategory.module.css';
import css1 from './assets/css1.png';
import tailwind from './assets/tailwind.png';
import vue from './assets/vue.png';
import react from './assets/react.png';


const BrowseCategory = () => {
  return (
    <>
      <section className={styles.category} >
        <h3>Browse The Category -</h3>
        <h3>See All Category > </h3>
      </section>
      <div className={styles.container} >
        <section className={styles.cardSection} >
          <img src={css1} alt="css" />
          <h5>CSS</h5>
        </section>
        <section className={styles.cardSection} >
          <h2>JS</h2>
          <h5>Javascript</h5>
        </section>
        <section className={styles.cardSectionBlack} >
          <img src={tailwind} alt="tailwind" />
          <h5>Tailwind</h5>
        </section>
        <section className={styles.cardSection} >
          <img src={vue} alt="vue" />
          <h5>Vue JS</h5>
        </section>
        <section className={styles.cardSection} >
          <img src={react} alt="react" />
          <h5>React JS</h5>
        </section>
      </div>
    </>
  )
}

export default BrowseCategory