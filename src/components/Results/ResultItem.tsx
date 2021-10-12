import cx from 'classnames'

import TourData from '../../types/TourData'
import StarRating from '../RatingStars/RatingStars'
import styles from './ResultItem.module.scss'
import ResultItemCTA from './ResultItemCTA'
import ResultItemDescription from './ResultItemDescription'
import ResultItemImageBlock from './ResultItemImageBlock'

type Props = {
  item: TourData
  className?: string
}

const ResultItem = ({ item, className }: Props) => {
  return (
    <li className={cx(styles.root, className)}>
      <ResultItemImageBlock {...item} />
      <div className={styles.centerBlock}>
        <h4 className={styles.title}>{item.title}</h4>
        <div className={styles.ratingBlock}>
          <StarRating rating={item.reviews.avg} />
          <p className={styles.reviewsCount}>{item.reviews.cnt} reviews</p>
        </div>
        <i className={styles.reviewQuote}>&quot;{item.reviews.sample}&quot;</i>
        <ResultItemDescription {...item} />
      </div>
      <ResultItemCTA {...item} />
    </li>
  )
}

export default ResultItem
