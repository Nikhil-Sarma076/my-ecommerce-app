// ProductCard1.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ProductCard1 = ({ product, handleAddToCart }) => {
  return (
    <Card style={{ height: '100%' }}>
      <Card.Img variant="top" src={product.image} style={{ height: '200px', objectFit: 'cover' }} />
      <Card.Body style={{ height: '100%' }}>
        <Card.Title className="text-truncate">{product.title}</Card.Title>
        <Card.Text>${product.price.toFixed(2)}</Card.Text>
        <Button variant="dark" block onClick={() => handleAddToCart(product)}>Add to Cart</Button>

      </Card.Body>
    </Card>
  );
};

export default ProductCard1;
