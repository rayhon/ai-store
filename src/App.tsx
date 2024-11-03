import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Layout } from "./components/Layout"
import { HomePage } from "./pages/HomePage"
import { CategoryPage } from "./pages/CategoryPage"
import { CartItem, Product } from "./types"

function App() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [sortBy, setSortBy] = useState<string>("default")

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(currentCart => {
      const existingItem = currentCart.find(item => item.id === product.id)
      
      if (existingItem) {
        return currentCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      
      return [...currentCart, { ...product, quantity }]
    })
  }

  const removeFromCart = (productId: number) => {
    setCart(currentCart => currentCart.filter(item => item.id !== productId))
  }

  return (
    <Router>
      <Layout 
        cart={cart}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        removeFromCart={removeFromCart}
        sortBy={sortBy}
        setSortBy={setSortBy}
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route 
            path="/category/:category" 
            element={
              <CategoryPage 
                searchQuery={searchQuery}
                addToCart={addToCart}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            } 
          />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
