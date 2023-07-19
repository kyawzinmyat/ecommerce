import React from "react";
import ProductImage from "./ProductImage";
import "./ProductInformation.css";
import ProductVariant from "./ProductVariant";
import { useContext } from "react";
import Quantity from "./Quantity";
import BasketContext from "../../context/BasketContext";

export default function ProductInformation({ product }) {
  return (
    <div className="product-information-container container-fluid">
      <div>
        <ProductImage image={product.image} />
        <div className="product-variants-img-container">
          <ProductVariant image={product.image} />
          <ProductVariant image={product.image} />
          <ProductVariant image={product.image} />
        </div>
      </div>
      <div className="product-information-body">
        <p className="text-dark product-title">{product.title}</p>
        <span className="product-price"> ${product.price}</span>
        <p className="text-dark product-description">{product.description}</p>
        <div>
          <Quantity item={product} />
        </div>
      </div>
    </div>
  );
}
