import { NextResponse } from "next/server"

const products = [
  {
    id: 1,
    title: "Wireless Headphones",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop",
  },
  {
    id: 2,
    title: "Smart Watch",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop",
  },
  {
    id: 3,
    title: "Laptop Stand",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop",
  },
  {
    id: 4,
    title: "Bluetooth Speaker",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop",
  },
  {
    id: 5,
    title: "Phone Case",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=300&h=300&fit=crop",
  },
  {
    id: 6,
    title: "USB Cable",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop",
  },
]

export async function GET() {
  try {
    console.log("API called at:", new Date().toISOString())

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 100))

    const response = NextResponse.json(products)

    // Set cache headers for the API response
    response.headers.set("Cache-Control", "public, max-age=3600, s-maxage=3600")

    return response
  } catch (error) {
    console.error("API Error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
