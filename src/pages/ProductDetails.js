import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import products from '../data/products';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import {
    addToCart
} from '../features/cartSlice';
import {
    addToWishlist,
    removeFromWishlist
} from '../features/wishlistSlice';
function ProductDetails() {

    const { id } = useParams();

    const navigate = useNavigate();

    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    // Find the selected product
    const product = products.find(
        (product) => product.id === Number(id)
    );
    // Get wishlist products from Redux
    const wishlistItems = useSelector(
        (state) => state.wishlist.items
    );
    // Check whether product is already in wishlist
    const isWishlisted = product
        ? wishlistItems.some(
            (item) => item.id === product.id
        )
        : false;
    // Add / remove wishlist
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
    // Add product to cart
    const handleAddToCart = () => {
        dispatch(
            addToCart({
                ...product,
                quantity: quantity
            })
        );
    };
    // Product not found
    if (!product) {
        return (
            <div className="container py-5 text-center">
                <h2>
                    Product Not Found
                </h2>
                <p className="text-muted">
                    The product you are looking for
                    does not exist.
                </p>
                <Button
                    variant="primary"
                    onClick={() => navigate('/products')}
                >
                    Back to Products
                </Button>

            </div>
        );
    }
    return (
        <div className="container py-5">
            <div className="row g-5">
                {/* =========================
                    PRODUCT IMAGE
                ========================== */}
                <div className="col-lg-6">
                    <Card className="product-detail-image-card">
                        <Card.Img
                            src={product.image}
                            alt={product.name}
                            className="product-detail-image"
                        />
                    </Card>
                </div>
                {/* =========================
                    PRODUCT INFORMATION
                ========================== */}
                <div className="col-lg-6">
                    <div className="product-detail-content">
                        {/* Category */}
                        <p className="product-detail-category">
                            {product.category}
                        </p>
                        {/* Product Name */}
                        <h1 className="product-detail-title">
                            {product.name}
                        </h1>
                        {/* Rating */}
                        <div className="product-detail-rating">
                            ★ {product.rating}
                        </div>
                        {/* Price */}
                        <div className="product-detail-price">
                            ₹{product.price}
                        </div>
                        {/* Description */}
                        <p className="product-detail-description">
                            {product.description}
                        </p>
                        {/* Stock */}
                        <div className="product-detail-stock">
                            <strong>
                                Stock:
                            </strong>{' '}
                            {product.stock > 0
                                ? `${product.stock} available`
                                : 'Out of Stock'}
                        </div>
                        {/* =========================
                            QUANTITY
                        ========================== */}
                        {product.stock > 0 && (
                            <div className="product-quantity">
                                <span>
                                    Quantity
                                </span>
                                <div className="quantity-control">
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() =>
                                            setQuantity(
                                                quantity > 1
                                                    ? quantity - 1
                                                    : 1
                                            )
                                        }
                                    >                                        −
                                    </Button>
                                    <span className="quantity-number">
                                        {quantity}
                                    </span>
                                    <Button
                                        variant="outline-secondary"
                                        onClick={() =>
                                            setQuantity(
                                                quantity < product.stock
                                                    ? quantity + 1
                                                    : product.stock
                                            )
                                        }
                                    >
                                        +
                                    </Button>
                                </div>
                            </div>
                        )}
                        {/* =========================
                            ACTION BUTTONS
                        ========================== */}
                        <div className="product-detail-actions">
                            {/* Add To Cart */}
                            <Button
                                variant="primary"
                                className="add-to-cart-detail"
                                disabled={product.stock === 0}
                                onClick={handleAddToCart}
                            >
                                {product.stock === 0
                                    ? 'Out of Stock'
                                    : 'Add to Cart'}
                            </Button>
                            {/* Wishlist */}
                            <Button
                                variant="outline-danger"
                                onClick={handleWishlist}
                            >
                                {isWishlisted
                                    ? '♥ Remove from Wishlist'
                                    : '♡ Add to Wishlist'}
                            </Button>
                        </div>
                        {/* Back */}
                        <Button
                            variant="link"
                            className="back-products-button"
                            onClick={() =>
                                navigate('/products')
                            }
                        >
                            ← Back to Products
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ProductDetails;