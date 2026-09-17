import { Routes, Route } from 'react-router-dom';

import NavigationBar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Wishlist from './pages/Wishlist';
import LocalStorageManager from './components/LocalStorageManager';
import Checkout from './pages/Checkout';
import OrderSuccess from './pages/OrderSuccess';
import Orders from './pages/Orders';


function App() {

  return (
    <>

      <LocalStorageManager />

      <NavigationBar />

      <main className="container py-5">

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/products"
            element={<Products />}
          />

          <Route
            path="/product/:id"
            element={<ProductDetails />}
          />

          <Route
            path="/about"
            element={<About />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

          <Route
            path="/login"
            element={<Login />}
          />

          <Route
            path="/register"
            element={<Register />}
          />

          <Route
            path="*"
            element={
              <div className="text-center">
                <h1>404</h1>
                <h2>Page Not Found</h2>
                <p>
                  The page you are looking for does not exist.
                </p>
              </div>
            }
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
          <Route
            path="/wishlist"
            element={<Wishlist />}
          />
          <Route
            path="/checkout"
            element={<Checkout />}
          />
          <Route
            path="/order-success"
            element={<OrderSuccess />}
          />
          <Route path="/orders"
           element={<Orders />} 
           />
        </Routes>

      </main>

      <Footer />

    </>
  );
}

export default App;