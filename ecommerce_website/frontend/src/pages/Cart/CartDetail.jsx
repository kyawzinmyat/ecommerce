import React, { useState, useEffect, useContext } from "react";
import AuthContext, { AuthProvider } from "../../context/AuthContext";
import BasketContext from "../../context/BasketContext";
import "./cartDetail.css";
import CartItemList from "./CartItemList";
import Basket from "./Basket";
import { BasketProvider } from "../../context/BasketContext";
import CartSummary from "./CartSummary";
import Navbar from "../../components/Navbar/Navbar";

const API_HOST = "http://127.0.0.1:8000/api/";

export default function CartDetail() {
  let { user } = useContext(AuthContext);
  document.title='Your Cart'
  return (
    <>
    <Navbar></Navbar>
      <div
        className="text-center cart-detail-title"
        style={{ fontFamily: "cursive" }}
      >
        {/* <div>
          Your Cart
        </div> */}
      </div>
      <div className="w-full cart-detail-container">
        <div className="row container-fluid">
          <div className="col-lg-7 col-md-12 mx-auto">
            <div className="container-fluid cart-detail-table">
              <table className="table-auto table w-full  border-slate-500 border-seperate  border-spacing-1 mx-auto">
                <thead className="border-0">
                  <tr className=" text-xs md:text-md lg:text-xl border-0">
                    <th className="text-left px-3 cart-font cart-font">Item</th>
                    <th className="text-center p-1 cart-font">Price</th>
                    <th className="text-center cart-font">Quantity</th>
                    <th className="text-center cart-font">Total</th>
                  </tr>
                </thead>
                <tbody className="border-0">
                  <CartItemList />
                </tbody>
              </table>
            </div>
          </div>
          <CartSummary />
        </div>
      </div>
    </>
  );
}
