import { ChangeEvent } from 'react'

import Sort from '../../types/Sort'
import styles from './Select.module.scss'

type Props = {
  // eslint-disable-next-line no-unused-vars
  sort(arg: ChangeEvent<HTMLSelectElement>): void
}

const Select = ({ sort }: Props) => {
  return (
    // eslint-disable-next-line jsx-a11y/no-onchange
    <select
      className={styles.root}
      name="sort"
      aria-label="Sort by filter"
      onChange={(e) => {
        sort(e)
      }}
    >
      <option value={Sort[0]}>Total price: Lowest first</option>
      <option value={Sort[1]}>Total price: Highest first</option>
      <option value={Sort[2]}>Duration: Shortest first</option>
      <option value={Sort[3]}>Duration: Longest first</option>
    </select>
  )
}
export default Select
