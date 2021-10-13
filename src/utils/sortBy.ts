import TourData from '../types/TourData'

export default function sortBy(
  data: Array<TourData>,
  sortField: keyof TourData,
  direction: 'asc' | 'desc' = 'asc'
) {
  const sortedCopy = data.slice(0)
  if (direction === 'asc') {
    return sortedCopy.sort((a: TourData, b: TourData) =>
      a[sortField] > b[sortField] ? 1 : b[sortField] > a[sortField] ? -1 : 0
    )
  } else {
    return sortedCopy.sort((a: TourData, b: TourData) =>
      a[sortField] < b[sortField] ? 1 : b[sortField] < a[sortField] ? -1 : 0
    )
  }
}
