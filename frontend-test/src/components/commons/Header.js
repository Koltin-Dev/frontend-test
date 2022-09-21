import React from 'react';

import styles from '../styles/Header.module.css';
import Logo from './../assets/Logo.png';
import magnifyingGlass from '../assets/magnifyingGlass.png';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <section className={styles.headerLeft}>
        <img src={Logo} alt='logo'/>
      </section>
      <section className={styles.headerRight}>
        <ul>
          <li><a href="Home">Home</a></li>
          <li><a href="Category">Category</a></li>
          <li><a href="AboutMe">About Me</a></li>
          <img src={magnifyingGlass} type="search" class="device" />
          <button class="btn " type="submit">Search</button>
        </ul>
      </section>
    </header>
  )
}

export default Header