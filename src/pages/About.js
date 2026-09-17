import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>

      {/* Hero Section */}
      <section className="about-hero">
        <Container>
          <div className="about-hero-content">
            <p className="about-eyebrow">ABOUT NEXURA STORE </p>

            <h1>
              Shopping made
              <br />
              simple & thoughtful.
            </h1>

            <p className="about-hero-text">
              We believe online shopping should feel easy,
              enjoyable, and trustworthy. NEXURA brings
              carefully selected products together in one
              simple shopping experience.
            </p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="section">
        <Container>
          <div className="row align-items-center g-5">

            <div className="col-lg-6">
              <div className="about-image-placeholder">
                <span>NEXURA STORE</span>
              </div>
            </div>

            <div className="col-lg-6">
              <p className="about-eyebrow">OUR STORY</p>

              <h2>
                A better way to discover
                everyday essentials.
              </h2>

              <p>
                NEXURA STORE was created with a simple idea:
                make online shopping convenient without
                making it complicated.
              </p>

              <p>
                From electronics and fashion to beauty,
                accessories, shoes, and home essentials,
                we bring a variety of products together
                so you can discover what you need in one
                place.
              </p>

              <p>
                Our focus is on a clean shopping experience,
                easy product discovery, and a customer-first
                approach.
              </p>
            </div>

          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="about-values">
        <Container>

          <div className="text-center mb-5">
            <p className="about-eyebrow">WHY NEXURA</p>

            <h2>
              Designed around you.
            </h2>

            <p className="about-section-description">
              Everything we do is focused on making
              your shopping experience better.
            </p>
          </div>

          <div className="row g-4">

            <div className="col-md-4">
              <div className="about-value-card">
                <div className="about-value-icon">✦</div>

                <h3>Curated Selection</h3>

                <p>
                  Explore products across multiple
                  categories, selected to make everyday
                  shopping easier.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-value-card">
                <div className="about-value-icon">♡</div>

                <h3>Customer First</h3>

                <p>
                  We aim to create a simple, clear, and
                  comfortable experience from browsing
                  to checkout.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="about-value-card">
                <div className="about-value-icon">✓</div>

                <h3>Simple Shopping</h3>

                <p>
                  Search, compare, save your favourites,
                  add products to your cart, and place
                  orders with ease.
                </p>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <Container>
          <div className="about-cta-content">

            <p className="about-eyebrow">
              START EXPLORING
            </p>

            <h2>
              Find something you'll love.
            </h2>

            <p>
              Browse our collection and discover your
              next favourite product.
            </p>

            <Button
              as={Link}
              to="/products"
              variant="primary"
              className="mt-3"
            >
              Explore Products
            </Button>

          </div>
        </Container>
      </section>

    </div>
  );
}

export default About;