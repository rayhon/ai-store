export interface Product {
  id: number
  title: string
  description: string
  price: number
  category: string
  rating: number
  image: string
}

export interface CartItem extends Product {
  quantity: number
} 