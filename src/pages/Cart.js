import { useDispatch, useSelector } from 'react-redux';

import { Link } from 'react-router-dom';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} from '../features/cartSlice';


function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.items
    );


    const subtotal = cartItems.reduce(
        (total, item) =>
            total + item.price * item.quantity,
        0
    );


    if (cartItems.length === 0) {

        return (
            <div className="text-center py-5">

                <h1>
                    Shopping Cart
                </h1>

                <p className="text-muted">
                    Your cart is empty.
                </p>

                <Button
                    as={Link}
                    to="/products"
                    variant="primary"
                >
                    Continue Shopping
                </Button>


            </div>
        );

    }


    return (
        <div>

            <h1 className="text-center mb-4">
                Shopping Cart
            </h1>


            {cartItems.map((item) => (

                <Card className="mb-3" key={item.id}>

                    <Card.Body>

                        <div className="row align-items-center">


                            <div className="col-md-2">

                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="img-fluid rounded"
                                />

                            </div>


                            <div className="col-md-3">

                                <h5>
                                    {item.name}
                                </h5>

                                <p className="text-muted mb-0">
                                    ₹{item.price}
                                </p>

                            </div>


                            <div className="col-md-3">

                                <div className="d-flex align-items-center gap-2">

                                    <Button
                                        variant="outline-secondary"
                                        onClick={() =>
                                            dispatch(
                                                decreaseQuantity(item.id)
                                            )
                                        }
                                    >
                                        -
                                    </Button>

                                    <span>
                                        {item.quantity}
                                    </span>

                                    <Button
                                        variant="outline-secondary"
                                        onClick={() =>
                                            dispatch(
                                                increaseQuantity(item.id)
                                            )
                                        }
                                    >
                                        +
                                    </Button>

                                </div>

                            </div>


                            <div className="col-md-2">

                                <strong>
                                    ₹{item.price * item.quantity}
                                </strong>

                            </div>


                            <div className="col-md-2">

                                <Button
                                    variant="outline-danger"
                                    size="sm"
                                    onClick={() =>
                                        dispatch(
                                            removeFromCart(item.id)
                                        )
                                    }
                                >
                                    Remove
                                </Button>

                            </div>

                        </div>

                    </Card.Body>

                </Card>

            ))}


            <div className="text-end mt-4">

                <h4>
                    Subtotal: ₹{subtotal}
                </h4>


                <Button
                    variant="outline-danger"
                    className="me-2"
                    onClick={() => dispatch(clearCart())}
                >
                    Clear Cart
                </Button>


                <Button
                    as={Link}
                    to="/products"
                    variant="primary"
                >
                    Continue Shopping
                </Button>
                <Button
                    as={Link}
                    to="/checkout"
                    variant="success"
                >
                    Checkout
                </Button>

            </div>

        </div>
    );
}

export default Cart;