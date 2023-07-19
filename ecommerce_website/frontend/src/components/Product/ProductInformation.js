import React, { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import Navbar from "../Navbar/Navbar";
import BasketContext from "../../context/BasketContext";

let API_HOST = "http://127.0.0.1:8000/api/basket/";

export default function ProductInformation({ product_obj, productCategory }) {
  const { basketQty } = useContext(BasketContext);
  const { setBasketQty } = useContext(BasketContext);
  let { user } = useContext(AuthContext);
  let [product] = useState(product_obj);

  let onClickAddToCart = async () => {
    let response = await fetch(API_HOST + "add-item/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_id: user.user_id,
        product_id: product.id,
        product_qty: 1,
      }),
    });
    var data = await response.json();
    setBasketQty(basketQty + 1);
  };

  return (
    <div className="container-fluid">
      <div className="product-information-container text-center">
        <div className="row"></div>
        <p className="text-dark product-detail-title">{product.title}</p>

        <div className="">
          <p className="badge badge-danger text-dark bg-warning mx-2 product-detail-category">
            {productCategory.name}
          </p>
          <p
            style={
              product.in_stock
                ? { backgroundColor: "#66FF00" }
                : { backgroundColor: "red" }
            }
            className="badge stoc-avb bg-success text-light product-detail-category"
          >
            {product.in_stock ? " IN STOCK" : " OUT OF STOCK"}
          </p>
        </div>
        <p className="text-dark product-detail-description my-2">
          {product.description}
        </p>

        <div className="row">
          <div className="col-12">
          <p className="my-1 text-dark product-detail-price">
              ${product.price}
            </p>
          </div>
          <div className="row mx-auto">
            <button
              className="btn add-to-card-product-detail"
              onClick={onClickAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
