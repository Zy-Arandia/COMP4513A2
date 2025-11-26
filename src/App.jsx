
import HeaderApp from './components/headerApp.jsx';
import HomePage from './homePage.jsx';
import ShoppingCartPage from './shoppingCartPage.jsx';
import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  const url = "https://gist.githubusercontent.com/rconnolly/d37a491b50203d66d043c26f33dbd798/raw/37b5b68c527ddbe824eaed12073d266d5455432a/clothing-compact.json"
  const [productState, setProductState] = useState([]);
  const [shoppingCartState, setShoppingCartState] = useState([]);
  async function getProducts() {
    console.log("lol2");
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      setProductState(result);
      setShoppingCartState(result);
    } catch (error) {
      console.error(error.message);
    }
  }
  useEffect(() => {
    getProducts();
  }, []);
      // console.log(shoppingCartState);
  return (
    <div className='min-h-screen w-screen'>
      <BrowserRouter>
        <HeaderApp />
        <Routes>
          <Route path='/' element={<HomePage products={productState} setProducts={setProductState} addToCart={setShoppingCartState}/>} />
          <Route path='/cart' element={<ShoppingCartPage shoppingCartState={shoppingCartState} addToCart={setShoppingCartState} />} />

        </Routes>
      </BrowserRouter>
      {/* <p>what</p> */}
    </div>
  )
}

export default App;
