```jsx
import React, { useState } from "react";

function CartItem() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Snake Plant",
      price: 15,
      quantity: 2,
      image: "https://via.placeholder.com/100"
    },
    {
      id: 2,
      name: "Peace Lily",
      price: 20,
      quantity: 1,
      image: "https://via.placeholder.com/100"
    }
  ]);

  const increaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems(
      cartItems.filter((item) => item.id !== id)
    );
  };

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Shopping Cart</h1>

      <h2>Total Cart Amount: ${totalAmount}</h2>

      {cartItems.map((item) => (
        <div
          key={item.id}
          style={{
            border: "1px solid #ddd",
            marginBottom: "15px",
            padding: "15px",
            display: "flex",
            alignItems: "center",
            gap: "20px"
          }}
        >
          <img
            src={item.image}
            alt={item.name}
            width="100"
          />

          <div>
            <h3>{item.name}</h3>

            <p>Unit Price: ${item.price}</p>

            <p>
              Total Cost: $
              {item.price * item.quantity}
            </p>

            <p>Quantity: {item.quantity}</p>

            <button
              onClick={() =>
                increaseQuantity(item.id)
              }
            >
              +
            </button>

            <button
              onClick={() =>
                decreaseQuantity(item.id)
              }
            >
              -
            </button>

            <button
              onClick={() =>
                deleteItem(item.id)
              }
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <button
        onClick={() =>
          alert("Checkout Coming Soon!")
        }
      >
        Checkout
      </button>

      <button
        style={{ marginLeft: "10px" }}
        onClick={() =>
          window.location.href = "/plants"
        }
      >
        Continue Shopping
      </button>
    </div>
  );
}

export default CartItem;
```
