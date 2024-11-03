import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Menu, Search, ShoppingCart } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { CartItem } from "@/types"
import { useNavigate, Link } from "react-router-dom"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { categories } from "@/data/categories"

interface LayoutProps {
  children: React.ReactNode
  cart: CartItem[]
  searchQuery: string
  setSearchQuery: (query: string) => void
  removeFromCart: (id: number) => void
  sortBy: string
  setSortBy: (sort: string) => void
}

export function Layout({ children, cart, searchQuery, setSearchQuery, removeFromCart }: LayoutProps) {
  const navigate = useNavigate()
  const cartTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen">
      <nav className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-4 mt-4">
                {categories.map((category) => (
                  <Button
                    key={category.name}
                    variant="ghost"
                    className="justify-start"
                    onClick={() => navigate(`/category/${category.name.toLowerCase()}`)}
                  >
                    <span className="mr-2">{category.icon}</span>
                    {category.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
          <Link to="/" className="text-xl font-bold">ShopClone</Link>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="relative w-64">
            <Input 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute right-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" size="icon" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {cart.length > 0 && (
                  <Badge 
                    className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0"
                    variant="destructive"
                  >
                    {cart.reduce((sum, item) => sum + item.quantity, 0)}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground">Your cart is empty</p>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-3">
                      <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-12 h-12 object-cover rounded"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{item.title}</p>
                        <p className="text-sm text-muted-foreground">
                          {item.quantity} × ${item.price}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8"
                        onClick={() => removeFromCart(item.id)}
                      >
                        ×
                      </Button>
                    </div>
                  ))}
                  <div className="border-t pt-4">
                    <p className="font-medium text-right">
                      Total: ${cartTotal.toFixed(2)}
                    </p>
                  </div>
                </div>
              )}
            </PopoverContent>
          </Popover>
        </div>
      </nav>
      <main className="p-6">
        {children}
      </main>
    </div>
  )
} 