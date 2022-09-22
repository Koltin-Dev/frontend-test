import React from 'react';

import styles from './styles/Subscribe.module.css';
import buzon from './assets/buzon.png';

const Subscribe = () => {
  return (
    <>
      <section className={styles.subscribe}>
        <div>
          <img src={buzon} type="search" alt="device" />
        </div>
        <h2>Subscribe For The Latest Updates</h2>
        <p>Suscribe to newsletters and never miss the new post every week.</p>
        <section className={styles.search}>
          <input type="search" id="form1" class="form-control" placeholder='Enter your email here...' />
          <button type="button" class="btn btn-dark">Subscribe</button>
        </section>
      </section>
    </>
  )
}

export default Subscribe