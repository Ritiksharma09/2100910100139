// src/components/Product.tsx
import React from 'react';
import { Card, CardContent, Typography, CardMedia } from '@mui/material';

interface ProductProps {
  product: {
    id: string;
    name: string;
    rating: number;
    discount: number;
    available: boolean;
    imageUrl: string;
  };
}

const Product: React.FC<ProductProps> = ({ product }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={product.imageUrl}
        alt={product.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Rating: {product.rating}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Discount: {product.discount}%
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Available: {product.available ? 'Yes' : 'No'}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
