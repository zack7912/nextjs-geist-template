'use client'

import React from 'react'
import { useCart, Product } from '../context/CartContext'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = () => {
    try {
      addItem(product)
    } catch (error) {
      console.error('Error adding product to cart:', error)
    }
  }

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square overflow-hidden">
        <img
          src={product.image || '/placeholder-food.jpg'}
          alt={product.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{product.name}</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          {product.description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-2xl font-bold text-primary">
          ${product.price.toFixed(2)}
        </p>
      </CardContent>
      <CardFooter>
        <Button 
          onClick={handleAddToCart}
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
