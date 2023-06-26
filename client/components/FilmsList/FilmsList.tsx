'use client'

import { memo } from 'react'
import { FilmPreview } from 'components'
import styles from './FilmsList.module.sass'

type FilmsProps = {
  allFilms: Movie[]
  isRemovable: boolean
}

const MemoizedFilmPreview = memo(FilmPreview)

const FilmsList = ({ allFilms, isRemovable }: FilmsProps) => {
  return (
    <div className={styles.films__list}>
      {allFilms.length > 0 &&
        allFilms.map((film) => (
          <MemoizedFilmPreview
            key={film.id}
            {...film}
            isRemovable={isRemovable}
          />
        ))}
    </div>
  )
}

export default FilmsList
