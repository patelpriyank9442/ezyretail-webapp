import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Discover from './pages/Discover';
import Favourite from './pages/Favourite';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Payment from './pages/Payment';
import Profile from './pages/Profile';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/discover" element={<Discover />} />
        <Route exact path="/favourite" element={<Favourite />} />
        <Route exact path="/product-detail" element={<ProductDetail />} />
        <Route exact path="/my-cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/my-profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
