import { useRef, useState } from 'react'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import styles from './Image.module.scss'

type Props = {
  url: string
  width: number
  height: number
  alt: string
}

const Image = ({ url, width, height, alt }: Props) => {
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef<HTMLImageElement>(null)

  const renderImage = () => {
    setIsInView(true)
  }

  useIntersectionObserver({
    root: null,
    target: imgRef,
    onIntersect: renderImage,
    enabled: !isInView
  })

  return (
    <div
      className={styles.imageContainer}
      ref={imgRef}
      style={{
        paddingBottom: `${(height / width) * 100}%`,
        width: '100%'
      }}
    >
      {isInView && <img className={styles.image} src={url} alt={alt} />}
    </div>
  )
}

export default Image
