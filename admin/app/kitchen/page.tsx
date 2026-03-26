'use client'

import { useEffect, useState } from 'react'
import { useAdmin } from '@/context/AdminContext'
import { Order, OrderStatus } from '@/data/mockOrders'
import TopBar from '@/components/TopBar'

const COLUMNS: { status: OrderStatus; label: string; color: string; next?: OrderStatus; nextLabel?: string }[] = [
  {
    status: 'neu',
    label: 'Neu',
    color: 'border-blue-500/40 bg-blue-500/5',
    next: 'in_zubereitung',
    nextLabel: 'Zubereitung starten',
  },
  {
    status: 'in_zubereitung',
    label: 'In Zubereitung',
    color: 'border-yellow-500/40 bg-yellow-500/5',
    next: 'fertig',
    nextLabel: 'Als fertig markieren',
  },
  {
    status: 'fertig',
    label: 'Fertig',
    color: 'border-green-500/40 bg-green-500/5',
    next: 'ausgeliefert',
    nextLabel: 'Ausgeliefert',
  },
]

function Timer({ createdAt }: { createdAt: Date }) {
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const update = () => {
      setElapsed(Math.floor((Date.now() - createdAt.getTime()) / 1000))
    }
    update()
    const interval = setInterval(update, 1000)
    return () => clearInterval(interval)
  }, [createdAt])

  const minutes = Math.floor(elapsed / 60)
  const seconds = elapsed % 60
  const isLate = minutes >= 15

  return (
    <span className={`font-mono text-xs font-bold ${isLate ? 'text-red-400 animate-pulse' : 'text-gray-400'}`}>
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  )
}

function KitchenCard({ order, next, nextLabel }: { order: Order; next?: OrderStatus; nextLabel?: string }) {
  const { updateOrderStatus } = useAdmin()
  const minutesSince = Math.floor((Date.now() - order.createdAt.getTime()) / 60000)
  const isLate = minutesSince >= 15

  return (
    <div className={`rounded-xl border p-3 transition-all ${isLate ? 'border-red-500/60 bg-red-950/20 shadow-red-900/20 shadow-lg' : 'border-gray-700 bg-gray-900'}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="font-bold text-white text-sm">{order.orderNumber}</span>
        <Timer createdAt={order.createdAt} />
      </div>
      <div className="text-gray-400 text-xs mb-2">{order.customerName}</div>

      <div className="space-y-1 mb-3">
        {order.items.map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs">
            <span className="w-5 h-5 rounded bg-gray-800 flex items-center justify-center text-gold font-bold flex-shrink-0">
              {item.quantity}
            </span>
            <span className="text-gray-300 truncate">{item.name}</span>
          </div>
        ))}
      </div>

      {order.note && (
        <div className="text-xs text-yellow-400/80 bg-yellow-500/10 rounded px-2 py-1 mb-2">
          {order.note}
        </div>
      )}

      {isLate && (
        <div className="text-xs text-red-400 font-medium mb-2 text-center">
          Wartezeit: {minutesSince} Minuten!
        </div>
      )}

      {next && nextLabel && (
        <button
          onClick={() => updateOrderStatus(order.id, next)}
          className="w-full py-1.5 rounded-lg text-xs font-medium transition-colors bg-gray-800 hover:bg-gray-700 text-gray-200"
        >
          {nextLabel} →
        </button>
      )}
    </div>
  )
}

export default function KitchenPage() {
  const { orders } = useAdmin()
  const [tick, setTick] = useState(0)

  // Force re-render every 30s to refresh timers display
  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 30000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Küchen-Monitor" subtitle="Live-Ansicht der Bestellungen" />

      <div className="p-4 lg:p-6 flex-1">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {COLUMNS.map(col => {
            const colOrders = orders
              .filter(o => o.status === col.status)
              .sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime())

            return (
              <div key={col.status} className={`rounded-xl border-2 p-3 ${col.color}`}>
                <div className="flex items-center justify-between mb-3 pb-2 border-b border-gray-700/50">
                  <h2 className="font-bold text-white text-sm">{col.label}</h2>
                  <span className="text-xs font-bold bg-gray-800 text-gray-400 rounded-full px-2 py-0.5">
                    {colOrders.length}
                  </span>
                </div>

                {colOrders.length === 0 ? (
                  <div className="text-center text-gray-700 text-xs py-8">
                    Keine Bestellungen
                  </div>
                ) : (
                  <div className="space-y-2">
                    {colOrders.map(order => (
                      <KitchenCard
                        key={order.id}
                        order={order}
                        next={col.next}
                        nextLabel={col.nextLabel}
                      />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Legend */}
        <div className="mt-4 flex items-center gap-4 text-xs text-gray-600">
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-gray-500" />
            Normal
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            Wartezeit über 15 Minuten
          </div>
        </div>
      </div>
    </div>
  )
}
