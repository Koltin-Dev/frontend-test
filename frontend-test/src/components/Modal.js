import React from 'react';

import styles from './styles/Articles.module.css';
import CardContent from './CardContent';

const Modal = ({ isOpenModal, item, onClose }) => {

  const handleClose = (e) => {
    if (e.target.className) {
      onClose()
    }
    return null
  }
 
  if (isOpenModal) {
    return (
      <div key={item.id} className={styles.showModalContainer} onClick={handleClose}>
      <CardContent item={item} />
      <section>
        <span className={styles.onClose} onClick={onClose}>X</span>
      </section>
    </div>
    )
  }

}

export default Modal

