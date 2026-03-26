import type { Metadata } from 'next'
import './globals.css'
import { AdminProvider } from '@/context/AdminContext'
import Sidebar from '@/components/Sidebar'
import DemoBanner from '@/components/DemoBanner'

export const metadata: Metadata = {
  title: 'Admin Panel – Koc Kebap & Pizza Baden',
  description: 'Betreiber Admin Panel für Koc Kebap & Pizza Baden',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <body className="bg-gray-950 text-gray-200 min-h-screen">
        <AdminProvider>
          <DemoBanner />
          <div className="flex min-h-screen">
            <Sidebar />
            <main className="flex-1 min-w-0 transition-all duration-300 lg:ml-16">
              {children}
            </main>
          </div>
        </AdminProvider>
      </body>
    </html>
  )
}
