import React, { useState } from "react";
import "./App.css";

// Ingredient Components
function TopBread() {
  return <div className="top-bread"></div>;
}
function Tomato({ onClick }) {
  return <div className="tomato" onClick={onClick} title="Click to remove"></div>;
}
function Meat({ onClick }) {
  return <div className="meat" onClick={onClick} title="Click to remove"></div>;
}
function Lettuce({ onClick }) {
  return <div className="lettuce" onClick={onClick} title="Click to remove"></div>;
}
function BaseBread() {
  return <div className="base-bread"></div>;
}

function App() {
  const [ingredients, setIngredients] = useState([]);
  const [selectedIngredient, setSelectedIngredient] = useState("tomato");
  const [position, setPosition] = useState("bottom");

  // Add ingredient
  const handleAddIngredient = () => {
    const updated =
      position === "top"
        ? [selectedIngredient, ...ingredients]
        : [...ingredients, selectedIngredient];
    setIngredients(updated);
  };

  // Remove ingredient at index
  const handleRemoveIngredient = (indexToRemove) => {
    const updated = ingredients.filter((_, index) => index !== indexToRemove);
    setIngredients(updated);
  };

  // Render ingredient component
  const renderIngredient = (type, index) => {
    const props = { onClick: () => handleRemoveIngredient(index), key: index };

    switch (type) {
      case "tomato":
        return <Tomato {...props} />;
      case "meat":
        return <Meat {...props} />;
      case "lettuce":
        return <Lettuce {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="app">
      <h1> ACA - Build Your Burger</h1>

      <div className="controls">
        <select
          value={selectedIngredient}
          onChange={(e) => setSelectedIngredient(e.target.value)}
        >
          <option value="tomato">Tomato</option>
          <option value="meat">Meat</option>
          <option value="lettuce">Lettuce</option>
        </select>

        <select value={position} onChange={(e) => setPosition(e.target.value)}>
          <option value="top">Add to Top</option>
          <option value="bottom">Add to Bottom</option>
        </select>

        <button onClick={handleAddIngredient}>Add Ingredient</button>
      </div>

      <p style={{ fontSize: "14px", color: "#5c4033" }}>
         Click an ingredient in the burger to remove it.
      </p>

      <div className="burger">
        <TopBread />
        {ingredients.map((item, index) => renderIngredient(item, index))}
        <BaseBread />
      </div>
    </div>
  );
}

export default App;
 