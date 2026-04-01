import React, { useState } from "react";

const plantData = [
  { id: 1, name: "Snake Plant", price: 10, category: "Indoor" },
  { id: 2, name: "Aloe Vera", price: 12, category: "Indoor" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor" },

  { id: 4, name: "Rose", price: 8, category: "Outdoor" },
  { id: 5, name: "Tulip", price: 9, category: "Outdoor" },
  { id: 6, name: "Sunflower", price: 7, category: "Outdoor" },

  { id: 7, name: "Cactus", price: 5, category: "Succulent" },
  { id: 8, name: "Jade Plant", price: 6, category: "Succulent" },
  { id: 9, name: "Agave", price: 11, category: "Succulent" }
];

const ProductList = () => {
  const [cart, setCart] = useState([]);
  const [added, setAdded] = useState([]);

  const addToCart = (plant) => {
    setCart([...cart, plant]);
    setAdded([...added, plant.id]);
  };

  const categories = ["Indoor", "Outdoor", "Succulent"];

  return (
    <div>
      <h2>Plants</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plantData
            .filter((p) => p.category === cat)
            .map((p) => (
              <div key={p.id}>
                <h4>{p.name}</h4>
                <p>${p.price}</p>

                <button
                  onClick={() => addToCart(p)}
                  disabled={added.includes(p.id)}
                >
                  {added.includes(p.id) ? "Added" : "Add to Cart"}
                </button>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
};

export default ProductList;