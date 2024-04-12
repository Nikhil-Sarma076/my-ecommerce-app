import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import CatalogPage from './pages/catalog';
import SettingsPage from './pages/settings';
import NavBar from './components/NavBar'; 
import { CartProvider } from './components/CartContext';
import './styles.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [navBarType, setNavBarType] = useState(localStorage.getItem('navBarType') || 'light');
  const [productCardType, setProductCardType] = useState(localStorage.getItem('productCardType') || 'ProductCard1');

  const handleNavBarTypeChange = (type) => {
    localStorage.setItem('navBarType', type);
    setNavBarType(type);
  };

  const handleProductCardTypeChange = (type) => {
    localStorage.setItem('productCardType', type);
    setProductCardType(type);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === '/') {
      window.location.href = '/catalog';
    }
  }, []);

  return (
    <CartProvider>
      <Router>
        <NavBar theme={navBarType} />
        <Container>
          <Routes>
            <Route exact path="/catalog" element={<CatalogPage />} />
            <Route exact path="/settings" element={<SettingsPage onNavBarTypeChange={handleNavBarTypeChange} onProductCardTypeChange={handleProductCardTypeChange} />} />
            {/* Add a catch-all route to redirect to the catalog page if the path is not recognized */}
            <Route path="*" element={<Navigate to="/catalog" />} />
          </Routes>
        </Container>
      </Router>
    </CartProvider>
  );
};

export default App;