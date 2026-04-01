import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="app">
      <nav>
        <h2>Paradise Nursery 🌿</h2>
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("plants")}>Plants</button>
        <button onClick={() => setPage("cart")}>Cart</button>
      </nav>

      {page === "home" && (
        <div className="home">
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setPage("plants")}>Get Started</button>
        </div>
      )}

      {page === "plants" && <ProductList />}
      {page === "cart" && <CartItem />}
    </div>
  );
}

export default App;