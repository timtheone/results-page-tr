import Sort from '../types/Sort'
import TourData from '../types/TourData'

export default function getSortMapping(option: string): [keyof TourData, 'asc' | 'desc'] {
  switch (option) {
    case Sort[1]:
      return ['price', 'desc']
    case Sort[2]:
      return ['length', 'asc']
    case Sort[3]:
      return ['length', 'desc']
    default:
      return ['price', 'asc']
  }
}
