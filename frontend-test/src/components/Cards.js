import React, { useState } from 'react'

import styles from './styles/Articles.module.css';
import Modal from './Modal';

const Cards = ({ item }) => {
  const [idCard, setIdCard] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = (item) => {
    setIdCard(item);
    setIsOpenModal(true);
  }

  return (
     <div key={item.id} >
      <section className={styles.cardSection} onClick={() => openModal(item.id)}>
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
      <div>
        {isOpenModal &&
          <Modal onClose={() => setIsOpenModal(false)} open={isOpenModal} item={item} 
          />
        }
      </div>

      <div className='modalContainer' >
        <div >
        <Modal isOpenModal={isOpenModal} item={item} setIsOpenModal={setIsOpenModal} />
          
        </div>
      </div>
   </div>
  )
}

export default Cards