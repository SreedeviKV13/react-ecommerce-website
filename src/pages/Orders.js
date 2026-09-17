import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';


function Orders() {

  const orders = useSelector(
    (state) => state.orders.orders
  );


  // No orders
  if (orders.length === 0) {

    return (

      <Container className="py-5 text-center">

        <h1>
          My Orders
        </h1>

        <p className="text-muted">
          You have not placed any orders yet.
        </p>

      </Container>

    );
  }


  return (

    <Container className="py-5">

      <h1 className="text-center mb-5">
        My Orders
      </h1>


      {orders.map((order) => (

        <Card
          key={order.orderId}
          className="mb-4 shadow-sm"
        >

          <Card.Body>

            <div className="row align-items-center">

              {/* Order ID */}

              <div className="col-md-3">

                <p className="text-muted mb-1">
                  Order ID
                </p>

                <h5>
                  {order.orderId}
                </h5>

              </div>


              {/* Date */}

              <div className="col-md-2">

                <p className="text-muted mb-1">
                  Date
                </p>

                <p className="mb-0">
                  {order.date}
                </p>

              </div>


              {/* Amount */}

              <div className="col-md-2">

                <p className="text-muted mb-1">
                  Amount
                </p>

                <strong>
                  ₹{order.total}
                </strong>

              </div>


              {/* Payment */}

              <div className="col-md-2">

                <p className="text-muted mb-1">
                  Payment
                </p>

                <p className="mb-0">
                  {order.paymentMethod}
                </p>

              </div>


              {/* Status */}

              <div className="col-md-3">

                <p className="text-muted mb-1">
                  Status
                </p>

                <Badge bg="warning" text="dark">
                  {order.status}
                </Badge>

              </div>

            </div>


            <hr />


            {/* Ordered Products */}

            <h6>
              Products
            </h6>

            {order.items.map((item) => (

              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >

                <span>
                  {item.name} × {item.quantity}
                </span>

                <strong>
                  ₹{item.price * item.quantity}
                </strong>

              </div>

            ))}

          </Card.Body>

        </Card>

      ))}

    </Container>

  );
}

export default Orders;