import Image from 'next/image';
import styles from './Review.module.sass';

export const Review = ({name, text, rating, id}: Review) => {
  return (
    <div className={styles.review__wrapper} >
      <Image 
        src='/review_default.png'
        alt={`avatar of ${name}`}
        width={100}
        height={100} 
        className={styles.review__poster}/>
      <div className={styles.review__info}>
        <p className={styles.review__name}>{name}</p>
        <p className={styles.review__text}>{text}</p>
        <span className={styles.review__rating}>Оценка: {rating}</span>
      </div>
    </div>
  )
}