import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { api } from '../lib/api'
import { categories } from '../lib/data'
import ProductCard from './ProductCard'

export default function DatabaseShopPage({ categoryId }) {
  const [params] = useSearchParams(); const [catalog, setCatalog] = useState([]); const [error, setError] = useState('');
  const [active, setActive] = useState(categoryId || 'all'); const query = (params.get('q') || '').toLowerCase();
  useEffect(() => { setActive(categoryId || 'all') }, [categoryId]);
  useEffect(() => { api('/api/products').then((data) => setCatalog(data.products || [])).catch(() => setError('No fue posible cargar el catálogo.')); }, []);
  const products = useMemo(() => catalog.filter((item) => (active === 'all' || item.category === active) && (!query || `${item.name} ${item.brand}`.toLowerCase().includes(query))), [catalog, active, query]);
  return <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8"><p className="text-sm font-bold text-emerald-700">Catálogo conectado a MarkECIA</p><h1 className="mt-2 text-3xl font-bold">Productos disponibles</h1><div className="mt-6 flex flex-wrap gap-2"><button onClick={() => setActive('all')} className={`rounded-full px-4 py-2 text-sm ${active === 'all' ? 'bg-emerald-600 text-white' : 'bg-stone-100'}`}>Todos</button>{categories.map((category) => <button key={category.id} onClick={() => setActive(category.id)} className={`rounded-full px-4 py-2 text-sm ${active === category.id ? 'bg-emerald-600 text-white' : 'bg-stone-100'}`}>{category.name}</button>)}</div>{error ? <p className="mt-8 text-rose-600">{error}</p> : <><p className="mt-6 text-sm text-slate-500">{products.length} productos cargados desde la base de datos.</p><div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">{products.map((product) => <ProductCard key={product.id} product={product}/>)}</div></>}</main>
}
