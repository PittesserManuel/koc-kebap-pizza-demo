'use client'

import { useState } from 'react'
import { useAdmin } from '@/context/AdminContext'
import { OrderStatus } from '@/data/mockOrders'
import TopBar from '@/components/TopBar'
import OrderCard from '@/components/OrderCard'
import StatusBadge from '@/components/StatusBadge'

const STATUS_FILTERS: { label: string; value: OrderStatus | 'alle' }[] = [
  { label: 'Alle', value: 'alle' },
  { label: 'Neu', value: 'neu' },
  { label: 'In Zubereitung', value: 'in_zubereitung' },
  { label: 'Fertig', value: 'fertig' },
  { label: 'Ausgeliefert', value: 'ausgeliefert' },
]

export default function DashboardPage() {
  const { orders } = useAdmin()
  const [filter, setFilter] = useState<OrderStatus | 'alle'>('alle')
  const [search, setSearch] = useState('')

  const filtered = orders
    .filter(o => filter === 'alle' || o.status === filter)
    .filter(o =>
      search === '' ||
      o.orderNumber.toLowerCase().includes(search.toLowerCase()) ||
      o.customerName.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime())

  const counts = {
    neu: orders.filter(o => o.status === 'neu').length,
    in_zubereitung: orders.filter(o => o.status === 'in_zubereitung').length,
    fertig: orders.filter(o => o.status === 'fertig').length,
    ausgeliefert: orders.filter(o => o.status === 'ausgeliefert').length,
  }

  const todayRevenue = orders.reduce((s, o) => s + o.total, 0)

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Bestellübersicht" subtitle="Koc Kebap & Pizza Baden" />

      <div className="p-4 lg:p-6 flex-1">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {[
            { label: 'Neue Bestellungen', value: counts.neu, color: 'text-blue-400', bg: 'bg-blue-500/10 border-blue-500/20' },
            { label: 'In Zubereitung', value: counts.in_zubereitung, color: 'text-yellow-400', bg: 'bg-yellow-500/10 border-yellow-500/20' },
            { label: 'Fertig', value: counts.fertig, color: 'text-green-400', bg: 'bg-green-500/10 border-green-500/20' },
            { label: 'Umsatz heute', value: `€ ${todayRevenue.toFixed(2).replace('.', ',')}`, color: 'text-gold', bg: 'bg-gold/10 border-gold/20' },
          ].map(stat => (
            <div key={stat.label} className={`rounded-xl border p-4 ${stat.bg}`}>
              <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Search + Filter */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Bestellung suchen..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input flex-1 text-sm"
          />
          <div className="flex gap-2 flex-wrap">
            {STATUS_FILTERS.map(f => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors
                  ${filter === f.value
                    ? 'bg-paprika text-white'
                    : 'bg-gray-800 text-gray-400 hover:text-gray-200'
                  }`}
              >
                {f.label}
                {f.value !== 'alle' && counts[f.value as OrderStatus] > 0 && (
                  <span className="ml-1 opacity-70">({counts[f.value as OrderStatus]})</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Orders list */}
        {filtered.length === 0 ? (
          <div className="card p-12 text-center text-gray-600">
            Keine Bestellungen gefunden
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3">
            {filtered.map(order => (
              <OrderCard key={order.id} order={order} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
