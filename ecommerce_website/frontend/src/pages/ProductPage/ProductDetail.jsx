import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// import ProductDetailMainImage from "../../components/Product/ProductDetailMainImage";
// import ProductDetailProductVariantImage from "../../components/Product/ProductDetailProductVariantImage";
// import ProductInformation from "../../components/Product/ProductInformation";
import "./productdetails.css";
import ProductInformation from "./ProductInformation";
import "../../components/categories/categories.css";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

export default function ProductDetail({}) {
  const { state } = useLocation();
  let [product] = useState(state.product);
  let [productCategory] = useState(state.productCat);

  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    document.title = product.title;
  });

  let goBack = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <>
    <Navbar></Navbar>
      <div className="prev-arrow btn" onClick={goBack}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="black"
          className="bi bi-arrow-90deg-left"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"
          />
        </svg>
      </div>

      <div className="add-to-cart-success" id="add-to-cart-success">
        <p>Item added to the Cart!!</p>
      </div>
      <div className="">
        <ProductInformation product={product} />
      </div>
    </>
  );
}
