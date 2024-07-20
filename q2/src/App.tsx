import React from 'react';
import { Container, Typography } from '@mui/material';
import ProductList from './components/ProductList';

const App: React.FC = () => {
  return (
    <Container>
      <Typography variant="h2" component="div" gutterBottom>
        Top Products
      </Typography>
      <ProductList />
    </Container>
  );
};

export default App;
