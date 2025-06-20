import { Navbar } from "@/components/navbar"
import { ProductCard } from "@/components/product-card"
import { CartProvider } from "@/context/cart-context"

interface Product {
  id: number
  title: string
  price: number
  image: string
  description: string
}

async function getProducts() {
  try {
    // Get the base URL - Vercel automatically provides VERCEL_URL
    const baseUrl = process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : "http://localhost:3000"

    const url = `${baseUrl}/api/products`

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // Use revalidate instead of force-cache
    })

    if (!res.ok) {
      throw new Error(`Failed to fetch products: ${res.status}`)
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    // Return fallback data instead of throwing
    return [
      {
        id: 1,
        title: "Wireless Headphones",
        price: 99.99,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
        description: "High-quality wireless headphones",
      },
      {
        id: 2,
        title: "Smart Watch",
        price: 199.99,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
        description: "Advanced fitness tracking",
      },
      {
        id: 3,
        title: "Laptop Stand",
        price: 49.99,
        image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
        description: "Ergonomic laptop positioning",
      },
    ]
  }
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Featured Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product: Product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>
      </div>
    </CartProvider>
  )
}
