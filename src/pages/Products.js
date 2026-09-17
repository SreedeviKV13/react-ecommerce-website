import { useEffect, useRef, useState } from 'react';

import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import ProductList from '../components/ProductList';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

import useProducts from '../hooks/useProducts';

function Products() {

  // Get product data from custom hook
  const {
    products,
    loading,
    error,
    retry
  } = useProducts();

  // Search state
  const [search, setSearch] = useState('');

  // Category state
  const [category, setCategory] = useState('All');

  // Sorting state
  const [sort, setSort] = useState('');

  // useRef for search input
  const searchRef = useRef(null);

  // Automatically focus search box
  // after products are loaded
  useEffect(() => {
    if (!loading && !error && searchRef.current) {
      searchRef.current.focus();
    }
  }, [loading, error]);

  // Loading state
  if (loading) {
    return (
      <Container className="py-5">
        <Loading />
      </Container>
    );
  }

  // Error state
  if (error) {
    return (
      <Container className="py-5">
        <ErrorMessage
          message={error}
          onRetry={retry}
        />
      </Container>
    );
  }

  // Get unique categories
  const categories = [
    'All',
    ...new Set(
      products.map((product) => product.category)
    )
  ];

  // Filter products
  let filteredProducts = products.filter((product) => {

    const matchesSearch =
      product.name
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesCategory =
      category === 'All' ||
      product.category === category;

    return (
      matchesSearch &&
      matchesCategory
    );
  });

  // Sort products
  if (sort === 'price-low') {
    filteredProducts.sort(
      (a, b) => a.price - b.price
    );
  }

  if (sort === 'price-high') {
    filteredProducts.sort(
      (a, b) => b.price - a.price
    );
  }

  if (sort === 'name-az') {
    filteredProducts.sort(
      (a, b) =>
        a.name.localeCompare(b.name)
    );
  }

  if (sort === 'name-za') {
    filteredProducts.sort(
      (a, b) =>
        b.name.localeCompare(a.name)
    );
  }

  if (sort === 'rating') {
    filteredProducts.sort(
      (a, b) => b.rating - a.rating
    );
  }

  return (
    <Container className="py-5">

      <div className="page-header">

  <h1>
    Our Collection
  </h1>

  <p>
    Discover thoughtfully selected products
    designed to fit beautifully into everyday life.
  </p>

</div>

      {/* Search, Category and Sort */}
      <div className="row g-3 mb-4">

        {/* Search */}
        <div className="col-md-5">
          <Form.Group>
            <Form.Label>
              Search Products
            </Form.Label>

            <Form.Control
              ref={searchRef}
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </Form.Group>
        </div>

        {/* Category */}
        <div className="col-md-3">
          <Form.Group>
            <Form.Label>
              Category
            </Form.Label>

            <Form.Select
              value={category}
              onChange={(event) =>
                setCategory(event.target.value)
              }
            >
              {categories.map((item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              ))}
            </Form.Select>
          </Form.Group>
        </div>

        {/* Sort */}
        <div className="col-md-4">
          <Form.Group>
            <Form.Label>
              Sort By
            </Form.Label>

            <Form.Select
              value={sort}
              onChange={(event) =>
                setSort(event.target.value)
              }
            >
              <option value="">
                Default
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="name-az">
                Name: A to Z
              </option>

              <option value="name-za">
                Name: Z to A
              </option>

              <option value="rating">
                Rating
              </option>
            </Form.Select>
          </Form.Group>
        </div>

      </div>

      {/* Product count */}
      <div className="mb-4">
        <p className="text-muted">
          Showing {filteredProducts.length} products
        </p>
      </div>

      {/* No products */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-5">

          <h4>
            No products found
          </h4>

          <p className="text-muted">
            Try a different search or category.
          </p>

        </div>
      ) : (
        <ProductList
          products={filteredProducts}
        />
      )}

    </Container>
  );
}

export default Products;