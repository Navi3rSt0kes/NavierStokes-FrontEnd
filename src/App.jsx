import { Route, Routes, useParams } from 'react-router-dom'
import Header from './components/Header'
import CartDrawer from './components/CartDrawer'
import ShoppingAssistant from './components/ShoppingAssistant'
import { AccountPage, CartPage, CategoriesPage, CheckoutPage, HomePage, ListsPage, OffersPage, OrdersPage, ProductPage, RecipesPage, ShopPage, SuccessPage, WishlistPage } from './pages'

function CategoryShop() {
  const { slug } = useParams()
  return <ShopPage categoryId={slug} />
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#fcfcfa] text-slate-900">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/search" element={<ShopPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:slug" element={<CategoryShop />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order/success" element={<SuccessPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/orders/:id" element={<OrdersPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/recipes" element={<RecipesPage />} />
        <Route path="/lists" element={<ListsPage />} />
        <Route path="/offers" element={<OffersPage />} />
      </Routes>
      <CartDrawer />
      <ShoppingAssistant />
    </div>
  )
}
