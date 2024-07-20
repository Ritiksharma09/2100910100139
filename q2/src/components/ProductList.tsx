// src/components/ProductList.tsx
import React, { useState, useEffect } from 'react';
import { getProducts } from '../api';
import Product from './Product';
import { Grid, CircularProgress } from '@mui/material';

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responses = await Promise.all([
          getProducts('category1', 'company1'),
          getProducts('category1', 'company2'),
          // Add requests for other companies
        ]);
        const allProducts = responses.flatMap((response) => response.data);
        // Sort products by your criteria (e.g., ratings)
        const sortedProducts = allProducts.sort((a, b) => b.rating - a.rating);
        setProducts(sortedProducts.slice(0, N)); // N is the number of top products to display
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <CircularProgress />;
  }

  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} key={product.id}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
