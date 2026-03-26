'use client'

import { useState } from 'react'
import { Order, OrderStatus } from '@/data/mockOrders'
import { useAdmin } from '@/context/AdminContext'
import StatusBadge from './StatusBadge'

interface OrderCardProps {
  order: Order
  showActions?: boolean
}

const statusFlow: Record<OrderStatus, OrderStatus | null> = {
  neu: 'in_zubereitung',
  in_zubereitung: 'fertig',
  fertig: 'ausgeliefert',
  ausgeliefert: null,
}

const nextLabel: Record<OrderStatus, string> = {
  neu: 'In Zubereitung',
  in_zubereitung: 'Fertig melden',
  fertig: 'Als ausgeliefert',
  ausgeliefert: '',
}

function formatTime(date: Date) {
  return date.toLocaleTimeString('de-AT', { hour: '2-digit', minute: '2-digit' })
}

function getMinutesSince(date: Date) {
  return Math.floor((Date.now() - date.getTime()) / 60000)
}

export default function OrderCard({ order, showActions = true }: OrderCardProps) {
  const [expanded, setExpanded] = useState(false)
  const { updateOrderStatus } = useAdmin()

  const minutesSince = getMinutesSince(order.createdAt)
  const isLate = minutesSince > 15 && order.status !== 'fertig' && order.status !== 'ausgeliefert'
  const nextStatus = statusFlow[order.status]

  return (
    <div
      className={`card p-4 transition-all ${isLate ? 'border-red-500/50 bg-red-950/10' : ''}`}
    >
      <div
        className="flex items-start justify-between gap-2 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-bold text-white text-sm">{order.orderNumber}</span>
            <StatusBadge status={order.status} />
            {isLate && (
              <span className="text-xs text-red-400 font-medium animate-pulse">
                ⚠ {minutesSince} Min.
              </span>
            )}
          </div>
          <div className="text-gray-400 text-sm mt-0.5">{order.customerName}</div>
          <div className="text-gray-600 text-xs mt-0.5">{formatTime(order.createdAt)} Uhr</div>
        </div>
        <div className="text-right flex-shrink-0">
          <div className="text-white font-bold">€ {order.total.toFixed(2).replace('.', ',')}</div>
          <div className="text-gray-500 text-xs">{order.items.reduce((s, i) => s + i.quantity, 0)} Artikel</div>
        </div>
      </div>

      {expanded && (
        <div className="mt-3 pt-3 border-t border-gray-800">
          <div className="space-y-1 mb-3">
            {order.items.map((item, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span className="text-gray-300">
                  <span className="text-gray-500">{item.quantity}x </span>
                  {item.name}
                </span>
                <span className="text-gray-400">€ {(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
              </div>
            ))}
          </div>

          {order.address && (
            <div className="flex items-start gap-1.5 text-xs text-gray-500 mb-2">
              <svg className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {order.address}
            </div>
          )}

          {order.note && (
            <div className="text-xs text-yellow-400/80 bg-yellow-500/10 rounded px-2 py-1 mb-3">
              Hinweis: {order.note}
            </div>
          )}

          {showActions && nextStatus && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                updateOrderStatus(order.id, nextStatus)
              }}
              className="btn-primary text-sm w-full mt-1"
            >
              {nextLabel[order.status]} →
            </button>
          )}
        </div>
      )}
    </div>
  )
}
