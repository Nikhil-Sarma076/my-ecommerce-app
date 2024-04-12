// ParentComponent.js
import React, { useState } from 'react';
import SettingsPage from '../components/Settings';

const ParentComponent = () => {
  const [productCardType, setProductCardType] = useState('');
  const [navBarType, setNavBarType] = useState('');
  const [viewMode, setViewMode] = useState('');

  const handleProductCardTypeChange = (type) => {
    setProductCardType(type);
  };

  const handleNavBarTypeChange = (type) => {
    setNavBarType(type);
  };

  const handleViewModeChange = (mode) => {
    setViewMode(mode);
  };

  return (
    <div>
      <SettingsPage 
        onProductCardTypeChange={handleProductCardTypeChange}
        onNavBarTypeChange={handleNavBarTypeChange} 
        onViewModeChange={handleViewModeChange}
      />
    </div>
  );
};

export default ParentComponent;
