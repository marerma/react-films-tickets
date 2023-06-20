import { api } from 'api';
import { Review } from 'components/Review/Review';
import styles from './Reviews.module.sass';

type ReviewListProps = {
  id: string;
}
export const ReviewsList = async ({id} : ReviewListProps) => {
  const allFilmReview = await api.getFilmReviews(id);
  
  return (
    <div className={styles.reviews__wrapper}>
      {allFilmReview.length > 0 && allFilmReview.map((review) => <Review key={review.id} {...review}/>)}
    </div>
  )
}