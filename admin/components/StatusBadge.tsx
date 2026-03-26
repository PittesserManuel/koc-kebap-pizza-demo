import { OrderStatus } from '@/data/mockOrders'

const labels: Record<OrderStatus, string> = {
  neu: 'Neu',
  in_zubereitung: 'In Zubereitung',
  fertig: 'Fertig',
  ausgeliefert: 'Ausgeliefert',
}

export default function StatusBadge({ status }: { status: OrderStatus }) {
  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium status-${status}`}>
      {labels[status]}
    </span>
  )
}
