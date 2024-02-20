declare type Banner = {
  video_headline?: string
  video_sub_headline?: string
  video_url?: string
}

declare type Products = {
  product_id: number
  name: string
  price: number
  discount?: number
  best_choice?: boolean
  freight?: string
  image_url: string
}
