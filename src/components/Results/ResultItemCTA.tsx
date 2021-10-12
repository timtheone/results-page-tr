import TourData from '../../types/TourData'
import CheckIcon from '../Icons/CheckIcon'
import styles from './ResultItemCTA.module.scss'

type Prop = Pick<TourData, 'length' | 'price' | 'flexible_booking'>

const ResultItemCTA = ({ length, price, flexible_booking }: Prop) => {
  return (
    <div className={styles.root}>
      <div className={styles.info}>
        <dl className={styles.info_stats_dl}>
          <dt className={styles.info_stats_dt}>Tour length</dt>
          <dd className={styles.info_stats_dd}>{length} days</dd>
          <dt className={styles.info_stats_dt}>Price per day</dt>
          <dd className={styles.info_stats_dd}>${(price / length).toFixed()}</dd>
        </dl>
        <dl className={styles.info_price_dl}>
          <dt className={styles.info_price_dt}>From</dt>
          <dd className={styles.info_price_dd}>${price.toFixed()}</dd>
        </dl>
      </div>
      {flexible_booking && (
        <span className={styles.flexibleBooking}>
          <CheckIcon className={styles.checkIcon} />
          <p className={styles.flexibleBookingText}>Book With Flexibility</p>
        </span>
      )}
      <a className={styles.ctaButton}>View Tour</a>
    </div>
  )
}

export default ResultItemCTA
