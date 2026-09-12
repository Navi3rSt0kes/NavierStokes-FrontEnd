import { useState } from 'react'

const currency = new Intl.NumberFormat('es-CO', {
  style: 'currency',
  currency: 'COP',
  maximumFractionDigits: 0,
})

export default function CartPanel({ cart, total }) {
  const [showSuccess, setShowSuccess] = useState(false)

  return (
    <>
      <aside className="lg:sticky lg:top-8 lg:h-[calc(100vh-4rem)]">
        <section className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl bg-slate-900 text-white shadow-xl shadow-slate-300/50">
          <header className="bg-gradient-to-r from-emerald-500 to-teal-500 px-6 py-6">
            <h2 className="text-xl font-bold">🛒 Tu Carrito Agéntico</h2>
            <p className="mt-1 text-sm text-emerald-50">
              Tu selección se actualiza en tiempo real
            </p>
          </header>

          <div className="flex-1 overflow-y-auto px-5 py-4">
            {cart.length === 0 ? (
              <div className="grid h-full min-h-44 place-items-center text-center text-sm leading-6 text-slate-400">
                <p>
                  Tu carrito está vacío.
                  <br />
                  Habla con el agente para empezar.
                </p>
              </div>
            ) : (
              <ul className="divide-y divide-slate-800">
                {cart.map((item) => (
                  <li key={item.id} className="py-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-slate-100">{item.name}</p>
                        <p className="mt-1 text-xs text-slate-400">
                          {currency.format(item.price)} c/u · Cant. {item.quantity}
                        </p>
                      </div>
                      <p className="shrink-0 font-semibold text-emerald-400">
                        {currency.format(item.price * item.quantity)}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <footer className="border-t border-slate-800 bg-slate-950/40 p-5">
            <div className="mb-5 flex items-center justify-between">
              <span className="text-sm text-slate-400">Costo total</span>
              <strong className="text-2xl text-white">{currency.format(total)}</strong>
            </div>
            <button
              onClick={() => setShowSuccess(true)}
              disabled={!cart.length}
              className="w-full rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-emerald-400 disabled:cursor-not-allowed disabled:bg-slate-700 disabled:text-slate-400"
            >
              Pagar / Finalizar Pedido
            </button>
          </footer>
        </section>
      </aside>

      {showSuccess && (
        <div
          className="fixed inset-0 z-10 grid place-items-center bg-slate-950/50 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm rounded-3xl bg-white p-7 text-center shadow-2xl">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-2xl">
              ✓
            </div>
            <h3 className="mt-4 text-xl font-bold text-slate-900">¡Pedido confirmado!</h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              Tu compra fue recibida por el supermercado.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="mt-6 w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white"
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  )
}
