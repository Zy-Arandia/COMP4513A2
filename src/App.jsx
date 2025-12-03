import HeaderApp from './components/headerApp.jsx';
import ShoppingPage from './shoppingPage.jsx';
import ShoppingCartPage from './shoppingCartPage.jsx';
import ProductPage from './productPage.jsx';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const url = "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json";

  const [productState, setProductState] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  // DYNAMIC FILTER OPTIONS
  const [filterOptions, setFilterOptions] = useState({
    gender: [],
    category: [],
    size: [],
    color: [],
  });

  // CART
  const [shoppingCartState, setShoppingCartState] = useState([]);

  // ACTIVE FILTERS + SORT
  const [filters, setFilters] = useState({
    gender: [],
    category: [],
    size: [],
    color: [],
  });

  const [sort, setSort] = useState("none");

  // FETCH PRODUCTS
  async function getProducts() {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error(`Response status: ${response.status}`);

      const result = await response.json();

      setProductState(result);
      setFilteredProducts(result);

      buildFilterOptions(result);
    } catch (error) {
      console.error(error.message);
    }
  }

  // BUILD FILTER OPTIONS
  function buildFilterOptions(products) {
    const genders = [];
    const categories = [];
    const colors = [];
    const sizes = [];

    products.forEach(p => {
      if (p.gender && !genders.includes(p.gender)) genders.push(p.gender);
      if (p.category && !categories.includes(p.category)) categories.push(p.category);

      // COLORS (array of objects)
      if (Array.isArray(p.color)) {
        p.color.forEach(c => {
          if (c.name && !colors.includes(c.name)) {
            colors.push(c.name);
          }
        });
      }

      // SIZES (array of strings or numbers)
      if (Array.isArray(p.sizes)) {
        p.sizes.forEach(s => {
          if (!sizes.includes(s)) sizes.push(s);
        });
      }
    });

    setFilterOptions({
      gender: genders,
      category: categories,
      size: sizes,
      color: colors,
    });

    console.log("Dynamic filter options:", {
      gender: genders,
      category: categories,
      size: sizes,
      color: colors,
    });
  }


  // CART FUNCTIONS
  const addToCart = (product) => {
    setShoppingCartState(prev => [...prev, product]);
  };

  const removeFromCart = (id) => {
    setShoppingCartState(prev => prev.filter(item => item.id !== id));
  };

  const updateQuantity = (id, qty) => {
    setShoppingCartState(prev =>
      prev.map(item => item.id === id ? { ...item, quantity: qty } : item)
    );
  };

  useEffect(() => {
    getProducts();
  }, []);


  // FILTER + SORT EFFECT
  useEffect(() => {
    console.log("APP: Filters changed:", filters);
    console.log("APP: Sort changed:", sort);

    let result = [...productState];

    // APPLY FILTERS

    // gender
    if (filters.gender.length > 0) {
      result = result.filter(p => filters.gender.includes(p.gender));
    }

    // category
    if (filters.category.length > 0) {
      result = result.filter(p => filters.category.includes(p.category));
    }

    // sizes 
    if (filters.size.length > 0) {
      result = result.filter(p =>
        p.sizes.some(size => filters.size.includes(size))
      );
    }

    // colors 
    if (filters.color.length > 0) {
      result = result.filter(p =>
        p.color.some(c => filters.color.includes(c.name))
      );
    }

    // SORTING
    if (sort === "price_asc") result.sort((a, b) => a.price - b.price);
    if (sort === "price_desc") result.sort((a, b) => b.price - a.price);
    if (sort === "newest") result.sort((a, b) => new Date(b.date) - new Date(a.date));

    console.log("APP: Final filtered products:", result);

    setFilteredProducts(result);
  }, [filters, sort, productState]);


  return (
    <div className='min-h-screen w-screen'>
      <BrowserRouter>
        <HeaderApp />

        <Routes>
          <Route path='/product/:id' element={<ProductPage addToCart={addToCart} />} />

          {/* Gender-filtered routes */}
          <Route
            path='/men'
            element={
              <ShoppingPage
                products={filteredProducts}
                setFilters={setFilters}
                setSort={setSort}
                filters={filters}
                sort={sort}
                addToCart={addToCart}
                filterOptions={filterOptions}
                genderRoute="mens"
              />
            }
          />

          <Route
            path='/women'
            element={
              <ShoppingPage
                products={filteredProducts}
                setFilters={setFilters}
                setSort={setSort}
                filters={filters}
                sort={sort}
                addToCart={addToCart}
                filterOptions={filterOptions}
                genderRoute="womens"
              />
            }
          />

          <Route
            path='/cart'
            element={
              <ShoppingCartPage
                shoppingCartState={shoppingCartState}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                updateQuantity={updateQuantity}
              />
            }
          />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
