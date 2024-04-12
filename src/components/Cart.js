// components/Cart.js
import React, { useContext } from 'react';
import { Card, Button } from 'react-bootstrap';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const calculateTotalAmount = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div>
      <h3>Cart</h3>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map(item => (
            <Card key={item.id}>
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Text>Price: ${item.price.toFixed(2)}</Card.Text>
                <Card.Text>Quantity: {item.quantity}</Card.Text>
                <Button variant="danger" onClick={() => handleRemoveFromCart(item.id)}>Remove</Button>
              </Card.Body>
            </Card>
          ))}
          <hr />
          <p>Total Amount: ${calculateTotalAmount()}</p>
        </>
      )}
    </div>
  );
};

export default Cart;
