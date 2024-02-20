declare type Products = {
  product_id: number
  name: string
  price: number
  discount?: number
  best_choice?: boolean
  freight?: string
  image_url: string
}

declare type Objects = {
  object: [
    {
      checkout_id: number
      identifier: string
      video_headline?: string
      video_sub_headline?: string
      video_url?: string
      products: [
        {
          product_id: number
          name: string
          price: number
          discount?: number
          best_choice?: boolean
          freight?: string
          image_url: string
        }
      ]
    }
  ]
}
