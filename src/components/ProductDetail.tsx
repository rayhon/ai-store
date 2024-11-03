import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Product } from "@/types"
import { Star, Plus, Minus } from "lucide-react"
import { useState } from "react"

interface ProductDetailProps {
  product: Product
  isOpen: boolean
  onClose: () => void
  onAddToCart: (product: Product, quantity: number) => void
}

export function ProductDetail({ product, isOpen, onClose, onAddToCart }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    onAddToCart(product, quantity)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full rounded-lg object-cover aspect-square"
            />
            <div className="absolute top-2 right-2 flex gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">4.5</span>
            </div>
          </div>
          
          <div className="flex flex-col gap-4">
            <div>
              <h3 className="font-semibold text-2xl">${product.price}</h3>
              <span className="text-sm text-muted-foreground">
                Category: {product.category}
              </span>
            </div>

            <p className="text-muted-foreground">
              {product.description}
            </p>

            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center border rounded-md">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <Button 
                className="flex-1"
                onClick={handleAddToCart}
              >
                Add to Cart - ${(product.price * quantity).toFixed(2)}
              </Button>
            </div>

            <div className="mt-6 space-y-4">
              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Product Details</h4>
                <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                  <li>High-quality materials</li>
                  <li>1 year warranty</li>
                  <li>Free shipping</li>
                  <li>30-day return policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
} 