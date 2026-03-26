'use client'

import React, { createContext, useContext, useState, useCallback } from 'react'
import { mockOrders, Order, OrderStatus } from '@/data/mockOrders'
import { mockProducts, Product } from '@/data/mockProducts'

interface AdminContextType {
  orders: Order[]
  products: Product[]
  updateOrderStatus: (orderId: string, status: OrderStatus) => void
  updateProduct: (product: Product) => void
  addProduct: (product: Omit<Product, 'id'>) => void
  deleteProduct: (productId: string) => void
  toggleProductAvailability: (productId: string) => void
  sidebarOpen: boolean
  setSidebarOpen: (open: boolean) => void
}

const AdminContext = createContext<AdminContextType | undefined>(undefined)

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [orders, setOrders] = useState<Order[]>(mockOrders)
  const [products, setProducts] = useState<Product[]>(mockProducts)
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const updateOrderStatus = useCallback((orderId: string, status: OrderStatus) => {
    setOrders(prev =>
      prev.map(o => (o.id === orderId ? { ...o, status } : o))
    )
  }, [])

  const updateProduct = useCallback((product: Product) => {
    setProducts(prev =>
      prev.map(p => (p.id === product.id ? product : p))
    )
  }, [])

  const addProduct = useCallback((product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: `p${Date.now()}`,
    }
    setProducts(prev => [...prev, newProduct])
  }, [])

  const deleteProduct = useCallback((productId: string) => {
    setProducts(prev => prev.filter(p => p.id !== productId))
  }, [])

  const toggleProductAvailability = useCallback((productId: string) => {
    setProducts(prev =>
      prev.map(p => (p.id === productId ? { ...p, available: !p.available } : p))
    )
  }, [])

  return (
    <AdminContext.Provider
      value={{
        orders,
        products,
        updateOrderStatus,
        updateProduct,
        addProduct,
        deleteProduct,
        toggleProductAvailability,
        sidebarOpen,
        setSidebarOpen,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

export function useAdmin() {
  const ctx = useContext(AdminContext)
  if (!ctx) throw new Error('useAdmin must be used within AdminProvider')
  return ctx
}
