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
    <div className="col-lg-4 col-md-12 mx-auto container-fluid bg-white border-0 order-summary-container">
      <h2 className="text-center p-2 font-sans">Order Summary</h2>
      <hr></hr>
      <div className="row order-summary-detail-container">
        <div className="col-6">
          <h4 className="mx-3 text-md p-1 font-sans font-light">Subtotal</h4>
        </div>
        <div className="col-6">
          <h3 className="mx-3  p-3">${subtotal}</h3>
        </div>
        <div className="col-6">
          <h4 className="mx-3  p-1 font-sans font-light">Tax</h4>
        </div>
        <div className="col-6">
          <h3 className="mx-3  font-sans p-3">${tax}</h3>
        </div>
        <div className="col-6">
          <h4 className="mx-3 text-md p-1 font-sans font-light">Discount</h4>
        </div>
        <div className="col-6">
          <h3 className="mx-3 font-sans  p-3">${tax}</h3>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <h3 className="mx-3 text-md px-3 font-sans font-light">Total</h3>
        </div>
        <div className="col-6">
          <h3 className="mx-3 px-3 font-sans">${subtotal + tax}</h3>
        </div>
      </div>
      <hr></hr>
      <div>
        <button className="btn  bg-white  w-100 p-3 my-1">
          Checkout
        </button>
        <button
          className="btn hover:text-white hover:bg-black w-100 p-3 my-2"
          onClick={onClickContinueShopping}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
}
