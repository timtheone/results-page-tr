import IconStar from './IconStar'
import IconstStarDeactivated from './IconStarDeactivated'
import IconStarHalf from './IconStarHalf'
import styles from './RatingStars.module.scss'

type Props = {
  rating: number
}

const StarRating = ({ rating }: Props) => {
  const remainder = rating - Math.floor(rating)

  return (
    <ul className={styles.root}>
      {Array.from({ length: 5 }).map((cur, index) => (
        <li key={index + 1} className={styles.star} {...{ rel: `${index + 1}` }}>
          <IconstStarDeactivated key={index} className={styles.star} />
        </li>
      ))}
      <li>
        <ul className={styles.filled}>
          {Array.from({ length: Math.floor(rating) }).map((cur, index) => (
            <li key={index + 1} className={styles.star}>
              <IconStar key={index} className={styles.star} />
            </li>
          ))}
          {remainder > 0.25 && remainder < 0.75 && (
            <li>
              <IconStarHalf className={styles.star} />
            </li>
          )}
          {remainder !== 0 && remainder >= 0.75 && (
            <li>
              <IconStar className={styles.star} />
            </li>
          )}
        </ul>
      </li>
    </ul>
  )
}

export default StarRating
