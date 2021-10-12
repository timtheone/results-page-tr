type TourData = {
  id: number
  title: string
  age_max: number
  age_min: number
  destinations: Array<string>
  flexible_booking: boolean
  img_url: string
  length: number
  map_url: string
  operated_in: Array<string>
  price: number
  reviews: {
    avg: number
    cnt: number
    sample: string
  }
  regions: Array<string>
  travel_styles: Array<string>
}

export default TourData
