import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import { CartContext } from './CartContext';
import ProductCard1 from '../components/ProductCard1'; // Import ProductCard1
import ProductCard2 from '../components/ProductCard2'; // Import ProductCard2

const CatalogPage = () => {
  const [productCardType, setProductCardType] = useState('');

  useEffect(() => {
    // Retrieve the product card type from local storage
    const savedProductCardType = localStorage.getItem('productCardType');
    if (savedProductCardType) {
      setProductCardType(savedProductCardType);
    } else {
      // Set a default value if the product card type is not found in local storage
      setProductCardType('ProductCard1');
    }
  }, []);

  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      setProducts(response.data);
    };

    fetchData();
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Shop the Catalog</h1>
      <Row xs={1} sm={2} md={3} lg={4}>
        {products.map(product => (
          <Col key={product.id} className="mb-4">
            {productCardType === 'ProductCard1' ? (
              <ProductCard1 product={product} handleAddToCart={handleAddToCart} />
            ) : (
              <ProductCard2 product={product} handleAddToCart={handleAddToCart} />
            )}
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CatalogPage;
