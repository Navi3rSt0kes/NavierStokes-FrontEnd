import { useEffect, useMemo, useRef, useState } from 'react'
import type { ChatMessage, ChatResponse, Product } from '../types'

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000/chat'

const initialMessages: ChatMessage[] = [{
  id: 'welcome',
  role: 'assistant',
  content: 'Hi! I am your shopping assistant. Tell me what you need and I will build your cart.',
}]

function createMessage(role: ChatMessage['role'], content: string): ChatMessage {
  return { id: crypto.randomUUID(), role, content }
}

export function useChat() {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [cart, setCart] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const chatEndRef = useRef<HTMLDivElement | null>(null)

  const total = useMemo(
    () => cart.reduce((sum, item) => sum + Number(item.price) * Number(item.quantity), 0),
    [cart],
  )

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isLoading])

  async function sendMessage(userInput: string) {
    const message = userInput.trim()
    if (!message || isLoading) return

    setMessages((current) => [...current, createMessage('user', message)])
    setError(null)
    setIsLoading(true)

    try {
      const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
      })
      if (!response.ok) throw new Error('Unable to get a response from the assistant.')

      const data = (await response.json()) as ChatResponse
      setMessages((current) => [
        ...current,
        createMessage('assistant', data.response || 'I did not receive a response.'),
      ])
      setCart(Array.isArray(data.cart) ? data.cart : [])
    } catch (requestError) {
      setError(requestError instanceof Error ? requestError.message : 'An error occurred while connecting to the backend.')
    } finally {
      setIsLoading(false)
    }
  }

  return { messages, cart, total, isLoading, error, chatEndRef, sendMessage }
}
