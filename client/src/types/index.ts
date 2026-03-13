export type ProductReview = {
  rating: number
  comment: string
  date: string
  reviewerName: string
  reviewerEmail: string
}

export type Product = {
  id: number
  title: string
  description: string
  price: number
  reviews: ProductReview[]
  category: string
  stock: number
  rating: number
  tags: string[]
  brand?: string
  images: string[]
  thumbnail: string
}
