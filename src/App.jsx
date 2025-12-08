import HeaderApp from './components/headerApp.jsx';
import ShoppingPage from './shoppingPage.jsx';
import ShoppingCartPage from './shoppingCartPage.jsx';
import ProductPage from './productPage.jsx';
import LoginPage from './loginPage.jsx';
import HomePage from './homePage.jsx';
import AdminPage from './adminPage.jsx';
import AboutPage from './aboutPage.jsx';
import Footer from './components/footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useProducts } from "./hooks/useProducts";
import { useFilters } from "./hooks/useFilters";
import { useCart } from "./hooks/useCart";
import { useState } from "react";

function App() {
  const url = "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json";

  const { productState, filterOptions, top10BySales, top10ByProfit, salesAndProfitByCategory, salesByGender } = useProducts(url);
  const { filteredProducts, filterState, setFilters, sort, setSort } = useFilters(productState);
  const { shoppingCartState, addToCart, removeFromCart, updateQuantity } = useCart();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-screen flex flex-col justify-between">
      <BrowserRouter>
        <HeaderApp
          shoppingCartState={shoppingCartState}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <Routes>

          <Route path="/"
            element={<HomePage top10BySales={top10BySales}
            />}
          />

          <Route path="/product/:id"
            element={
              <ProductPage
                addToCart={addToCart}
                productState={productState}
                isLoggedIn={isLoggedIn}
              />
            }
          />

          <Route path="/men"
            element={
              <ShoppingPage
                products={filteredProducts}
                filters={filterState}
                sort={sort}
                setFilters={setFilters}
                setSort={setSort}
                addToCart={addToCart}
                filterOptions={filterOptions}
                genderRoute="mens"
              />
            }
          />

          <Route path="/women"
            element={
              <ShoppingPage
                products={filteredProducts}
                filters={filterState}
                sort={sort}
                setFilters={setFilters}
                setSort={setSort}
                addToCart={addToCart}
                filterOptions={filterOptions}
                genderRoute="womens"
              />
            }
          />

          <Route path="/cart"
            element={
              <ShoppingCartPage
                shoppingCartState={shoppingCartState}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />

          <Route
            path="/login"
            element={
              <LoginPage
                setIsLoggedIn={setIsLoggedIn}
              />
            }
          />

          <Route
            path="/admin"
            element={
              <AdminPage
                top10BySales={top10BySales}
                top10ByProfit={top10ByProfit}
                salesAndProfitByCategory={salesAndProfitByCategory}
                salesByGender={salesByGender}
              />
            }
          />

          <Route 
          path="/about"
          element={
            <AboutPage />
          }
          />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
