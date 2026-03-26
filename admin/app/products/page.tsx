'use client'

import { useState } from 'react'
import { useAdmin } from '@/context/AdminContext'
import { Product, CATEGORIES } from '@/data/mockProducts'
import TopBar from '@/components/TopBar'

interface ProductFormData {
  name: string
  category: string
  price: string
  description: string
  available: boolean
}

const emptyForm: ProductFormData = {
  name: '',
  category: CATEGORIES[0],
  price: '',
  description: '',
  available: true,
}

function ProductRow({
  product,
  onEdit,
  onDelete,
  onToggle,
}: {
  product: Product
  onEdit: (p: Product) => void
  onDelete: (id: string) => void
  onToggle: (id: string) => void
}) {
  const [confirmDelete, setConfirmDelete] = useState(false)

  return (
    <div className={`card p-3 flex items-center gap-3 transition-opacity ${!product.available ? 'opacity-50' : ''}`}>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-white font-medium text-sm">{product.name}</span>
          {!product.available && (
            <span className="text-xs bg-gray-700 text-gray-400 px-1.5 py-0.5 rounded">Nicht verfügbar</span>
          )}
        </div>
        <div className="text-gray-500 text-xs mt-0.5 truncate">{product.description}</div>
      </div>

      <div className="text-gold font-bold text-sm flex-shrink-0">
        € {product.price.toFixed(2).replace('.', ',')}
      </div>

      <div className="flex items-center gap-1.5 flex-shrink-0">
        {/* Toggle availability */}
        <button
          onClick={() => onToggle(product.id)}
          title={product.available ? 'Deaktivieren' : 'Aktivieren'}
          className={`p-1.5 rounded-lg transition-colors ${
            product.available
              ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30'
              : 'bg-gray-800 text-gray-600 hover:bg-gray-700'
          }`}
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={product.available
                ? 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                : 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z'
              }
            />
          </svg>
        </button>

        {/* Edit */}
        <button
          onClick={() => onEdit(product)}
          className="p-1.5 rounded-lg bg-gray-800 text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-colors"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>

        {/* Delete */}
        {confirmDelete ? (
          <div className="flex items-center gap-1">
            <button
              onClick={() => onDelete(product.id)}
              className="p-1.5 rounded-lg bg-red-600 text-white hover:bg-red-700 transition-colors text-xs font-medium px-2"
            >
              Ja
            </button>
            <button
              onClick={() => setConfirmDelete(false)}
              className="p-1.5 rounded-lg bg-gray-700 text-gray-300 hover:bg-gray-600 transition-colors text-xs font-medium px-2"
            >
              Nein
            </button>
          </div>
        ) : (
          <button
            onClick={() => setConfirmDelete(true)}
            className="p-1.5 rounded-lg bg-gray-800 text-gray-600 hover:text-red-400 hover:bg-red-500/10 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

function ProductModal({
  initial,
  onSave,
  onClose,
}: {
  initial: ProductFormData & { id?: string }
  onSave: (data: ProductFormData & { id?: string }) => void
  onClose: () => void
}) {
  const [form, setForm] = useState(initial)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(form)
  }

  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="card p-6 w-full max-w-md">
        <h2 className="text-white font-bold text-lg mb-4">
          {form.id ? 'Produkt bearbeiten' : 'Neues Produkt'}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="text-gray-400 text-xs mb-1 block">Name *</label>
            <input
              type="text"
              required
              value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              className="input w-full text-sm"
              placeholder="Produktname"
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs mb-1 block">Kategorie *</label>
            <select
              value={form.category}
              onChange={e => setForm(f => ({ ...f, category: e.target.value }))}
              className="input w-full text-sm"
            >
              {CATEGORIES.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-gray-400 text-xs mb-1 block">Preis (€) *</label>
            <input
              type="number"
              required
              min="0"
              step="0.10"
              value={form.price}
              onChange={e => setForm(f => ({ ...f, price: e.target.value }))}
              className="input w-full text-sm"
              placeholder="9.90"
            />
          </div>

          <div>
            <label className="text-gray-400 text-xs mb-1 block">Beschreibung</label>
            <textarea
              value={form.description}
              onChange={e => setForm(f => ({ ...f, description: e.target.value }))}
              className="input w-full text-sm resize-none"
              rows={2}
              placeholder="Kurze Beschreibung des Produkts"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="available"
              checked={form.available}
              onChange={e => setForm(f => ({ ...f, available: e.target.checked }))}
              className="w-4 h-4 rounded"
            />
            <label htmlFor="available" className="text-gray-400 text-sm">Verfügbar</label>
          </div>

          <div className="flex gap-2 pt-2">
            <button type="submit" className="btn-primary flex-1">
              Speichern
            </button>
            <button type="button" onClick={onClose} className="btn-secondary flex-1">
              Abbrechen
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default function ProductsPage() {
  const { products, updateProduct, addProduct, deleteProduct, toggleProductAvailability } = useAdmin()
  const [editProduct, setEditProduct] = useState<(ProductFormData & { id?: string }) | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string>('alle')
  const [search, setSearch] = useState('')

  const categories = ['alle', ...CATEGORIES]

  const filtered = products
    .filter(p => selectedCategory === 'alle' || p.category === selectedCategory)
    .filter(p =>
      search === '' ||
      p.name.toLowerCase().includes(search.toLowerCase())
    )

  const grouped = CATEGORIES.reduce((acc, cat) => {
    const catProducts = filtered.filter(p => p.category === cat)
    if (catProducts.length > 0) acc[cat] = catProducts
    return acc
  }, {} as Record<string, typeof products>)

  const handleSave = (data: ProductFormData & { id?: string }) => {
    const price = parseFloat(data.price)
    if (data.id) {
      updateProduct({
        id: data.id,
        name: data.name,
        category: data.category,
        price,
        description: data.description,
        available: data.available,
      })
    } else {
      addProduct({
        name: data.name,
        category: data.category,
        price,
        description: data.description,
        available: data.available,
      })
    }
    setEditProduct(null)
  }

  const handleEdit = (product: Product) => {
    setEditProduct({
      id: product.id,
      name: product.name,
      category: product.category,
      price: String(product.price),
      description: product.description,
      available: product.available,
    })
  }

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar title="Produkt-Verwaltung" subtitle={`${products.length} Produkte`} />

      <div className="p-4 lg:p-6 flex-1">
        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-4">
          <input
            type="text"
            placeholder="Produkt suchen..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="input flex-1 text-sm"
          />
          <button
            onClick={() => setEditProduct({ ...emptyForm })}
            className="btn-gold flex items-center gap-2 text-sm whitespace-nowrap"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Neues Produkt
          </button>
        </div>

        {/* Category tabs */}
        <div className="flex gap-2 flex-wrap mb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors
                ${selectedCategory === cat
                  ? 'bg-paprika text-white'
                  : 'bg-gray-800 text-gray-400 hover:text-gray-200'
                }`}
            >
              {cat === 'alle' ? 'Alle Kategorien' : cat}
            </button>
          ))}
        </div>

        {/* Products grouped by category */}
        <div className="space-y-6">
          {Object.entries(grouped).map(([category, catProducts]) => (
            <div key={category}>
              <h3 className="text-gray-400 text-xs font-medium uppercase tracking-wider mb-2 flex items-center gap-2">
                <span>{category}</span>
                <span className="text-gray-700">({catProducts.length})</span>
              </h3>
              <div className="space-y-2">
                {catProducts.map(product => (
                  <ProductRow
                    key={product.id}
                    product={product}
                    onEdit={handleEdit}
                    onDelete={deleteProduct}
                    onToggle={toggleProductAvailability}
                  />
                ))}
              </div>
            </div>
          ))}

          {Object.keys(grouped).length === 0 && (
            <div className="card p-12 text-center text-gray-600">
              Keine Produkte gefunden
            </div>
          )}
        </div>
      </div>

      {editProduct && (
        <ProductModal
          initial={editProduct}
          onSave={handleSave}
          onClose={() => setEditProduct(null)}
        />
      )}
    </div>
  )
}
