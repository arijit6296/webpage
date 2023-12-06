import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [Quantity, setQuantity] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);
  const updateCartItems = (updatedCart) => {
    setCartItems(updatedCart);
    console.log(updatedCart)
  };
  return (
    <div>
      <SingleCart cartItems={cartItems} updateCartItems={updateCartItems} />
    </div>
  );
}

export default CartPage;