'use client'

import { useAdmin } from '@/context/AdminContext'

interface TopBarProps {
  title: string
  subtitle?: string
}

export default function TopBar({ title, subtitle }: TopBarProps) {
  const { sidebarOpen, setSidebarOpen } = useAdmin()

  return (
    <header className="h-16 bg-gray-950 border-b border-gray-800 flex items-center px-4 gap-4 sticky top-0 z-10">
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="p-2 rounded-lg text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-colors flex-shrink-0"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div className="flex-1 min-w-0">
        <h1 className="text-white font-semibold text-lg leading-tight truncate">{title}</h1>
        {subtitle && <p className="text-gray-500 text-xs truncate">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2 text-xs text-gray-500 flex-shrink-0">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
        <span className="hidden sm:inline">Live</span>
      </div>

      <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
        style={{ background: 'linear-gradient(135deg, #B83030, #C9922A)' }}>
        A
      </div>
    </header>
  )
}
