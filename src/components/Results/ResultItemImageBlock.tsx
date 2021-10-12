import TourData from '../../types/TourData'
import Image from '../Image/Image'
import styles from './ResultItemImageBlock.module.scss'

type Prop = Pick<TourData, 'img_url' | 'map_url' | 'title'>

const ResultItemImageBlock = ({ img_url, map_url, title }: Prop) => {
  return (
    <div className={styles.imageBlock}>
      <Image url={img_url} alt={title} width={232} height={170} />
      <div className={styles.viewMapImageWrapper}>
        <Image url={map_url} alt={`Map of ${title} Tour`} width={232} height={112} />
        <div className={styles.viewMapButton}>
          <span> View Map</span>
        </div>
      </div>
    </div>
  )
}

export default ResultItemImageBlock
