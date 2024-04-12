// Settings.js
import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const Settings = ({ onNavBarTypeChange, onProductCardTypeChange, onViewModeChange }) => {
  const [navBarType, setNavBarType] = useState(localStorage.getItem('navBarType') || 'light');
  const [productCardType, setProductCardType] = useState(localStorage.getItem('productCardType') || 'ProductCard1');
  const [viewMode, setViewMode] = useState(localStorage.getItem('viewMode') || 'view_all');

  const handleNavBarTypeChange = (event) => {
    const type = event.target.value;
    setNavBarType(type);
    localStorage.setItem('navBarType', type);
    onNavBarTypeChange(type);
  };

  const handleProductCardTypeChange = (event) => {
    const type = event.target.value;
    setProductCardType(type);
    localStorage.setItem('productCardType', type);
    onProductCardTypeChange(type);
  };

  const handleViewModeChange = (event) => {
    const mode = event.target.value;
    setViewMode(mode);
    localStorage.setItem('viewMode', mode);
    onViewModeChange(mode);
  };

  const handleSaveSettings = () => {
    // Save settings to localStorage
    localStorage.setItem('navBarType', navBarType);
    localStorage.setItem('productCardType', productCardType);
    localStorage.setItem('viewMode', viewMode);
    // Redirect to catalog page
    window.location.href = '/catalog';
  };

  useEffect(() => {
    // Call the onViewModeChange function with the initial view mode
    onViewModeChange(viewMode);
  }, []); // Run this effect only once, on component mount

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>NavBar Type</Form.Label>
          <Form.Control as="select" onChange={handleNavBarTypeChange} value={navBarType}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Product Card Type</Form.Label>
          <Form.Control as="select" onChange={handleProductCardTypeChange} value={productCardType}>
            <option value="ProductCard1">ProductCard1</option>
            <option value="ProductCard2">ProductCard2</option>
          </Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>View Mode</Form.Label>
          <Form.Control as="select" onChange={handleViewModeChange} value={viewMode}>
            <option value="view_all">View All</option>
            <option value="carousel">Carousel</option>
          </Form.Control>
        </Form.Group>
      </Form>
      <Button variant="primary" onClick={handleSaveSettings}>Save</Button>
    </div>
  );
};

export default Settings;
