import TourData from '../../types/TourData'
import styles from './ResultItemDescription.module.scss'
import ResultItemDescriptionDetails from './ResultItemDescriptionDetails'

type Props = Pick<
  TourData,
  'destinations' | 'age_max' | 'age_min' | 'regions' | 'travel_styles' | 'operated_in'
>

const ResultItemDescription = ({
  destinations,
  age_min,
  age_max,
  regions,
  travel_styles,
  operated_in
}: Props) => {
  return (
    <>
      <dl className={styles.descriptionBlock}>
        <ResultItemDescriptionDetails data={destinations} title={'Destinations'} />
        <dt>Age Range</dt>
        <dd>
          <span>
            {age_min} to {age_max} year olds
          </span>
        </dd>
        <ResultItemDescriptionDetails data={regions} title={'Regions'} />
        <ResultItemDescriptionDetails data={travel_styles} title={'Travel Style'} />
        <ResultItemDescriptionDetails data={operated_in} title={'Operated In'} />
        <dt>Operator</dt>
        <dd>
          {/* There is no operator data coming from api */}
          <span>Hotspots2c</span>
        </dd>
      </dl>
    </>
  )
}

export default ResultItemDescription
