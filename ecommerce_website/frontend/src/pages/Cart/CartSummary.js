import React from "react";
import BasketContext from "../../context/BasketContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export default function CartSummary() {
  let navigate = useNavigate();

  let onClickContinueShopping = (e) => {
    e.preventDefault();
    navigate(-1);
  };
  const { subtotal, tax } = useContext(BasketContext);

  return (
    <div className="col-lg-4 col-md-12 mx-auto container-fluid border  order-summary-container">
      <h2 className="text-center p-2">Order Summary</h2>
      <hr></hr>
      <div className="row order-summary-detail-container">
        <div className="col-6">
          <h4 className="mx-3 p-3">Subtotal</h4>
        </div>
        <div className="col-6">
          <h3 className="mx-3  p-3">${subtotal}</h3>
        </div>
        <div className="col-6">
          <h4 className="mx-3  p-3">Tax</h4>
        </div>
        <div className="col-6">
          <h3 className="mx-3  p-3">${tax}</h3>
        </div>
        <div className="col-6">
          <h4 className="mx-3  p-3">Discount</h4>
        </div>
        <div className="col-6">
          <h3 className="mx-3  p-3">${tax}</h3>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <h3 className="mx-3 px-3">Total</h3>
        </div>
        <div className="col-6">
          <h3 className="mx-3 px-3">${subtotal + tax}</h3>
        </div>
      </div>
      <hr></hr>
      <div>
        <button className="btn btn-outline-dark w-100 p-3 my-1">
          Checkout
        </button>
        <button
          className="btn btn-outline-dark w-100 p-3 my-2"
          onClick={onClickContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
