import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [showPlants, setShowPlants] = useState(false);
  const [page, setPage] = useState("home");

  return (
    <div>
      <nav>
        <h2>Paradise Nursery 🌿</h2>
        <button onClick={() => {setPage("home"); setShowPlants(false);}}>Home</button>
        <button onClick={() => {setPage("plants"); setShowPlants(true);}}>Plants</button>
        <button onClick={() => setPage("cart")}>Cart</button>
      </nav>

      {page === "home" && (
        <div className="background-image">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => {setShowPlants(true); setPage("plants");}}>
            Get Started
          </button>
        </div>
      )}

      {page === "plants" && showPlants && <ProductList />}
      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;
