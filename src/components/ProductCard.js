import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../features/cartSlice';

import {
  addToWishlist,
  removeFromWishlist
} from '../features/wishlistSlice';

function ProductCard({ product }) {

  const dispatch = useDispatch();

  const wishlistItems = useSelector(
    (state) => state.wishlist.items
  );

  const isWishlisted = wishlistItems.some(
    (item) => item.id === product.id
  );


  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };


  const handleWishlist = () => {

    if (isWishlisted) {

      dispatch(
        removeFromWishlist(product.id)
      );

    } else {

      dispatch(
        addToWishlist(product)
      );

    }
  };


  return (
    <Card className="product-card">

      {/* Product Image */}
      <div className="product-card-image-wrapper">

        <Card.Img
          src={product.image}
          alt={product.name}
          className="product-card-image"
        />


        {/* Wishlist */}
        <button
          type="button"
          className="product-wishlist-button"
          onClick={handleWishlist}
          aria-label="Add to wishlist"
        >
          {isWishlisted ? '♥' : '♡'}
        </button>

      </div>


      {/* Product Information */}
      <Card.Body className="product-card-content">

        <div className="product-card-category">
          {product.category}
        </div>


        <Card.Title className="product-card-title">
          {product.name}
        </Card.Title>


        <div className="product-card-price">
          ₹{product.price}
        </div>


        <div className="product-card-rating">
          ★ {product.rating}
        </div>


        <div className="product-card-stock">
          {product.stock > 0
            ? `${product.stock} items available`
            : 'Out of stock'}
        </div>


        {/* Actions */}
        <div className="product-card-actions">

          <Button
            as={Link}
            to={`/product/${product.id}`}
            variant="outline-primary"
          >
            View
          </Button>


          <Button
            variant="primary"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            Add to Cart
          </Button>

        </div>

      </Card.Body>

    </Card>
  );
}

export default ProductCard;