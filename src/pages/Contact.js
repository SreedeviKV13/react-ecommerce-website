import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div>

      {/* Contact Hero */}
      <section className="contact-hero">
        <Container>

          <div className="page-header">
            <p className="about-eyebrow">
              GET IN TOUCH
            </p>

            <h1>
              We'd love to hear from you.
            </h1>

            <p>
              Have a question, suggestion, or need help?
              Our team is here to help.
            </p>
          </div>

        </Container>
      </section>

      {/* Contact Section */}
      <section className="section">
        <Container>

          <div className="row g-5">

            {/* Contact Information */}
            <div className="col-lg-5">

              <p className="about-eyebrow">
                CONTACT INFORMATION
              </p>

              <h2>
                Let's start a conversation.
              </h2>

              <p className="contact-description">
                Whether you have a question about a product,
                your order, or anything else, feel free to
                reach out to us.
              </p>

              <div className="contact-info-list">

                <div className="contact-info-item">
                  <div className="contact-icon">
                    ✉
                  </div>

                  <div>
                    <h5>Email</h5>
                    <p>support@=nexura.com</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    ☎
                  </div>

                  <div>
                    <h5>Phone</h5>
                    <p>+91 98765 43210</p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    ⌖
                  </div>

                  <div>
                    <h5>Address</h5>
                    <p>
                      NEXURA Store
                      <br />
                      Kerala, India
                    </p>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-icon">
                    ◷
                  </div>

                  <div>
                    <h5>Business Hours</h5>
                    <p>
                      Monday – Saturday
                      <br />
                      9:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Contact Form */}
            <div className="col-lg-7">

              <div className="contact-form-card">

                <h3>
                  Send us a message
                </h3>

                <p className="mb-4">
                  Fill in the form below and we'll get
                  back to you as soon as possible.
                </p>

                {submitted && (
                  <Alert
                    variant="success"
                    className="mb-4"
                  >
                    Thank you! Your message has been
                    submitted successfully.
                  </Alert>
                )}

                <Form onSubmit={handleSubmit}>

                  <div className="row">

                    <div className="col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Your Name
                        </Form.Label>

                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Enter your name"
                          required
                        />
                      </Form.Group>
                    </div>

                    <div className="col-md-6">
                      <Form.Group className="mb-3">
                        <Form.Label>
                          Email Address
                        </Form.Label>

                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter your email"
                          required
                        />
                      </Form.Group>
                    </div>

                  </div>

                  <Form.Group className="mb-3">
                    <Form.Label>
                      Subject
                    </Form.Label>

                    <Form.Control
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <Form.Label>
                      Message
                    </Form.Label>

                    <Form.Control
                      as="textarea"
                      rows={6}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your message..."
                      required
                    />
                  </Form.Group>

                  <Button
                    type="submit"
                    variant="primary"
                    className="contact-submit-button"
                  >
                    Send Message
                  </Button>

                </Form>

              </div>

            </div>

          </div>

        </Container>
      </section>

    </div>
  );
}

export default Contact;