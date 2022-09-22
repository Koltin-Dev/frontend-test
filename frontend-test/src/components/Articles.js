import React, { useState, useEffect } from 'react';

import styles from './styles/Articles.module.css';

const Articles = () => {
  const url = "https://6328f6acd2c97d8c525f8f80.mockapi.io/api/v1/blogs?p=1&l=5";
  const [articles, setArticles] = useState([]);

  const getAllArticles = () => {
    fetch(url)
      .then((response) => response.json())
      .then((articles) => { setArticles(articles) });
  };

  useEffect(() => {
    getAllArticles(url)
  }, [])

  return (
    <>
      <div className={styles.container}>
        {articles &&
          articles.map((item) => (
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
          ))}
      </div>
    </>
  )
}

export default Articles