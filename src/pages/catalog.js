import React from 'react';
import Catalog from '../components/Catalog';

const CatalogPage = ({ productCardType }) => {
  return (
    <div>
      <h1>Catalog Page</h1>
      <Catalog productCardType={productCardType} />
    </div>
  );
};

export default CatalogPage;