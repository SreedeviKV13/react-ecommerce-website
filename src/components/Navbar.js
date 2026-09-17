
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { UserContext } from '../context/UserContext';

function NavigationBar() {
  const { user, setUser } = useContext(UserContext);

  // Get cart items from Redux
  const cartItems = useSelector(
    (state) => state.cart.items
  );

  // Get wishlist items from Redux
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  // Get orders from Redux
  const orders = useSelector(
    (state) => state.orders.orders
  );

  // Calculate cart item count
  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  // Calculate wishlist count
  const wishlistCount = wishlistItems.length;

  // Calculate order count
  const orderCount = orders.length;

  // Logout
  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Navbar expand="lg" bg="dark" variant="dark">
      <Container>

        {/* Website Logo */}
        <Navbar.Brand as={Link} to="/">
          🛍️ Nexura Store
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="main-navbar" />

        <Navbar.Collapse id="main-navbar">

          {/* Main Navigation */}
          <Nav className="me-auto">

            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/products">
              Products
            </Nav.Link>

            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>

            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>

          </Nav>

          {/* Right Side Navigation */}
          <Nav>

            {/* My Orders */}
            <Nav.Link as={Link} to="/orders">
              📦 My Orders ({orderCount})
            </Nav.Link>

            {/* Wishlist */}
            <Nav.Link as={Link} to="/wishlist">
              ♡ Wishlist ({wishlistCount})
            </Nav.Link>

            {/* Cart */}
            <Nav.Link as={Link} to="/cart">
              🛒 Cart ({cartCount})
            </Nav.Link>

            {/* User Section */}
            {user ? (
              <>
                <Navbar.Text className="me-3">
                  Welcome, {user.name}
                </Navbar.Text>

                <Nav.Link onClick={handleLogout}>
                  Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>

                <Nav.Link as={Link} to="/register">
                  Register
                </Nav.Link>
              </>
            )}

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
