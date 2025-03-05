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
import GuestCheckout from './pages/GuestCheckout';
import ReturnOrder from './pages/ReturnOrder';
import Feedback from './pages/Feedback';
import CheckoutForm from './pages/CheckoutForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product" element={<Discover />} />
        <Route exact path="/favourite" element={<Favourite />} />
        <Route exact path="/product-detail/:id" element={<ProductDetail />} />
        <Route exact path="/my-cart" element={<Cart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/checkout-payment" element={<CheckoutForm />} />
        <Route exact path="/payment" element={<Payment />} />
        <Route exact path="/my-profile" element={<Profile />} />
        <Route exact path="/guest-checkout" element={<GuestCheckout />} />
        <Route exact path="/return-order" element={<ReturnOrder />} />
        <Route exact path="/feedback" element={<Feedback />} />
      </Routes>
    </Router>
  );
}

export default App;
