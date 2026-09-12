import { useState } from 'react'

export default function ChatWindow({ messages, isLoading, error, chatEndRef, onSendMessage }) {
  const [input, setInput] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    const message = input.trim()
    if (!message || isLoading) return
    setInput('')
    await onSendMessage(message)
  }

  return (
    <section className="flex min-h-[620px] flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-200/50">
      <header className="border-b border-slate-100 px-6 py-5">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Supermercado agéntico</p>
        <h1 className="mt-1 text-2xl font-bold tracking-tight text-slate-900">¿Qué necesitas hoy?</h1>
      </header>
      <div className="flex-1 space-y-5 overflow-y-auto px-5 py-6 sm:px-7" aria-live="polite">
        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 sm:text-base ${message.role === 'user' ? 'rounded-br-md bg-slate-900 text-white' : 'rounded-bl-md bg-slate-100 text-slate-700'}`}>{message.content}</div>
          </div>
        ))}
        {isLoading && <div className="flex justify-start"><div className="flex items-center gap-2 rounded-2xl rounded-bl-md bg-slate-100 px-4 py-3 text-sm text-slate-500"><span className="flex gap-1" aria-hidden="true"><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500" /><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:150ms]" /><i className="h-1.5 w-1.5 animate-bounce rounded-full bg-emerald-500 [animation-delay:300ms]" /></span>Pensando...</div></div>}
        <div ref={chatEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="border-t border-slate-100 bg-white p-4 sm:p-5">
        {error && <p className="mb-3 rounded-lg bg-rose-50 px-3 py-2 text-sm text-rose-600">{error}</p>}
        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-2 pl-4 transition focus-within:border-emerald-400 focus-within:ring-4 focus-within:ring-emerald-100">
          <input value={input} onChange={(event) => setInput(event.target.value)} disabled={isLoading} placeholder="Ej. Quiero una cena rápida para celíacos" className="min-w-0 flex-1 bg-transparent py-2 text-sm text-slate-800 outline-none placeholder:text-slate-400 sm:text-base" />
          <button type="submit" disabled={!input.trim() || isLoading} aria-label="Enviar mensaje" className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-emerald-600 text-lg text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:bg-slate-300">↑</button>
        </div>
      </form>
    </section>
  )
}
