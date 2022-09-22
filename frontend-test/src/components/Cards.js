import React from 'react'

import styles from './styles/Articles.module.css';

const Cards = ({ item }) => {
  return (
    <div key={item.id} >
      <section className={styles.cardSection} >
        <img src={item.thumbnail} alt="nail" className={styles.thumbNail} />
        <h6>{item.title}</h6>
        <section className={styles.authorContainer}>
          <img src={item.author.avatar} alt="avatar" className={styles.avatar} />
          <section className={styles.author}>
            <p className={styles.name}>{item.author.name}</p>
            <p>{item.createdAt}</p>
          </section>
        </section>
      </section>
    </div>
  )
}

export default Cards