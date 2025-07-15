import React, { useState } from "react";
import "./App.css";

function TopBread() {
  return <div className="top-bread">Top Bread</div>;
}
function Tomato() {
  return <div className="tomato">Tomato</div>;
}
function Meat() {
  return <div className="meat">Meat</div>;
}
function Lettuce() {
  return <div className="lettuce">Lettuce</div>;
}
function BaseBread() {
  return <div className="base-bread">Base Bread</div>;
}

function App() {
  const [includeTomato, setIncludeTomato] = useState(true);
  const [includeMeat, setIncludeMeat] = useState(true);
  const [includeLettuce, setIncludeLettuce] = useState(true);

  return (
    <div className="app">
      <h1> ACA-Build Your Burger</h1>

      <div className="controls">
        <label>
          <input
            type="checkbox"
            checked={includeTomato}
            onChange={() => setIncludeTomato(!includeTomato)}
          />
          Tomato
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeMeat}
            onChange={() => setIncludeMeat(!includeMeat)}
          />
          Meat
        </label>

        <label>
          <input
            type="checkbox"
            checked={includeLettuce}
            onChange={() => setIncludeLettuce(!includeLettuce)}
          />
          Lettuce
        </label>
      </div>

      <div className="burger">
        <TopBread />
        {includeTomato && <Tomato />}
        {includeMeat && <Meat />}
        {includeLettuce && <Lettuce />}
        <BaseBread />
      </div>
    </div>
  );
}

export default App;
