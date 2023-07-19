import React, { useState } from "react";
import "./itemEdit.css";
import AuthContext from "../../context/AuthContext";
import BasketContext from "../../context/BasketContext";
import { useContext } from "react";
let API_HOST = "http://127.0.0.1:8000/api/basket/";

export default function ItemEdit({ item, onClick }) {
  let { user } = useContext(AuthContext);
  let { subtotal, setSubtotal } = useContext(BasketContext);
  const { basketQty } = useContext(BasketContext);
  const { setBasketQty } = useContext(BasketContext);

  let callAddApi = async () => {
    let response = await fetch(API_HOST + "add-item/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        product_id: item.product,
        product_qty: quantity,
      }),
    });
    console.log(item);
    var data = await response.json();
    if (response.status === 200) {
      setBasketQty(basketQty + quantity);
      setSubtotal(subtotal + item.product_price * quantity);
    }
  };

  let callRemoveApi = async () => {
    let response = await fetch(API_HOST + "remove-item/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        product_id: item.product,
        product_qty: quantity,
      }),
    });
    var data = await response.json();
    if (response.status === 200) {
      setBasketQty(basketQty - quantity);
      setSubtotal(subtotal - item.product_price * quantity);
    }
  };

  const shakeBasket = () => {
    const basket = document.getElementById("basket-count");
    basket.classList.toggle("shake");
    setTimeout(() => {
      basket.classList.toggle("shake");
    }, 110);
  };

  const onChangeQuantity = (e) => {
    const newQuantity = e.target.value ? e.target.value : 0;
    setQuantity(parseInt(newQuantity));
    if (item.quantity - newQuantity < 0) setDisableMinus(true);
    else setDisableMinus(false);
  };

  const onClickPlusBut = async () => {
    await callAddApi();
    // shakeBasket();
    onClick(parseInt(quantity));
  };

  const onClickMinusBut = async () => {
    if (!disableMinus && item.quantity - quantity >= 0) {
      onClick(parseInt(-quantity));
      await callRemoveApi();
      // shakeBasket();
    }
  };

  let [quantity, setQuantity] = useState(1);
  let [disableMinus, setDisableMinus] = useState(false);

  return (
    <div className="item-edit">
      <form>
        <input
          id="unhide-area"
          min={0}
          value={quantity}
          onChange={onChangeQuantity}
        ></input>
        <div>
          <svg
            id="unhide-area"
            onClick={onClickPlusBut}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-plus-square add-item"
            viewBox="0 0 16 16"
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
          </svg>
          <svg
            id="unhide-area"
            onClick={onClickMinusBut}
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi mx-1 bi-dash-square remove-item"
            viewBox="0 0 16 16"
            style={{
              color: !disableMinus ? "red" : "grey",
              cursor: !disableMinus ? "pointer" : "none",
            }}
          >
            <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
            <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" />
          </svg>
        </div>
      </form>
    </div>
  );
}
