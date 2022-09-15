import React from 'react'
import styles from './styles.module.css'

const Card = ({ title, imageUrl, url, country, altImg }) => {
  return <div className={styles.cardContainer}>
    <img src={imageUrl} alt={altImg} width="15rem" height="7rem" className={styles.cardImage} />
    <section className={styles.cardBodySection}>
      <p>{title}</p>
      <p>{country}</p>
    </section>
  </div>
}

export default Card;
