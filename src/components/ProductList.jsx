import React, { useState } from "react";

const plants = [
  { id: 1, name: "Snake Plant", price: 10, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 2, name: "Aloe Vera", price: 12, category: "Indoor", img: "https://via.placeholder.com/100" },
  { id: 3, name: "Peace Lily", price: 15, category: "Indoor", img: "https://via.placeholder.com/100" },

  { id: 4, name: "Rose", price: 8, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 5, name: "Tulip", price: 9, category: "Outdoor", img: "https://via.placeholder.com/100" },
  { id: 6, name: "Sunflower", price: 7, category: "Outdoor", img: "https://via.placeholder.com/100" },

  { id: 7, name: "Cactus", price: 5, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 8, name: "Jade Plant", price: 6, category: "Succulent", img: "https://via.placeholder.com/100" },
  { id: 9, name: "Agave", price: 11, category: "Succulent", img: "https://via.placeholder.com/100" }
];

const ProductList = () => {
  const [added, setAdded] = useState([]);

  const addToCart = (id) => {
    setAdded([...added, id]);
  };

  const categories = ["Indoor", "Outdoor", "Succulent"];

  return (
    <div>
      <h2>Plants</h2>

      {categories.map(cat => (
        <div key={cat}>
          <h3>{cat}</h3>

          {plants.filter(p => p.category === cat).map(p => (
            <div key={p.id}>
              <img src={p.img} alt={p.name} />
              <h4>{p.name}</h4>
              <p>${p.price}</p>

              <button
                onClick={() => addToCart(p.id)}
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
