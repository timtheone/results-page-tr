import TourData from '../../types/TourData'
import styles from './ResultItemDescription.module.scss'

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
        <dt>Destinations</dt>
        <dd>
          {destinations.map((element, index) => (
            <span style={{ display: 'inline-block' }} key={index}>
              {element},
            </span>
          ))}
        </dd>
        <dt>Age Range</dt>
        <dd>
          <span style={{ display: 'inline-block' }}>
            {age_min} to {age_max} year olds
          </span>
        </dd>
        <dt>Regions</dt>
        <dd>
          {regions.map((element, index) => (
            <span style={{ display: 'inline-block' }} key={index}>
              {element},
            </span>
          ))}
        </dd>
        <dt>Travel Style</dt>
        <dd>
          {travel_styles.map((element, index) => (
            <span style={{ display: 'inline-block' }} key={index}>
              {element},
            </span>
          ))}
        </dd>
        <dt>Operated In</dt>
        <dd>
          {operated_in.map((element, index) => (
            <span style={{ display: 'inline-block' }} key={index}>
              {element},
            </span>
          ))}
        </dd>
        <dt>Operator</dt>
        <dd>
          {/* There is no operator data coming from api */}
          <span style={{ display: 'inline-block' }}>Hotspots2c</span>
        </dd>
      </dl>
    </>
  )
}

export default ResultItemDescription
