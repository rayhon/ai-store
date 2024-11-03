import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { products} from "@/data/products"
import { useParams, useSearchParams } from "react-router-dom"
import { ProductDetail } from "@/components/ProductDetail"
import { useState } from "react"
import { Product } from "@/types"

interface CategoryPageProps {
  searchQuery: string
  addToCart: (product: Product, quantity?: number) => void
  sortBy: string
  setSortBy: React.Dispatch<React.SetStateAction<string>>
}

const ITEMS_PER_PAGE = 12

export function CategoryPage({ searchQuery, addToCart, sortBy, setSortBy }: CategoryPageProps) {
  const { category } = useParams()
  const [searchParams, setSearchParams] = useSearchParams()
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  
  const currentPage = Number(searchParams.get("page")) || 1

  const filteredProducts = products.filter(product => 
    product.category.toLowerCase() === category?.toLowerCase() &&
    (searchQuery === "" || 
     product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     product.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE

  const sortProducts = (products: Product[]) => {
    switch (sortBy) {
      case 'price-low':
        return [...products].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...products].sort((a, b) => b.price - a.price);
      case 'rating':
        return [...products].sort((a, b) => b.rating - a.rating);
      default:
        return products;
    }
  };

  const sortedProducts = sortProducts(filteredProducts);
  const paginatedProducts = sortedProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() })
  }

  return (
    <>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold capitalize">{category}</h1>
        <select 
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-md p-2"
        >
          <option value="">Sort by</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Rating</option>
        </select>
      </div>
      {filteredProducts.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          No products found matching "{searchQuery}"
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {paginatedProducts.map((product) => (
              <Card 
                key={product.id}
                className="cursor-pointer hover:shadow-lg transition-shadow"
                onClick={() => setSelectedProduct(product)}
              >
                <CardHeader>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <CardTitle>{product.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground line-clamp-2">{product.description}</p>
                  <p className="text-lg font-bold mt-2">${product.price}</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full"
                    onClick={(e) => {
                      e.stopPropagation()
                      addToCart(product)
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-8">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious 
                    onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                    className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <PaginationItem key={page}>
                    <PaginationLink
                      onClick={() => handlePageChange(page)}
                      isActive={currentPage === page}
                    >
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                <PaginationItem>
                  <PaginationNext 
                    onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                    className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </>
      )}

      {selectedProduct && (
        <ProductDetail
          product={selectedProduct}
          isOpen={!!selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onAddToCart={addToCart}
        />
      )}
    </>
  )
} 