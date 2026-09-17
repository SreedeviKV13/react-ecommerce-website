
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

import { addOrder } from '../features/orderSlice';


function Checkout() {

  const navigate = useNavigate();
  const dispatch = useDispatch();


  // Get cart items from Redux
  const cartItems = useSelector(
    (state) => state.cart.items
  );


  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (total, item) =>
      total + item.price * item.quantity,
    0
  );


  // Delivery charge
  const delivery = 100;


  // Grand total
  const grandTotal = subtotal + delivery;


  // Customer form data
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: ''
  });


  // Validation errors
  const [errors, setErrors] = useState({});


  // Handle input changes
  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });

  };


  // Validate form
  const validateForm = () => {

    const newErrors = {};


    // Full Name
    if (!formData.fullName.trim()) {

      newErrors.fullName =
        'Full name is required.';

    }


    // Email
    if (!formData.email.trim()) {

      newErrors.email =
        'Email is required.';

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
        formData.email
      )
    ) {

      newErrors.email =
        'Please enter a valid email.';

    }


    // Phone
    if (!formData.phone.trim()) {

      newErrors.phone =
        'Phone number is required.';

    } else if (
      !/^[0-9]{10}$/.test(
        formData.phone
      )
    ) {

      newErrors.phone =
        'Phone number must contain 10 digits.';

    }


    // Address
    if (!formData.address.trim()) {

      newErrors.address =
        'Address is required.';

    }


    // City
    if (!formData.city.trim()) {

      newErrors.city =
        'City is required.';

    }


    // State
    if (!formData.state.trim()) {

      newErrors.state =
        'State is required.';

    }


    // Pincode
    if (!formData.pincode.trim()) {

      newErrors.pincode =
        'Pincode is required.';

    } else if (
      !/^[0-9]{6}$/.test(
        formData.pincode
      )
    ) {

      newErrors.pincode =
        'Pincode must contain 6 digits.';

    }


    // Payment method
    if (!formData.paymentMethod) {

      newErrors.paymentMethod =
        'Please select a payment method.';

    }


    return newErrors;

  };


  // Place order
  const handleSubmit = (event) => {

    event.preventDefault();


    // Validate form
    const validationErrors =
      validateForm();


    setErrors(validationErrors);


    // Stop if there are errors
    if (
      Object.keys(validationErrors).length !== 0
    ) {

      return;

    }


    // Generate Order ID
    const orderId =
      'ORD' + Date.now();


    // Create order object
    const newOrder = {

      orderId: orderId,

      date: new Date().toLocaleDateString(),

      items: cartItems,

      customer: {

        fullName: formData.fullName,

        email: formData.email,

        phone: formData.phone,

        address: formData.address,

        city: formData.city,

        state: formData.state,

        pincode: formData.pincode

      },

      paymentMethod:
        formData.paymentMethod,

      subtotal: subtotal,

      delivery: delivery,

      total: grandTotal,

      status: 'Processing'

    };


    // Add order to Redux
    dispatch(
      addOrder(newOrder)
    );


    // Navigate to Order Success page
    navigate('/order-success', {

      state: {

        orderId: orderId,

        total: grandTotal

      }

    });

  };


  // If cart is empty
  if (cartItems.length === 0) {

    return (

      <Container className="py-5 text-center">

        <h1>
          Checkout
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

      </Container>

    );

  }


  return (

    <Container className="py-5">

      <h1 className="text-center mb-5">
        Checkout
      </h1>


      <div className="row g-4">


        {/* =========================
            CUSTOMER DETAILS
        ========================== */}

        <div className="col-lg-7">

          <Card className="shadow-sm">

            <Card.Body>

              <Card.Title className="mb-4">
                Customer Details
              </Card.Title>


              <Form onSubmit={handleSubmit}>


                {/* Full Name */}

                <Form.Group className="mb-3">

                  <Form.Label>
                    Full Name
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />

                  {errors.fullName && (

                    <Alert
                      variant="danger"
                      className="mt-2 py-2"
                    >
                      {errors.fullName}
                    </Alert>

                  )}

                </Form.Group>


                {/* Email */}

                <Form.Group className="mb-3">

                  <Form.Label>
                    Email
                  </Form.Label>

                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                  />

                  {errors.email && (

                    <Alert
                      variant="danger"
                      className="mt-2 py-2"
                    >
                      {errors.email}
                    </Alert>

                  )}

                </Form.Group>


                {/* Phone */}

                <Form.Group className="mb-3">

                  <Form.Label>
                    Phone
                  </Form.Label>

                  <Form.Control
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter 10 digit phone number"
                  />

                  {errors.phone && (

                    <Alert
                      variant="danger"
                      className="mt-2 py-2"
                    >
                      {errors.phone}
                    </Alert>

                  )}

                </Form.Group>


                {/* Address */}

                <Form.Group className="mb-3">

                  <Form.Label>
                    Address
                  </Form.Label>

                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                  />

                  {errors.address && (

                    <Alert
                      variant="danger"
                      className="mt-2 py-2"
                    >
                      {errors.address}
                    </Alert>

                  )}

                </Form.Group>


                {/* City and State */}

                <div className="row">

                  {/* City */}

                  <div className="col-md-6">

                    <Form.Group className="mb-3">

                      <Form.Label>
                        City
                      </Form.Label>

                      <Form.Control
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        placeholder="Enter city"
                      />

                      {errors.city && (

                        <Alert
                          variant="danger"
                          className="mt-2 py-2"
                        >
                          {errors.city}
                        </Alert>

                      )}

                    </Form.Group>

                  </div>


                  {/* State */}

                  <div className="col-md-6">

                    <Form.Group className="mb-3">

                      <Form.Label>
                        State
                      </Form.Label>

                      <Form.Control
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        placeholder="Enter state"
                      />

                      {errors.state && (

                        <Alert
                          variant="danger"
                          className="mt-2 py-2"
                        >
                          {errors.state}
                        </Alert>

                      )}

                    </Form.Group>

                  </div>

                </div>


                {/* Pincode */}

                <Form.Group className="mb-4">

                  <Form.Label>
                    Pincode
                  </Form.Label>

                  <Form.Control
                    type="text"
                    name="pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                    placeholder="Enter 6 digit pincode"
                  />

                  {errors.pincode && (

                    <Alert
                      variant="danger"
                      className="mt-2 py-2"
                    >
                      {errors.pincode}
                    </Alert>

                  )}

                </Form.Group>


                {/* =========================
                    PAYMENT METHOD
                ========================== */}

                <h5 className="mb-3">
                  Payment Method
                </h5>


                {/* Cash on Delivery */}

                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  label="Cash on Delivery"
                  value="Cash on Delivery"
                  checked={
                    formData.paymentMethod ===
                    'Cash on Delivery'
                  }
                  onChange={handleChange}
                  className="mb-2"
                />


                {/* UPI */}

                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  label="UPI"
                  value="UPI"
                  checked={
                    formData.paymentMethod ===
                    'UPI'
                  }
                  onChange={handleChange}
                  className="mb-2"
                />


                {/* Card */}

                <Form.Check
                  type="radio"
                  name="paymentMethod"
                  label="Credit / Debit Card"
                  value="Credit / Debit Card"
                  checked={
                    formData.paymentMethod ===
                    'Credit / Debit Card'
                  }
                  onChange={handleChange}
                  className="mb-2"
                />


                {errors.paymentMethod && (

                  <Alert
                    variant="danger"
                    className="mt-2 py-2"
                  >
                    {errors.paymentMethod}
                  </Alert>

                )}


                {/* Place Order */}

                <Button
                  type="submit"
                  variant="success"
                  className="w-100 mt-4"
                >
                  PLACE ORDER
                </Button>


              </Form>

            </Card.Body>

          </Card>

        </div>


        {/* =========================
            ORDER SUMMARY
        ========================== */}

        <div className="col-lg-5">

          <Card className="shadow-sm">

            <Card.Body>

              <Card.Title className="mb-4">
                Order Summary
              </Card.Title>


              {/* Cart Products */}

              {cartItems.map((item) => (

                <div
                  key={item.id}
                  className="d-flex justify-content-between mb-3"
                >

                  <div>

                    <strong>
                      {item.name}
                    </strong>

                    <div className="text-muted">
                      Qty: {item.quantity}
                    </div>

                  </div>


                  <div>

                    ₹
                    {item.price * item.quantity}

                  </div>

                </div>

              ))}


              <hr />


              {/* Subtotal */}

              <div className="d-flex justify-content-between mb-2">

                <span>
                  Subtotal
                </span>

                <strong>
                  ₹{subtotal}
                </strong>

              </div>


              {/* Delivery */}

              <div className="d-flex justify-content-between mb-2">

                <span>
                  Delivery
                </span>

                <strong>
                  ₹{delivery}
                </strong>

              </div>


              <hr />


              {/* Grand Total */}

              <div className="d-flex justify-content-between">

                <h5>
                  Grand Total
                </h5>

                <h5 className="text-primary">
                  ₹{grandTotal}
                </h5>

              </div>

            </Card.Body>

          </Card>

        </div>

      </div>

    </Container>

  );

}


export default Checkout;
