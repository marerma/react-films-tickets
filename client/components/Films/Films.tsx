import { api } from 'api';
import { FilmPreview } from 'components/FilmPreview/FilmPreview';
import styles from './Films.module.sass';

export const Films = async () => {
  const allFilms = await api.getAllFilms();
  
  return (
    <div className={styles.films__wrapper}>
      {allFilms.length > 0 && allFilms.map((film) => <FilmPreview key={film.id} {...film}/>)}
    </div>
  )
}