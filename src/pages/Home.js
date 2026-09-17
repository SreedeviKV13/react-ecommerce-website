import ProductList from '../components/ProductList';
import products from '../data/products';
import { Link } from 'react-router-dom';

function Home() {

  const featuredProducts = products.slice(0, 6);

  return (
    <div>

      <section className="text-center mb-5">

        <h1>BIG SALE</h1>

        <h2>Up to 50% OFF</h2>

        <p>
          Discover amazing products at great prices.
        </p>

        <Link
          to="/products"
          className="btn btn-primary"
        >
          SHOP NOW
        </Link>

      </section>


      <section className="mb-5">

        <h2 className="text-center mb-4">
          Categories
        </h2>

        <div className="row text-center">

          <div className="col-md-2">
            <div className="p-3 border rounded">
              Electronics
            </div>
          </div>

          <div className="col-md-2">
            <div className="p-3 border rounded">
              Clothing
            </div>
          </div>

          <div className="col-md-2">
            <div className="p-3 border rounded">
              Shoes
            </div>
          </div>

          <div className="col-md-2">
            <div className="p-3 border rounded">
              Accessories
            </div>
          </div>

          <div className="col-md-2">
            <div className="p-3 border rounded">
              Beauty
            </div>
          </div>

          <div className="col-md-2">
            <div className="p-3 border rounded">
              Home
            </div>
          </div>

        </div>

      </section>


      <section>

        <h2 className="text-center mb-4">
          Featured Products
        </h2>

        <ProductList products={featuredProducts} />

      </section>

    </div>
  );
}

export default Home;

