// components/ShoppingPage.js
import React from 'react';
import Catalog from './Catalog';
import { CartProvider } from './CartContext';

const ShoppingPage = () => {
  return (
    <CartProvider>
      <div>
        <h1>Shopping Page</h1>
        <div>
          <h2>Catalog</h2>
          <Catalog />
        </div>
        <div>
          <h2>Cart</h2>
          <Cart />
        </div>
      </div>
    </CartProvider>
  );
};

export default ShoppingPage;