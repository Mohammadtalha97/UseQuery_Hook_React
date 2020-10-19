import React from "react";

const Planet = ({ item }) => {
  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>Population - {item.population}</p>
      <p>Terrain - {item.terrain}</p>
    </div>
  );
};

export default Planet;
