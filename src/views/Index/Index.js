
import React, { useEffect, useState } from 'react'
import CardGRid from '../../components/CardGrid/CardGrid';
import { fetchShows } from '../../services/shows'
import Pagination from '../../components/Pagination/Pagination'

import styles from './styles.module.css'

const LIMIT_BY_DEFAULT = 14;

const IndexView = () => {
  const [currentPage, setCurentPage] = useState(1);
  const [shows, setShows] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [slicedShows, setSlicedShows] = useState([]);

  useEffect(() => {
    (() => {
      fetchShows(currentPage).then(fetchedShows => {
        setShows(fetchedShows);

        setTotalPages(10);
        setSlicedShows(fetchedShows.slice(0, LIMIT_BY_DEFAULT));
      })
    })()

  }, []);

  const handleClickPage = (pageNumber) => {
    setCurentPage(pageNumber);

    if (pageNumber > 1) {
      setSlicedShows(shows.slice((pageNumber - 1) * LIMIT_BY_DEFAULT, pageNumber * LIMIT_BY_DEFAULT));
      return;
    }

    setSlicedShows(shows.slice(0, LIMIT_BY_DEFAULT));
  }


  return <div>
    <CardGRid shows={slicedShows} />
    <section className={styles.paginationSection}>
      <Pagination currentPage={currentPage} totalPages={totalPages} onClickPage={handleClickPage} />
    </section>
  </div>
}

export default IndexView;
