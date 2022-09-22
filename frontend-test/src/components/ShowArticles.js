import React from 'react';

import Cards from './Cards';
import styles from './styles/Articles.module.css';

const ShowArticles = ({ articles, currentPage, setCurrentPage }) => {

  return (
    <>
      <section className={styles.category} >
        <h3>Featured Article -</h3>
        <h3>See All Article > </h3>
      </section>
      <button onClick={() => setCurrentPage(currentPage + 1)} type="button" class="btn btn-dark">More Article</button>
      <div className={styles.container}>
        {articles &&
          articles.map((item) => (
            <Cards item={item} />
          ))}
      </div>
    </>
  )
}

export default ShowArticles