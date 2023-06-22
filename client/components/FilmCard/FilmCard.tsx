'use client'
import Image from 'next/image'
import { TicketsCounter } from 'components'
import { useGetOneFilmQuery } from 'store/reducer/FilmsApiSlice'
import { translateGenre } from 'shared/utils/Localization'
import styles from './FilmCard.module.sass'

type FilmCardProps = {
  id: string
}

const FilmCard = (props: FilmCardProps) => {
  const { data: film, isLoading, isError } = useGetOneFilmQuery(props.id)

  if (film) {
    const {
      title,
      posterUrl,
      releaseYear,
      description,
      genre,
      rating,
      director,
      id,
    } = film

    return (
      <div className={styles.film__wrapper}>
        <Image
          src={posterUrl}
          alt={`poster of ${title}`}
          width={400}
          height={500}
          className={styles.film__poster}
        />
        <div className={styles.film__infoContainer}>
          <div className={styles.film__info}>
            <h3 className={styles.film__title}>{title}</h3>
            <p className={styles.film__subtitle_bold}>
              Жанр:{' '}
              <span className={styles.film__description}>
                {translateGenre(genre)}
              </span>
            </p>
            <p className={styles.film__subtitle_bold}>
              Год выпуска:{' '}
              <span className={styles.film__description}>{releaseYear}</span>
            </p>
            <p className={styles.film__subtitle_bold}>
              Рейтинг:{' '}
              <span className={styles.film__description}>{rating}</span>
            </p>
            <p className={styles.film__subtitle_bold}>
              Режиссер:{' '}
              <span className={styles.film__description}>{director}</span>
            </p>
            <p className={styles.film__subtitle_bold}>Описание</p>
            <p className={styles.film__text}>{description}</p>
          </div>
          <div className={styles.film__counter}>
            <TicketsCounter id={id} />
          </div>
        </div>
      </div>
    )
  }
}

export default FilmCard
