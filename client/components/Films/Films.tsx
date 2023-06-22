import { FilmPreview } from 'components'
import styles from './Films.module.sass'

type FilmsProps = {
  allFilms: Movie[]
  isRemovable: boolean
}
const Films = ({ allFilms, isRemovable }: FilmsProps) => {
  return (
    <div className={styles.films__wrapper}>
      {allFilms.length > 0 &&
        allFilms.map((film) => (
          <FilmPreview key={film.id} {...film} isRemovable={isRemovable} />
        ))}
    </div>
  )
}

export default Films
