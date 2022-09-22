import React from 'react';

import styles from './styles/LearnCoding.module.css';
import persona from './assets/persona.png';
import narrow from './assets/narrow.png';

const Suscribe = () => {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.subscribe}>
          <h2>Hi, I'm ROCIO</h2>
          <h3>Front End Dev</h3>
          <p>On this blog I share tips and tricks, frameworks, projects, tutorials, etc. <br />Make sure you subscribe to get the latest updates</p>
          <section className={styles.subscribeSearch}>
            <input type="search" id="form1" class="form-control" placeholder='Enter your email here...' />
            <button type="button" class="btn btn-dark">Subscribe</button>
          </section>
        </section>
        <div className={styles.boyImage}>
          <img src={persona} alt="img" />
        </div>
      </div>
      <div className={styles.narrow}><img src={narrow} type="button" alt="img" /></div>
    </>
  )
}

export default Suscribe