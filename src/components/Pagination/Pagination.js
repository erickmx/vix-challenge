import React, { useMemo } from 'react'
import styles from './styles.module.css';


const Pagination = ({ currentPage, totalPages, onClickPage }) => {
  const pages = useMemo(() => {
    let pagesArray = [];
    for (let i = 1; i < totalPages; i++) {
      pagesArray.push(i);
    }

    return pagesArray
  }, [totalPages]);

  const onClickPrev = () => {
    if (currentPage > 1) {
      onClickPage(currentPage - 1);
    }
  }

  const onClickNext = () => {
    if (currentPage < totalPages - 1) {
      onClickPage(currentPage + 1);
    }
  }

  return <ul>
    <li className={styles.paginationItem}>
      <button disabled={currentPage === 1} onClick={onClickPrev}>
        &lt;
      </button>
    </li>
    {pages.map(pageNumber => <li key={`paginaion_item_${pageNumber}`} className={`${styles.paginationItem} ${currentPage === pageNumber ? styles.paginationItemSelected : ''}`}>
      <button onClick={() => onClickPage(pageNumber)}>
        {pageNumber}
      </button>
    </li>)}
    <li className={styles.paginationItem}>
      <button disabled={currentPage === totalPages - 1} onClick={onClickNext}>

        &gt;
      </button>
    </li>
  </ul>
}

export default Pagination;
