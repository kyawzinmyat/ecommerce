import React, { useState, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import  BasketContext  from "../../context/BasketContext";

export default function ProductCard({
  product_obj,
  productCat
}) {
  const API_HOST = "http://127.0.0.1:8000/api/";
  let [product, setProduct] = useState(product_obj)
  let {token} = useContext(AuthContext);

  const navigate = useNavigate();

  let onClickProduct = () => {
    navigate("/product-details", {state: {product: product, productCat: productCat}});
  }

  return (
    <div className="col-lg-2 col-md-6 col-4 z-[0] my-md-1" onClick = {onClickProduct}>
      <div className="card product-card">
        <img
          className="card-img-top product-image img-fluid z-[1]"
          src={product.image}
          alt="Card image cap"
        ></img>

        <div className="card-body font-lg">
          <div className="row">
            <p className="col-lg-12 text-sm lg:text-lg tracking-tighter font-sans font-semibold">{product.title}</p>
            <p className="card-text description text-sm  font-sans font-light">$ {product.price} </p>
          </div>
        </div>
      </div>
    </div>
  );
}
