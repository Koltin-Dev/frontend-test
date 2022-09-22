import React from 'react';

import Cards from './Cards';
import styles from './styles/ShowArticles.module.css';

const ShowArticles = ({ articles, currentPage, setCurrentPage }) => {

 
  return (
      <div className={styles.container}>
        <section className={styles.category} >
          <h3>Featured Article - </h3>
          <h3>See All Article > </h3>
        </section>
        <section className={styles.cardSection}>
          {articles &&
            articles.map((item) => (
              <Cards item={item} />
            ))}
        </section>
        <section className={styles.moreArticle}>
          <button onClick={() => setCurrentPage(currentPage + 1)} type="button" class="btn btn-dark">More Article</button>
        </section>
      </div>
  )
}

export default ShowArticles