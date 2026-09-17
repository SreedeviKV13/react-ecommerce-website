import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import { UserContext } from '../context/UserContext';

function Register() {

  const navigate = useNavigate();

  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
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


  // Validate registration form
  const validateForm = () => {

    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }

    if (!formData.email) {

      newErrors.email = 'Email is required.';

    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {

      newErrors.email = 'Please enter a valid email.';

    }


    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required.';
    }


    if (!formData.password) {

      newErrors.password = 'Password is required.';

    } else if (formData.password.length < 6) {

      newErrors.password =
        'Password must be at least 6 characters.';

    }


    if (!formData.confirmPassword) {

      newErrors.confirmPassword =
        'Please confirm your password.';

    } else if (
      formData.password !== formData.confirmPassword
    ) {

      newErrors.confirmPassword =
        'Passwords do not match.';

    }

    return newErrors;
  };


  // Submit
  const handleSubmit = (event) => {

    event.preventDefault();

    const validationErrors = validateForm();

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {

      setUser({
        name: formData.name,
        email: formData.email
      });

      navigate('/');

    }
  };


  return (
    <Container className="py-5">

      <div className="row justify-content-center">

        <div className="col-md-7 col-lg-6">

          <h1 className="text-center mb-4">
            Create Account
          </h1>


          <Form onSubmit={handleSubmit}>

            {/* Name */}

            <Form.Group className="mb-3">

              <Form.Label>
                Name
              </Form.Label>

              <Form.Control
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />

              {errors.name && (
                <Alert variant="danger" className="mt-2 py-2">
                  {errors.name}
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
                <Alert variant="danger" className="mt-2 py-2">
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
                placeholder="Enter your phone number"
              />

              {errors.phone && (
                <Alert variant="danger" className="mt-2 py-2">
                  {errors.phone}
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
                placeholder="Create a password"
              />

              {errors.password && (
                <Alert variant="danger" className="mt-2 py-2">
                  {errors.password}
                </Alert>
              )}

            </Form.Group>


            {/* Confirm Password */}

            <Form.Group className="mb-3">

              <Form.Label>
                Confirm Password
              </Form.Label>

              <Form.Control
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              />

              {errors.confirmPassword && (
                <Alert variant="danger" className="mt-2 py-2">
                  {errors.confirmPassword}
                </Alert>
              )}

            </Form.Group>


            <Button
              type="submit"
              variant="primary"
              className="w-100"
            >
              Register
            </Button>

          </Form>

        </div>

      </div>

    </Container>
  );
}

export default Register;