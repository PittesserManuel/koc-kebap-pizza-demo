'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAdmin } from '@/context/AdminContext'

const navItems = [
  {
    href: '/',
    label: 'Bestellübersicht',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    href: '/kitchen',
    label: 'Küchen-Monitor',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
      </svg>
    ),
  },
  {
    href: '/products',
    label: 'Produkt-Verwaltung',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
      </svg>
    ),
  },
  {
    href: '/stats',
    label: 'Tages-Statistik',
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
]

export default function Sidebar() {
  const pathname = usePathname()
  const { sidebarOpen, setSidebarOpen, orders } = useAdmin()

  const newOrdersCount = orders.filter(o => o.status === 'neu').length

  return (
    <>
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-20 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed left-0 top-0 h-full z-30 bg-gray-950 border-r border-gray-800 transition-all duration-300 flex flex-col
          ${sidebarOpen ? 'w-64' : 'w-0 lg:w-16'} overflow-hidden`}
      >
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-5 border-b border-gray-800 min-w-[64px]">
          <div className="w-8 h-8 rounded-lg flex-shrink-0 flex items-center justify-center font-bold text-white text-sm"
            style={{ background: 'linear-gradient(135deg, #B83030, #C9922A)' }}>
            K
          </div>
          {sidebarOpen && (
            <div className="overflow-hidden">
              <div className="text-white font-bold text-sm leading-tight whitespace-nowrap">Koc Kebap</div>
              <div className="text-gray-500 text-xs whitespace-nowrap">Admin Panel</div>
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 py-4 overflow-y-auto">
          {navItems.map(item => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => {
                  if (window.innerWidth < 1024) setSidebarOpen(false)
                }}
                className={`flex items-center gap-3 px-4 py-3 mx-2 rounded-lg transition-all relative group
                  ${isActive
                    ? 'bg-paprika/20 text-paprika border border-paprika/30'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800'
                  }`}
              >
                <span className="flex-shrink-0">{item.icon}</span>
                {sidebarOpen && (
                  <span className="text-sm font-medium whitespace-nowrap">{item.label}</span>
                )}
                {item.href === '/' && newOrdersCount > 0 && (
                  <span className={`ml-auto flex-shrink-0 bg-paprika text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center
                    ${!sidebarOpen ? 'absolute -top-1 -right-1' : ''}`}>
                    {newOrdersCount}
                  </span>
                )}
                {!sidebarOpen && (
                  <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-gray-200 text-xs rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                    {item.label}
                  </div>
                )}
              </Link>
            )
          })}
        </nav>

        {/* Footer */}
        {sidebarOpen && (
          <div className="px-4 py-4 border-t border-gray-800">
            <div className="text-xs text-gray-600 text-center">
              Powered by <span className="text-gold font-medium">Stratify</span>
            </div>
          </div>
        )}
      </aside>
    </>
  )
}
