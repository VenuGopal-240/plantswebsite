// src/pages/Shop.js
import React from 'react';
import PlantList from '../PlantCard/PlantList';

const Shop = () => {
  return (
    <div className="container my-4" style={{marginTop:"5rem"}}>
      <h1>Shop Our Plants</h1>
      <PlantList />
    </div>
  );
};

export default Shop;
