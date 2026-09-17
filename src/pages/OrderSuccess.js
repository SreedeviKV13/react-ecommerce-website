import { useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import {
  clearCart
} from '../features/cartSlice';


function OrderSuccess() {

  const location = useLocation();

  const dispatch = useDispatch();


  // Get order information sent from Checkout
  const order = location.state;


  // Clear cart after successful order
  useEffect(() => {

    dispatch(clearCart());

  }, [dispatch]);


  // If order information is missing
  if (!order) {

    return (

      <Container className="py-5 text-center">

        <h2>
          No order information found.
        </h2>

        <Button
          as={Link}
          to="/products"
          variant="primary"
        >
          Continue Shopping
        </Button>

      </Container>

    );
  }


  return (

    <Container className="py-5">

      <div className="row justify-content-center">

        <div className="col-md-7 col-lg-6">

          <Card className="shadow text-center">

            <Card.Body className="p-5">

              <div className="display-4 mb-3">
                ✓
              </div>


              <h1 className="text-success mb-3">
                ORDER SUCCESSFUL
              </h1>


              <p className="lead">
                Thank you for your order!
              </p>


              <hr />


              <div className="mb-3">

                <strong>
                  Order ID
                </strong>

                <p className="mb-0">
                  {order.orderId}
                </p>

              </div>


              <div className="mb-4">

                <strong>
                  Total
                </strong>

                <p className="fs-4 text-primary mb-0">
                  ₹{order.total}
                </p>

              </div>


              <Button
                as={Link}
                to="/products"
                variant="primary"
              >
                Continue Shopping
              </Button>


              <Button
                as={Link}
                to="/orders"
                variant="outline-primary"
                className="ms-2"
              >
                My Orders
              </Button>

            </Card.Body>

          </Card>

        </div>

      </div>

    </Container>

  );
}

export default OrderSuccess;