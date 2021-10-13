import { ChangeEvent, useEffect, useRef, useState } from 'react'
import { useQuery } from 'react-query'

import useIntersectionObserver from '../../hooks/useIntersectionObserver'
import TourData from '../../types/TourData'
import getSortMapping from '../../utils/getSortMapping'
import sortBy from '../../utils/sortBy'
import Select from '../Select/Select'
import ResultItem from './ResultItem'
import styles from './Results.module.scss'

const getData = async () => {
  const data = await fetch('https://jsonblob.com/api/jsonBlob/892812282795671552')
  return data.json()
}
/*
    Due to api having duplicates i decided to remove those duplicated keys
    as this is most likely a mistake
*/
const toDelete = new Set([8392, 6007, 6942])

const Results = () => {
  const query = useQuery('todos', getData)
  const [tourData, setTourData] = useState<Array<TourData>>([])

  useEffect(() => {
    if (query.status === 'success') {
      setTourData(sortBy(query.data, 'price'))
    }
  }, [query.status])
  /*
    how many elements should be shown on initial load
  */
  const [elementsShown, setElementsShown] = useState(20)
  const anchor = useRef<HTMLSpanElement>(null)

  /*
  Due to "api" not having proper pagination cursors, i
  implemented a "paint only infinite scroll" that helps with painting performance
  Data is loaded all at once, but at least we dont paint everything at once
  */
  const paintMore = () => {
    if (query.status === 'success' && query.data.length >= elementsShown) {
      setElementsShown((prev) => prev + 30)
    }
  }

  const sort = (e: ChangeEvent<HTMLSelectElement>) => {
    const mapping = getSortMapping(e.target.value)
    setTourData(sortBy(query.data, mapping[0], mapping[1]))
  }

  useIntersectionObserver({
    root: null,
    target: anchor,
    onIntersect: paintMore,
    enabled: query.status === 'success' && query.data.length >= elementsShown
  })

  return (
    <>
      <Select sort={sort} />
      <ul className={styles.root}>
        {tourData
          .filter((item: TourData) => !toDelete.has(item.id))
          .slice(0, elementsShown)
          .map((e: TourData) => (
            /* As i removed "duplicated" ids i can use ids for a key, otherwise i would've need to generate my own ids.
             */
            <ResultItem key={e.id} item={e} className={styles.resultItem} />
          ))}
        <span ref={anchor}></span>
      </ul>
    </>
  )
}

export default Results
