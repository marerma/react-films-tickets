import Image from 'next/image';
import styles from './Movie.module.sass';
import { TicketsCounter } from 'components/TicketsCounter/TicketsCounter';
import { api } from 'api';
import { ReviewsList } from 'components/Reviews/ReviewsList';
import { FilmCard } from 'components/FilmCard/FilmCard';


export default async function Movie({ params }: { params: { id: string } }) {
  const film = await api.getOneFilm(params.id);

  return (
    <div className={styles.film__page}>
      <FilmCard {...film}/>
      <ReviewsList id={params.id} />
    </div>
  )
}