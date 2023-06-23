'use client'

import { FilmPreview, Loader } from 'components'
import { useFilteredFilms } from 'hooks'
import styles from './Films.module.sass'

type FilmsProps = {
  allFilms: Movie[]
  isRemovable: boolean
}

const Films = () => {
  const {filteredFilms, isLoading, isError, filmsInCinemaFetching, filmsInCinemaLoading} = useFilteredFilms();
  
  return (
      <div className={styles.films__wrapper}>
        {isError && <p>Something bad happened...</p>}
        {(isLoading || filmsInCinemaFetching || filmsInCinemaLoading) && <Loader />}
        {filteredFilms && !(filmsInCinemaFetching || filmsInCinemaLoading) &&(
          <Films.List allFilms={filteredFilms} isRemovable={false} />
        )}
        {filteredFilms && !filteredFilms.length && (
          <p>Фильмы по заданным фильтрам не найдены.</p>
        )}
      </div>
  )
}


Films.List = function FilmsList ({ allFilms, isRemovable }: FilmsProps) {
  return (
    <div className={styles.films__list}>
      {allFilms.length > 0 &&
        allFilms.map((film) => (
          <FilmPreview key={film.id} {...film} isRemovable={isRemovable} />
        ))}
    </div>
  )
}

export default Films
