
import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';

import {
  removeFromWishlist,
  clearWishlist
} from '../features/wishlistSlice';

import {
  addToCart
} from '../features/cartSlice';


function Wishlist() {

  const dispatch = useDispatch();


  // Get wishlist products from Redux
  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );


  // Empty wishlist
  if (wishlistItems.length === 0) {

    return (

      <Container className="py-5">

        <div className="empty-state">

          <div className="empty-state-icon">
            ♡
          </div>

          <h3>
            Your wishlist is feeling light
          </h3>

          <p>
            Save products you love and find them here
            whenever you're ready.
          </p>

          <Button
            as={Link}
            to="/products"
            variant="primary"
          >
            Browse Products
          </Button>

        </div>

      </Container>

    );
  }


  // Add wishlist product to cart
  const handleAddToCart = (item) => {

    dispatch(addToCart(item));

  };


  return (

    <Container className="py-5">

      {/* Page Header */}

      <div className="page-header">

        <p className="about-eyebrow">
          SAVED FOR LATER
        </p>

        <h1>
          My Wishlist
        </h1>

        <p>
          Products you've saved for your next purchase.
        </p>

      </div>


      {/* Wishlist Products */}

      <div className="row g-4">

        {wishlistItems.map((item) => (

          <div
            className="col-12 col-sm-6 col-lg-4"
            key={item.id}
          >

            <Card className="product-card h-100">

              {/* Product Image */}

              <div className="product-card-image-wrapper">

                <Card.Img
                  src={item.image}
                  alt={item.name}
                  className="product-card-image"
                />

              </div>


              {/* Product Information */}

              <Card.Body className="product-card-content">

                <div className="product-card-category">
                  {item.category}
                </div>


                <Card.Title className="product-card-title">
                  {item.name}
                </Card.Title>


                <div className="product-card-price">
                  ₹{item.price}
                </div>


                <div className="product-card-rating">
                  ★ {item.rating}
                </div>


                {/* Buttons */}

                <div className="product-card-actions">

                  {/* View Product */}

                  <Button
                    as={Link}
                    to={`/product/${item.id}`}
                    variant="outline-primary"
                  >
                    View
                  </Button>


                  {/* Add To Cart */}

                  <Button
                    variant="primary"
                    onClick={() =>
                      handleAddToCart(item)
                    }
                  >
                    Add to Cart
                  </Button>

                </div>


                {/* Remove */}

                <Button
                  variant="outline-danger"
                  className="w-100 mt-2"
                  onClick={() =>
                    dispatch(
                      removeFromWishlist(item.id)
                    )
                  }
                >
                  ♥ Remove
                </Button>

              </Card.Body>

            </Card>

          </div>

        ))}

      </div>


      {/* Clear Wishlist */}

      <div className="text-end mt-4">

        <Button
          variant="outline-danger"
          onClick={() =>
            dispatch(clearWishlist())
          }
        >
          Clear Wishlist
        </Button>

      </div>

    </Container>

  );
}


export default Wishlist;

