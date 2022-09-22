import React from 'react';

import styles from './styles/Articles.module.css'

const Modal = ({ open, item, onClose }) => {

  const handleClose = (e) => {
    if (e.target.className === 'modalContainer') {
      onClose()
    }
    return null
  }

  if (open) {
    return (
      <div key={item.id} className='modalContainer' onClick={handleClose}>
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
          <span className='modal__close' onClick={onClose}>X</span>
        </section>
      </div>
    )
  }

}

export default Modal

