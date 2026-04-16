export { DataEnvelope, DataListEnvelope } from "./dataEnvelopes"

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

export type UserRole = "admin" | "moderator" | "user"

export type UserAddress = {
  address: string
  city: string
  state: string
  stateCode: string
  postalCode: string
  country: string
}

export type User = {
  id: number
  firstName: string
  lastName: string
  gender: string
  email: string
  phone: string
  birthDate: string
  image: string
  address: UserAddress
  role: UserRole
}