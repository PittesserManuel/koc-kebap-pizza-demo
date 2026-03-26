'use client'

import { useAdmin } from '@/context/AdminContext'
import TopBar from '@/components/TopBar'

const HOURS = Array.from({ length: 11 }, (_, i) => i + 11) // 11:00 to 21:00

function StatCard({
  label,
  value,
  sub,
  color = 'text-white',
}: {
  label: string
  value: string | number
  sub?: string
  color?: string
}) {
  return (
    <div className="card p-5">
      <div className={`text-3xl font-bold ${color}`}>{value}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
      {sub && <div className="text-gray-600 text-xs mt-0.5">{sub}</div>}
    </div>
  )
}

export default function StatsPage() {
  const { orders, products } = useAdmin()

  // Calculate stats
  const totalRevenue = orders.reduce((s, o) => s + o.total, 0)
  const orderCount = orders.length
  const avgOrder = orderCount > 0 ? totalRevenue / orderCount : 0

  // Top 5 items
  const itemCounts: Record<string, { count: number; revenue: number }> = {}
  orders.forEach(order => {
    order.items.forEach(item => {
      if (!itemCounts[item.name]) {
        itemCounts[item.name] = { count: 0, revenue: 0 }
      }
      itemCounts[item.name].count += item.quantity
      itemCounts[item.name].revenue += item.price * item.quantity
    })
  })

  const topItems = Object.entries(itemCounts)
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 5)

  const maxCount = topItems.length > 0 ? topItems[0][1].count : 1

  // Orders per hour
  const ordersPerHour = HOURS.map(hour => ({
    hour,
    count: orders.filter(o => {
      const h = o.createdAt.getHours()
      return h === hour
    }).length,
    revenue: orders
      .filter(o => o.createdAt.getHours() === hour)
      .reduce((s, o) => s + o.total, 0),
  }))

  const maxHourCount = Math.max(...ordersPerHour.map(h => h.count), 1)

  // Status distribution
  const statusCounts = {
    neu: orders.filter(o => o.status === 'neu').length,
    in_zubereitung: orders.filter(o => o.status === 'in_zubereitung').length,
    fertig: orders.filter(o => o.status === 'fertig').length,
    ausgeliefert: orders.filter(o => o.status === 'ausgeliefert').length,
  }

  // Most popular category
  const categoryCounts: Record<string, number> = {}
  orders.forEach(order => {
    order.items.forEach(item => {
      const product = products.find(p => p.name === item.name)
      if (product) {
        categoryCounts[product.category] = (categoryCounts[product.category] || 0) + item.quantity
      }
    })
  })
  const topCategory = Object.entries(categoryCounts).sort((a, b) => b[1] - a[1])[0]

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Tages-Statistik" subtitle="26. März 2026" />

      <div className="p-4 lg:p-6 flex-1">
        {/* Main KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          <StatCard
            label="Tagesumsatz"
            value={`€ ${totalRevenue.toFixed(2).replace('.', ',')}`}
            sub="inkl. aller Bestellungen"
            color="text-gold"
          />
          <StatCard
            label="Bestellungen"
            value={orderCount}
            sub="Heute gesamt"
            color="text-blue-400"
          />
          <StatCard
            label="Ø Bestellwert"
            value={`€ ${avgOrder.toFixed(2).replace('.', ',')}`}
            sub="Pro Bestellung"
            color="text-green-400"
          />
          <StatCard
            label="Top-Kategorie"
            value={topCategory ? topCategory[0].split(' ')[0] : '–'}
            sub={topCategory ? `${topCategory[1]} verkauft` : ''}
            color="text-paprika"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
          {/* Top 5 items */}
          <div className="card p-5">
            <h2 className="text-white font-semibold text-sm mb-4">Top 5 Gerichte</h2>
            <div className="space-y-3">
              {topItems.map(([name, data], i) => (
                <div key={name}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-gray-600 w-4">#{i + 1}</span>
                      <span className="text-sm text-gray-300 truncate max-w-[180px]">{name}</span>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span className="text-xs font-bold text-gold">{data.count}x</span>
                      <span className="text-xs text-gray-600 ml-2">
                        € {data.revenue.toFixed(2).replace('.', ',')}
                      </span>
                    </div>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{
                        width: `${(data.count / maxCount) * 100}%`,
                        background: i === 0 ? '#C9922A' : i === 1 ? '#B83030' : '#374151',
                      }}
                    />
                  </div>
                </div>
              ))}

              {topItems.length === 0 && (
                <div className="text-gray-600 text-sm text-center py-4">Keine Daten</div>
              )}
            </div>
          </div>

          {/* Status distribution */}
          <div className="card p-5">
            <h2 className="text-white font-semibold text-sm mb-4">Status-Verteilung</h2>
            <div className="space-y-3">
              {[
                { key: 'neu', label: 'Neu', color: '#3b82f6' },
                { key: 'in_zubereitung', label: 'In Zubereitung', color: '#eab308' },
                { key: 'fertig', label: 'Fertig', color: '#22c55e' },
                { key: 'ausgeliefert', label: 'Ausgeliefert', color: '#6b7280' },
              ].map(({ key, label, color }) => {
                const count = statusCounts[key as keyof typeof statusCounts]
                const pct = orderCount > 0 ? (count / orderCount) * 100 : 0
                return (
                  <div key={key}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-300">{label}</span>
                      <span className="text-sm font-bold" style={{ color }}>
                        {count} ({pct.toFixed(0)}%)
                      </span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${pct}%`, backgroundColor: color }}
                      />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Orders per hour chart */}
        <div className="card p-5">
          <h2 className="text-white font-semibold text-sm mb-4">Bestellungen nach Uhrzeit</h2>
          <div className="flex items-end gap-1.5 h-32">
            {ordersPerHour.map(({ hour, count }) => (
              <div key={hour} className="flex-1 flex flex-col items-center gap-1">
                <div className="w-full flex flex-col justify-end" style={{ height: '100px' }}>
                  {count > 0 && (
                    <div className="text-center text-xs text-gray-500 mb-1">{count}</div>
                  )}
                  <div
                    className="w-full rounded-t-sm transition-all"
                    style={{
                      height: `${(count / maxHourCount) * 80}px`,
                      minHeight: count > 0 ? '4px' : '0',
                      background: count > 0
                        ? 'linear-gradient(to top, #B83030, #C9922A)'
                        : '#1f2937',
                    }}
                  />
                </div>
                <div className="text-gray-600 text-xs">{hour}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-gray-700 text-xs mt-1">Uhrzeit (Stunden)</div>
        </div>

        {/* Revenue summary */}
        <div className="card p-5 mt-4">
          <h2 className="text-white font-semibold text-sm mb-3">Umsatz-Details</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div>
              <div className="text-xs text-gray-600 mb-1">Mittagsgeschäft (11–15 Uhr)</div>
              <div className="text-white font-bold">
                € {orders
                  .filter(o => o.createdAt.getHours() >= 11 && o.createdAt.getHours() < 15)
                  .reduce((s, o) => s + o.total, 0)
                  .toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Nachmittag (15–18 Uhr)</div>
              <div className="text-white font-bold">
                € {orders
                  .filter(o => o.createdAt.getHours() >= 15 && o.createdAt.getHours() < 18)
                  .reduce((s, o) => s + o.total, 0)
                  .toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Abendgeschäft (18–21 Uhr)</div>
              <div className="text-white font-bold">
                € {orders
                  .filter(o => o.createdAt.getHours() >= 18)
                  .reduce((s, o) => s + o.total, 0)
                  .toFixed(2).replace('.', ',')}
              </div>
            </div>
            <div>
              <div className="text-xs text-gray-600 mb-1">Ø pro Stunde</div>
              <div className="text-white font-bold">
                € {(totalRevenue / 10).toFixed(2).replace('.', ',')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
