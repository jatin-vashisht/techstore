"use client"

import { ShoppingCart } from "lucide-react"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { Cart } from "./cart"

export function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <nav className="bg-white shadow-md border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <h1 className="text-xl font-bold text-gray-900">TechStore</h1>
              <div className="hidden md:flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Home
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Products
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Categories
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  About
                </a>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </nav>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  )
}
