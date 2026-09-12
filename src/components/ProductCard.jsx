import { Heart, Plus, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../lib/data'
import { useStore } from '../store/useStore'

export default function ProductCard({ product }) {
  const addToCart = useStore((state) => state.addToCart)
  const favorites = useStore((state) => state.favorites)
  const toggleFavorite = useStore((state) => state.toggleFavorite)
  const saved = favorites.some((item) => item.id === product.id)
  return <article className="group relative rounded-2xl border border-stone-200 bg-white p-3 transition duration-200 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-lg hover:shadow-emerald-900/5">
    <button onClick={() => toggleFavorite(product)} aria-label="Save to favorites" className={`absolute right-3 top-3 z-10 rounded-full bg-white p-2 shadow-sm ${saved ? 'text-rose-500' : 'text-slate-400 hover:text-rose-500'}`}><Heart size={17} fill={saved ? 'currentColor' : 'none'}/></button>
    <Link to={`/product/${product.id}`} className="block"><div className="relative grid aspect-square place-items-center rounded-xl bg-stone-100 text-6xl">{product.emoji}{product.badge && <span className="absolute bottom-2 left-2 rounded-md bg-rose-500 px-2 py-1 text-[10px] font-bold text-white">{product.badge}</span>}</div><p className="mt-3 text-xs text-slate-500">{product.brand}</p><h3 className="mt-0.5 truncate font-semibold text-slate-800">{product.name}</h3><p className="mt-1 text-xs text-slate-500">{product.unit}</p></Link>
    <div className="mt-3 flex items-end justify-between gap-2"><div><p className="font-bold text-slate-900">{formatPrice(product.price)}</p>{product.oldPrice && <p className="text-xs text-slate-400 line-through">{formatPrice(product.oldPrice)}</p>}</div><button onClick={() => addToCart(product)} aria-label={`Add ${product.name}`} className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white transition hover:bg-emerald-700 active:scale-95"><Plus size={19}/></button></div>
    <div className="mt-2 flex items-center gap-1 text-xs text-amber-500"><Star size={13} fill="currentColor"/>{product.rating}<span className="text-slate-400">({product.reviews})</span></div>
  </article>
}
