# markECIA

> El supermercado que piensa contigo.

MarkECIA es una experiencia de grocery e-commerce inteligente creada para la hackathon global de la Escuela Colombiana de Ingeniería Julio Garavito. Permite explorar productos, armar el mercado, gestionar favoritos y listas, comprar ingredientes de recetas y usar un asistente de compra local preparado para integrarse con IA.

## Demo local

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173).

Para una compilación de producción:

```bash
npm run build
npm run preview
```

## Experiencia disponible

- Inicio con categorías, ofertas, recetas y productos destacados.
- Catálogo navegable con búsqueda, categorías y orden por precio.
- Página de producto con cantidad, favoritos y compra inmediata.
- Carrito global persistente, edición de cantidades y umbral de envío gratis.
- Checkout de entrega, método de envío, pago simulado y confirmación de pedido.
- Historial y timeline de pedido.
- Recetas que agregan sus ingredientes disponibles al carrito.
- Listas de mercado y favoritos persistentes.
- Asistente de compra **mock**: no representa una conexión de IA real; su interfaz está lista para sustituir la respuesta local por un servicio futuro.

## Stack

- React + Vite
- Tailwind CSS
- React Router
- Zustand con persistencia local
- Lucide React

## Arquitectura

```text
src/
├── components/       # Header, catálogo, carrito y asistente
├── hooks/            # Integración preparada para el chat REST
├── lib/data.js       # Productos, categorías y recetas mock
├── store/useStore.js # Carrito y favoritos persistentes
├── types/            # Modelos TypeScript del chat/backend
├── pages.jsx         # Vistas y flujos de compra
└── App.jsx           # Rutas de la aplicación

public/brand/         # Logo, wordmark, isotipo y favicon SVG
```

## Rutas principales

| Ruta | Función |
| --- | --- |
| `/` | Inicio y descubrimiento |
| `/shop` | Catálogo y filtros |
| `/search?q=...` | Resultados de búsqueda |
| `/categories` | Categorías |
| `/product/:id` | Detalle de producto |
| `/cart` | Carrito |
| `/checkout` | Finalización del pedido |
| `/order/success` | Confirmación |
| `/orders/:id` | Seguimiento |
| `/recipes`, `/lists`, `/offers` | Experiencias complementarias |

## Integración de backend

El hook existente `src/hooks/useChat.ts` está listo para utilizar un backend conversacional:

```env
VITE_BACKEND_URL=http://localhost:8000/chat
```

El contrato esperado es:

```json
{
  "response": "Texto del agente",
  "cart": [{ "id": "p1", "name": "Producto", "price": 5000, "quantity": 1 }]
}
```

## Identidad visual

La marca combina un recorrido continuo de compra en forma de `m` con un punto de señal que representa una recomendación inteligente. Los assets SVG y la guía de uso están en [`public/brand`](./public/brand) y [`BRAND.md`](./BRAND.md).

| Color | Valor |
| --- | --- |
| Ink | `#102A2B` |
| Mercado | `#0B8C69` |
| Señal | `#C8F25D` |
| Niebla | `#F7FAF5` |

Tipografía: **Manrope**, con Aptos y Segoe UI como fallbacks del sistema.
