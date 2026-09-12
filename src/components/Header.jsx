import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useStore } from '../store/useStore'

const links = [['/', 'Inicio'], ['/shop', 'Supermercado'], ['/categories', 'Categorías'], ['/offers', 'Ofertas'], ['/recipes', 'Recetas'], ['/lists', 'Listas']]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const cart = useStore((state) => state.cart)
  const setCartOpen = useStore((state) => state.setCartOpen)
  const count = cart.reduce((sum, item) => sum + item.quantity, 0)
  const search = (event) => { event.preventDefault(); if (query.trim()) navigate(`/search?q=${encodeURIComponent(query.trim())}`) }

  return <header className="sticky top-0 z-40 border-b border-stone-200 bg-white/95 backdrop-blur">
    <div className="mx-auto flex h-18 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
      <Link to="/" aria-label="MarkECIA, ir al inicio" className="flex shrink-0 items-center">
        <img src="/brand/markecia-logo-light.svg" alt="MarkECIA" className="h-10 w-auto" />
      </Link>
      <nav className="hidden items-center gap-5 lg:flex">{links.map(([to, label]) => <NavLink key={to} to={to} className={({ isActive }) => `text-sm font-medium transition hover:text-emerald-700 ${isActive ? 'text-emerald-700' : 'text-slate-600'}`}>{label}</NavLink>)}</nav>
      <form onSubmit={search} className="ml-auto hidden max-w-xs flex-1 items-center rounded-xl bg-stone-100 px-3 focus-within:ring-2 focus-within:ring-emerald-500 sm:flex"><Search size={17} className="text-slate-400"/><input aria-label="Buscar productos" value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Busca productos" className="w-full bg-transparent px-2 py-2.5 text-sm outline-none"/></form>
      <div className="flex items-center gap-1"><Link to="/wishlist" aria-label="Favoritos" className="rounded-lg p-2 text-slate-600 hover:bg-stone-100"><Heart size={20}/></Link><Link to="/account" aria-label="Mi cuenta" className="hidden rounded-lg p-2 text-slate-600 hover:bg-stone-100 sm:block"><User size={20}/></Link><button onClick={() => setCartOpen(true)} aria-label="Abrir carrito" className="relative rounded-lg p-2 text-slate-700 hover:bg-stone-100"><ShoppingBag size={21}/>{count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-emerald-600 px-1 text-[10px] font-bold text-white">{count}</span>}</button><button onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" className="rounded-lg p-2 lg:hidden">{menuOpen ? <X size={22}/> : <Menu size={22}/>}</button></div>
    </div>
    {menuOpen && <nav className="border-t border-stone-100 bg-white px-5 py-4 lg:hidden">{links.map(([to, label]) => <NavLink onClick={() => setMenuOpen(false)} key={to} to={to} className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50">{label}</NavLink>)}<form onSubmit={search} className="mt-3 flex items-center rounded-xl bg-stone-100 px-3"><Search size={17}/><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Buscar" className="w-full bg-transparent px-2 py-2.5 outline-none"/></form></nav>}
  </header>
}
