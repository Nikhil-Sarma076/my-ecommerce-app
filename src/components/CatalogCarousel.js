// In CatalogCarousel.js
import React from 'react';
import { Carousel, Card, Button } from 'react-bootstrap';

const CatalogCarousel = ({ products, productCardType, handleAddToCart }) => {
  return (
    <Carousel>
      {products.map(product => (
        <Carousel.Item key={product.id}>
          <Card>
            <Card.Img variant="top" src={product.image} />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
              <Button variant="primary" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
            </Card.Body>
          </Card>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CatalogCarousel;
