import HeaderNav from './components/headerNav.jsx';
import HomePage from './homePage.jsx';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderNav />
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </BrowserRouter>
      {/* <p>what</p> */}
    </>
  )
}

export default App
