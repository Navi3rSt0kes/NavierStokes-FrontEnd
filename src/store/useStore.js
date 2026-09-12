import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useStore = create(
  persist(
    (set) => ({
      cart: [],
      favorites: [],
      isCartOpen: false,
      addToCart: (product) => set((state) => {
        const current = state.cart.find((item) => item.id === product.id)
        return { cart: current ? state.cart.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item) : [...state.cart, { ...product, quantity: 1 }] }
      }),
      addManyToCart: (products) => set((state) => {
        const cart = [...state.cart]
        products.forEach((product) => { const index = cart.findIndex((item) => item.id === product.id); if (index >= 0) cart[index] = { ...cart[index], quantity: cart[index].quantity + 1 }; else cart.push({ ...product, quantity: 1 }) })
        return { cart }
      }),
      updateQuantity: (id, quantity) => set((state) => ({ cart: quantity < 1 ? state.cart.filter((item) => item.id !== id) : state.cart.map((item) => item.id === id ? { ...item, quantity } : item) })),
      removeFromCart: (id) => set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),
      toggleFavorite: (product) => set((state) => ({ favorites: state.favorites.some((item) => item.id === product.id) ? state.favorites.filter((item) => item.id !== product.id) : [...state.favorites, product] })),
      setCartOpen: (isCartOpen) => set({ isCartOpen }),
      clearCart: () => set({ cart: [] }),
    }),
    { name: 'mercado-vivo-store' },
  ),
)
