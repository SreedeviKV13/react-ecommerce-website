import { useEffect, useState } from 'react';
import productsData from '../data/products';

function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const loadProducts = () => {
    setLoading(true);
    setError('');

    try {
      // Simulate loading time
      setTimeout(() => {
        setProducts(productsData);
        setLoading(false);
      }, 800);
    } catch (error) {
      setError('Unable to load products.');
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return {
    products,
    loading,
    error,
    retry: loadProducts
  };
}

export default useProducts;