import React, { useState } from "react";

function Item({ name, category }) {
  // Create a state variable to manage whether the item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Toggle the cart state when the button is clicked
  const toggleCart = () => {
    setIsInCart(!isInCart);
  };

  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCart}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
