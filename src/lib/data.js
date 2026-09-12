export const categories = [
  { id: 'frutas', name: 'Frutas y verduras', emoji: '🥬', color: 'bg-lime-100', description: 'Frescura del campo a tu mesa' },
  { id: 'carnes', name: 'Carnes', emoji: '🥩', color: 'bg-rose-100', description: 'Cortes seleccionados' },
  { id: 'lacteos', name: 'Lácteos', emoji: '🥛', color: 'bg-sky-100', description: 'Todos los días más fresco' },
  { id: 'panaderia', name: 'Panadería', emoji: '🥖', color: 'bg-amber-100', description: 'Recién horneado' },
  { id: 'bebidas', name: 'Bebidas', emoji: '🧃', color: 'bg-violet-100', description: 'Para cada momento' },
  { id: 'despensa', name: 'Despensa', emoji: '🫙', color: 'bg-orange-100', description: 'Lo esencial de tu cocina' },
  { id: 'limpieza', name: 'Limpieza', emoji: '🧼', color: 'bg-cyan-100', description: 'Hogar impecable' },
  { id: 'snacks', name: 'Snacks', emoji: '🍿', color: 'bg-yellow-100', description: 'Antojos resueltos' },
]

export const products = [
  { id: 'aguacate', name: 'Aguacate Hass', brand: 'Campo Vivo', price: 4800, oldPrice: 6000, category: 'frutas', unit: 'Unidad', rating: 4.8, reviews: 126, emoji: '🥑', badge: '-20%', description: 'Aguacates maduros, cremosos y seleccionados a mano.' },
  { id: 'leche', name: 'Leche entera', brand: 'Alpina', price: 5900, category: 'lacteos', unit: '1 L', rating: 4.9, reviews: 204, emoji: '🥛', description: 'Leche entera ultrapasteurizada, fuente de calcio.' },
  { id: 'pan', name: 'Pan campesino', brand: 'Pan del Día', price: 8500, category: 'panaderia', unit: '500 g', rating: 4.7, reviews: 87, emoji: '🥖', badge: 'Fresco', description: 'Pan artesanal de masa madre, horneado hoy.' },
  { id: 'pollo', name: 'Pechuga de pollo', brand: 'Granja Real', price: 18900, oldPrice: 21500, category: 'carnes', unit: '500 g', rating: 4.8, reviews: 167, emoji: '🍗', badge: 'Oferta', description: 'Pechuga de pollo sin piel, lista para preparar.' },
  { id: 'arroz', name: 'Arroz premium', brand: 'Diana', price: 7200, category: 'despensa', unit: '1 kg', rating: 4.6, reviews: 98, emoji: '🍚', description: 'Arroz blanco de grano largo, suelto y rendidor.' },
  { id: 'tomate', name: 'Tomate chonto', brand: 'Campo Vivo', price: 4900, category: 'frutas', unit: '500 g', rating: 4.7, reviews: 76, emoji: '🍅', description: 'Tomates firmes y jugosos para tus recetas.' },
  { id: 'cafe', name: 'Café molido', brand: 'Juan Valdez', price: 16800, category: 'bebidas', unit: '340 g', rating: 4.9, reviews: 221, emoji: '☕', badge: 'Top', description: 'Café colombiano de tueste medio y aroma intenso.' },
  { id: 'yogurt', name: 'Yogurt griego', brand: 'Alpina', price: 9600, category: 'lacteos', unit: '500 g', rating: 4.8, reviews: 112, emoji: '🥣', description: 'Yogurt griego natural, alto en proteína.' },
  { id: 'pasta', name: 'Pasta spaghetti', brand: 'Doria', price: 5300, category: 'despensa', unit: '500 g', rating: 4.6, reviews: 65, emoji: '🍝', description: 'Pasta de sémola de trigo duro para tus platos favoritos.' },
  { id: 'manzanas', name: 'Manzanas rojas', brand: 'Campo Vivo', price: 8900, category: 'frutas', unit: '1 kg', rating: 4.7, reviews: 89, emoji: '🍎', description: 'Manzanas crujientes y dulces de cosecha reciente.' },
]

export const recipes = [
  { id: 'pasta-cremosa', name: 'Pasta cremosa con pollo', time: '25 min', difficulty: 'Fácil', emoji: '🍝', ingredients: ['pasta', 'pollo', 'tomate'] },
  { id: 'desayuno', name: 'Desayuno energético', time: '10 min', difficulty: 'Fácil', emoji: '🥑', ingredients: ['aguacate', 'pan', 'yogurt'] },
  { id: 'arroz-pollo', name: 'Arroz con pollo', time: '40 min', difficulty: 'Media', emoji: '🍛', ingredients: ['arroz', 'pollo', 'tomate'] },
]

export const formatPrice = (value) => new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', maximumFractionDigits: 0 }).format(value)
