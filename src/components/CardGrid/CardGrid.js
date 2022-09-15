import React from 'react';
import Card from '../Card/Card'
import styles from './styles.module.css';

const CardGrid = ({ shows = [] }) => {
  return <ul className={styles.cardGridContainer}>
    {shows.map(show => (
      <li className={styles.cardGridItem}>
        <Card title={show.name} imageUrl={show.image?.original} country={show.network?.country?.name} url={show._links.self} key={show.id} />
      </li>
    ))}
  </ul>
}

export default CardGrid
