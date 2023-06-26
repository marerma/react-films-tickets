'use client'

import { FilmsList, Loader } from 'components'
import { useFilteredFilms } from 'hooks'
import styles from './Films.module.sass'

const Films = () => {
  const {
    filteredFilms,
    isLoading,
    isError,
    filmsInCinemaFetching,
    filmsInCinemaLoading,
  } = useFilteredFilms()

  return (
    <div className={styles.films__wrapper}>
      {isError && <p>Something bad happened...</p>}
      {(isLoading || filmsInCinemaFetching || filmsInCinemaLoading) && (
        <Loader />
      )}
      {filteredFilms && !(filmsInCinemaFetching || filmsInCinemaLoading) && (
        <FilmsList allFilms={filteredFilms} isRemovable={false} />
      )}
      {filteredFilms && !filteredFilms.length && (
        <p>Фильмы по заданным фильтрам не найдены.</p>
      )}
    </div>
  )
}

export default Films
