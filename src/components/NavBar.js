import React, { useContext, useState, useEffect } from 'react';
import { Navbar, Nav, Modal, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const NavBar = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showCartModal, setShowCartModal] = useState(false);
  const [navExpanded, setNavExpanded] = useState(false);
  const [navBarType, setNavBarType] = useState(localStorage.getItem('navBarType') || 'light');

  useEffect(() => {
    const storedNavBarType = localStorage.getItem('navBarType');
    if (storedNavBarType) {
      setNavBarType(storedNavBarType);
    }
  }, []);

  const handleCloseCartModal = () => setShowCartModal(false);
  const handleShowCartModal = () => setShowCartModal(true);
  const handleToggleNav = () => setNavExpanded(!navExpanded);

  return (
    <Navbar bg={navBarType === 'dark' ? 'dark' : 'light'} variant={navBarType === 'dark' ? 'dark' : 'light'} expand="lg" expanded={navExpanded}>
      <Navbar.Brand href="#">E-Commerce App</Navbar.Brand>
      <Navbar.Toggle onClick={handleToggleNav} aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/catalog" onClick={handleToggleNav}>Catalog</Nav.Link>
          <Nav.Link href="/settings" onClick={handleToggleNav}>Settings</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link onClick={handleShowCartModal}>
            <i className="fa fa-shopping-bag"></i> Cart ({cartItems.length})
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>

      <Modal show={showCartModal} onHide={handleCloseCartModal}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {cartItems.map(item => (
            <div key={item.id}>
              <p>{item.title}</p>
              <Button variant="danger" onClick={() => removeFromCart(item.id)}>Remove</Button>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseCartModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Navbar>
  );
};

export default NavBar;
