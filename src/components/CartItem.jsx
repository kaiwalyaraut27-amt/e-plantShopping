import React, { useState } from "react";

const CartItem = () => {
  const [items, setItems] = useState([
    { id: 1, name: "Snake Plant", price: 10, qty: 1 }
  ]);

  const increase = (id) => {
    setItems(items.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i));
  };

  const decrease = (id) => {
    setItems(items.map(i => {
      if (i.id === id) {
        if (i.qty === 1) return null;
        return { ...i, qty: i.qty - 1 };
      }
      return i;
    }).filter(Boolean));
  };

  const remove = (id) => {
    setItems(items.filter(i => i.id !== id));
  };

  const total = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <div>
      <h2>Cart</h2>

      {items.map(i => (
        <div key={i.id}>
          <img src="https://via.placeholder.com/80" alt="" />
          <h4>{i.name}</h4>
          <p>${i.price}</p>

          <button onClick={() => decrease(i.id)}>-</button>
          <span>{i.qty}</span>
          <button onClick={() => increase(i.id)}>+</button>

          <button onClick={() => remove(i.id)}>Delete</button>

          <p>Total: ${i.price * i.qty}</p>
        </div>
      ))}

      <h3>Grand Total: ${total}</h3>

      <button onClick={() => alert("Coming Soon")}>Checkout</button>
      <button onClick={() => window.location.reload()}>
        Continue Shopping
      </button>
    </div>
  );
};

export default CartItem;
