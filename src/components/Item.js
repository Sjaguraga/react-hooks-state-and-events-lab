import React, { useState } from "react";

function Item({ name, category }) {
  const [itemCart, SetItemCart] = useState(true);

  function inItemCart() {
    SetItemCart((itemCart) => !itemCart);
  }
  const itemClass = itemCart ? "Add to Cart" : "Remove From Cart";
  const inCart = itemCart ? "" : "in-cart";
  const color = itemCart ? "yellow" : "Hotpink";
  return (
    <li className={inCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        style={{ background: color }}
        className={itemClass}
        onClick={inItemCart}
      >
        {itemCart ? "Add to Cart" : "Remove From Cart"}
      </button>
    </li>
  );
}

export default Item;
