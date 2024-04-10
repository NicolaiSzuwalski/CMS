import React from 'react'
import styles from './modal.module.scss'

export const Modal = ({isOpen, onClose, films}) => {

    if (!isOpen){
        return null;
    }

  return (
    <div className={styles.Modal}>
        <div className={styles.modalContent}>
            <h6>{films.director}</h6>
            <b>{films.releaseDate}</b>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}