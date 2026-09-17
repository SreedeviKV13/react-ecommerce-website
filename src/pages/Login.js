import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { UserContext } from '../context/UserContext';

function Login() {

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

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

    if (!formData.email) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = 'Please enter a valid email.';
    }

    if (!formData.password) {
      newErrors.password = 'Password is required.';
    }

    return newErrors;
  };


  // Submit form
  const handleSubmit = (event) => {

    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      // Store user information in Context
      setUser({
        name: formData.email.split('@')[0],
        email: formData.email
      });

      // Go to Home
      navigate('/');

    }
  };


  return (
    <Container className="py-5">

      <div className="row justify-content-center">

        <div className="col-md-6 col-lg-5">

          <h1 className="text-center mb-4">
            Login
          </h1>


          <Form onSubmit={handleSubmit}>

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


            {/* Password */}

            <Form.Group className="mb-3">

              <Form.Label>
                Password
              </Form.Label>

              <Form.Control
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
              />

              {errors.password && (
                <Alert
                  variant="danger"
                  className="mt-2 py-2"
                >
                  {errors.password}
                </Alert>
              )}

            </Form.Group>


            <Button
              type="submit"
              variant="primary"
              className="w-100"
            >
              Login
            </Button>

          </Form>

        </div>

      </div>

    </Container>
  );
}

export default Login;