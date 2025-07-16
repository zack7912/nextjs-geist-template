'use client'

import React from 'react'
import ProductCard from './ProductCard'
import { Product } from '../context/CartContext'

// This will be replaced with your restaurant's actual products
const sampleProducts: Product[] = [
  {
    id: '1',
    name: 'Sample Item 1',
    description: 'This will be replaced with your menu items',
    price: 10.99,
    image: 'https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: '2',
    name: 'Sample Item 2',
    description: 'This will be replaced with your menu items',
    price: 15.99,
    image: 'https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
]

interface ProductCatalogProps {
  products?: Product[]
}

export default function ProductCatalog({ products = sampleProducts }: ProductCatalogProps) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-lg text-muted-foreground">
          No products available at the moment. Please check back later.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-center">Our Menu</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
