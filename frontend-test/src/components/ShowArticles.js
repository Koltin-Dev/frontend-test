import React, { useState } from 'react';

import Cards from './Cards';
import Modal from './Modal';
import styles from './styles/ShowArticles.module.css';

const ShowArticles = ({ articles, currentPage, setCurrentPage }) => {

  const [idCard, setIdCard] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = (item) => {
    setIdCard(item);
    setIsOpenModal(true);
  }

  return (
    <div className={styles.container}>
      <section className={styles.category} >
        <h3>Featured Article - </h3>
        <h3>See All Article > </h3>
      </section>
      <section className={styles.cardSection}>
        {articles &&
          articles.map((item) => (
            <Cards item={item} openModal={openModal} />
          ))}
      </section>
      <div className={styles.modalContainer} >
          <Modal isOpenModal={isOpenModal} item={idCard} setIsOpenModal={setIsOpenModal}
           onClose={() => setIsOpenModal(false)} 
           />
      </div>
      <section className={styles.moreArticle}>
        <button onClick={() => setCurrentPage(currentPage + 1)} type="button" class="btn btn-dark">More Article</button>
      </section>
    </div>
  )
}

export default ShowArticles