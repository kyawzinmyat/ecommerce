import React, { useState } from "react";
import { useContext } from "react";
import BasketContext from "../../context/BasketContext";
import AuthContext from "../../context/AuthContext";

export default function Quantity({item}) {
  const [quantity, setQuantity] = useState(1);
  const { onClickPlusBut } = useContext(BasketContext);
  const {user} = useContext(AuthContext);

  let displayAddtoCartSuccessMessage = () => {
    let msg = document.getElementById("add-to-cart-success");
    setTimeout(() => {
      msg.classList.add("show-message");
    }, 0);
    setTimeout(() => {
      msg.classList.remove("show-message")
    }, 5000);
  };

  let onChangeQuantity = (e) => {
    setQuantity(e.target.value);
  };
  
  let onClickAdd = () => {
    setQuantity(quantity+1);
  }

  let onCLickMinus = () => {
    if (quantity - 1 >= 0) setQuantity(quantity-1);
  }

  let onClickAddToCart = () => {
    onClickPlusBut(item, quantity)
    displayAddtoCartSuccessMessage()
  }

  return (
    <div className="add-to-cart-section">
        <div className="quantity-container">
      <a onClick={onClickAdd}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-plus-square arrow-up"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
      </a>
      <input
        type="number"
        value={quantity}
        className="quantity-pd"
        onChange={onChangeQuantity}
      ></input>
      <a onClick={onCLickMinus}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-dash-square arrow-down"
          viewBox="0 0 16 16"
        >
          <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
          <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
        </svg>
      </a>
    </div>
    {user && <button onClick={onClickAddToCart}>Add to Cart</button>}
    </div>

  );
}
