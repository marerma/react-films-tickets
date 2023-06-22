import { FilmCard } from 'components'
import { ReviewsList } from 'components'
import styles from './Movie.module.sass'

export default function Movie({ params }: { params: { id: string } }) {
  return (
    <div className={styles.film__page}>
      <FilmCard id={params.id} />
      <ReviewsList id={params.id} />
    </div>
  )
}
