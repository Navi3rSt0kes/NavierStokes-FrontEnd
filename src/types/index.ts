export type MessageRole = 'user' | 'assistant'

export interface ChatMessage {
  id: string
  role: MessageRole
  content: string
}

export interface Product {
  id: string
  name: string
  price: number
  quantity: number
}

export interface ChatResponse {
  response: string
  cart: Product[]
}
