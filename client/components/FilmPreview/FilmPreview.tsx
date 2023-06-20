
'use client'
 
import { useRouter } from 'next/navigation'
import Image from 'next/image';
import styles from './FilmPreview.module.sass';
import { TicketsCounter } from '../TicketsCounter/TicketsCounter';

type FilmPreviewProps = Pick<Movie, 'title'| 'posterUrl'| 'genre' | 'id'>

export const FilmPreview = ({title, posterUrl, genre, id}: FilmPreviewProps) => {
  const router = useRouter()

  const onClickHandler = () => {
    router.push(`/movies/${id}`)
  }
  
  return (
    <div className={styles.film__wrapper} onClick={onClickHandler}>
      <Image 
        src={posterUrl} 
        alt={`poster of ${title}`}
        width={100}
        height={120} 
        className={styles.film__poster}/>
      <div className={styles.film__info}>
        <h3>{title}</h3>
        <h4>{genre}</h4>
      </div>
      <div className={styles.film__cart}>
        <TicketsCounter />
      </div>
    </div>
  )
}