import HeaderApp from './components/headerApp.jsx';
import ShoppingPage from './shoppingPage.jsx';
import ShoppingCartPage from './shoppingCartPage.jsx';
import ProductPage from './productPage.jsx';
import LoginPage from './loginPage.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useProducts } from "./hooks/useProducts";
import { useFilters } from "./hooks/useFilters";
import { useCart } from "./hooks/useCart";
import { useState } from "react";

function App() {
  const url = "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json";

  const { productState, filterOptions } = useProducts(url);
  const { filteredProducts, filterState, setFilters, sort, setSort } = useFilters(productState);
  const { shoppingCartState, addToCart, removeFromCart, updateQuantity } = useCart();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen w-screen">
      <BrowserRouter>
        <HeaderApp 
          shoppingCartState={shoppingCartState}
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
        />

        <Routes>

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

          <Route path="/login" element={<LoginPage setIsLoggedIn={setIsLoggedIn} />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
