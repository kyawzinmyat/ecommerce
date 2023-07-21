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
    <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-xs-12 text-center my-md-1" onClick = {onClickProduct}>
      <div className="card product-card text-center">
        <img
          className="card-img-top product-image img-fluid"
          src={product.image}
          alt="Card image cap"
        ></img>

        <div className="card-body">
          <div className="row text-center">
            <p className="col-lg-12">{product.title}</p>
          </div>
          <p className="card-text description">$ {product.price}</p>
          <div className="text-center my-3 bg-grey"></div>
        </div>
      </div>
    </div>
  );
}
