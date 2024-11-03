import { Link } from "react-router-dom"
import { categories } from "@/data/categories"
import { products } from "@/data/products"

export function HomePage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/category/${category.name.toLowerCase()}`}
          className="block p-6 rounded-lg border hover:border-primary transition-colors"
        >
          <div className="text-4xl mb-2">{category.icon}</div>
          <h2 className="text-xl font-semibold">{category.name}</h2>
          <p className="text-muted-foreground">
            {products.filter(p => p.category === category.name).length} products
          </p>
        </Link>
      ))}
    </div>
  )
} 