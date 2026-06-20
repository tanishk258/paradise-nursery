```jsx
import React, { useState } from "react";

function ProductList() {
  const [cartCount, setCartCount] = useState(0);
  const [addedItems, setAddedItems] = useState([]);

  const plants = {
    Indoor: [
      { id: 1, name: "Snake Plant", price: 15, image: "https://via.placeholder.com/150" },
      { id: 2, name: "Peace Lily", price: 20, image: "https://via.placeholder.com/150" },
      { id: 3, name: "Spider Plant", price: 18, image: "https://via.placeholder.com/150" },
      { id: 4, name: "ZZ Plant", price: 22, image: "https://via.placeholder.com/150" },
      { id: 5, name: "Pothos", price: 12, image: "https://via.placeholder.com/150" },
      { id: 6, name: "Aloe Vera", price: 10, image: "https://via.placeholder.com/150" }
    ],

    Succulents: [
      { id: 7, name: "Jade Plant", price: 14, image: "https://via.placeholder.com/150" },
      { id: 8, name: "Echeveria", price: 16, image: "https://via.placeholder.com/150" },
      { id: 9, name: "Haworthia", price: 12, image: "https://via.placeholder.com/150" },
      { id: 10, name: "Burro Tail", price: 18, image: "https://via.placeholder.com/150" },
      { id: 11, name: "Panda Plant", price: 15, image: "https://via.placeholder.com/150" },
      { id: 12, name: "Lithops", price: 20, image: "https://via.placeholder.com/150" }
    ],

    Flowering: [
      { id: 13, name: "Rose", price: 25, image: "https://via.placeholder.com/150" },
      { id: 14, name: "Orchid", price: 30, image: "https://via.placeholder.com/150" },
      { id: 15, name: "Hibiscus", price: 22, image: "https://via.placeholder.com/150" },
      { id: 16, name: "Jasmine", price: 18, image: "https://via.placeholder.com/150" },
      { id: 17, name: "Marigold", price: 10, image: "https://via.placeholder.com/150" },
      { id: 18, name: "Lavender", price: 20, image: "https://via.placeholder.com/150" }
    ]
  };

  const addToCart = (plant) => {
    setCartCount(cartCount + 1);
    setAddedItems([...addedItems, plant.id]);
  };

  return (
    <div>
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "15px",
          backgroundColor: "#4CAF50",
          color: "white"
        }}
      >
        <h2>Paradise Nursery</h2>

        <div>
          <a href="/" style={{ color: "white", marginRight: "15px" }}>
            Home
          </a>

          <a href="/plants" style={{ color: "white", marginRight: "15px" }}>
            Plants
          </a>

          <a href="/cart" style={{ color: "white" }}>
            Cart ({cartCount})
          </a>
        </div>
      </nav>

      {Object.entries(plants).map(([category, items]) => (
        <div key={category}>
          <h2>{category}</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "20px"
            }}
          >
            {items.map((plant) => (
              <div
                key={plant.id}
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  textAlign: "center"
                }}
              >
                <img
                  src={plant.image}
                  alt={plant.name}
                  width="150"
                />

                <h3>{plant.name}</h3>

                <p>${plant.price}</p>

                <button
                  disabled={addedItems.includes(plant.id)}
                  onClick={() => addToCart(plant)}
                >
                  {addedItems.includes(plant.id)
                    ? "Added"
                    : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
```
