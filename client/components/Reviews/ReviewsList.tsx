'use client'
import { Review } from 'components'
import { useGetFilmReviewsQuery } from 'store/reducer/FilmsApiSlice'
import styles from './Reviews.module.sass'

type ReviewListProps = {
  id: string
}
const ReviewsList = ({ id }: ReviewListProps) => {
  const { data: allFilmReview } = useGetFilmReviewsQuery(id)

  return (
    <div className={styles.reviews__wrapper}>
      {allFilmReview &&
        allFilmReview.map((review) => <Review key={review.id} {...review} />)}
    </div>
  )
}

export default ReviewsList
