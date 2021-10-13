import { RefObject, useRef, useState } from 'react'

import styles from './ResultItemDescriptionDetails.module.scss'

type Props = {
  data: Array<string>
  title: string
  sliceCursor?: number
}

const ResultItemDescriptionDetails = ({ data, title, sliceCursor = 3 }: Props) => {
  const dataDdArray: Array<RefObject<HTMLSpanElement>> = []
  const [buttonShown, setButtonShown] = useState(() => {
    return data.length > sliceCursor
  })

  let shownData = data

  if (data.length > sliceCursor) {
    shownData = data.slice(0, sliceCursor)
    data.slice(sliceCursor).forEach(() => {
      dataDdArray.push(useRef<HTMLSpanElement>(null))
    })
  }

  const expanddata = () => {
    dataDdArray.forEach((e) => {
      if (e.current) {
        e.current.style.display = 'inline-block'
      }
    })
    setButtonShown(false)
  }

  return (
    <>
      <dt>{title}</dt>
      <dd>
        {shownData.map((element, index, arr) => (
          <span style={{ display: 'inline-block' }} key={index}>
            {element}
            {Object.is(arr.length - 1, index) && data.length <= sliceCursor ? '' : ','}
          </span>
        ))}
        {data.length > sliceCursor &&
          data.slice(sliceCursor).map((element, index, arr) => (
            <span ref={dataDdArray[index]} style={{ display: 'none' }} key={index}>
              {element}
              {Object.is(arr.length - 1, index) ? '' : ','}
            </span>
          ))}
        {buttonShown && (
          <button className={styles.expandMore} onClick={expanddata}>
            +{data.length - shownData.length} more
          </button>
        )}
      </dd>
    </>
  )
}

export default ResultItemDescriptionDetails
