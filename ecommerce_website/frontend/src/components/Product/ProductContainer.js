import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";
import Pagination from "./Pagination";
import ProductsPagination from "./ProductsPagination";

const API_HOST = "http://127.0.0.1:8000/api/";
export default function ProductContainer() {
  let [product, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [productCategory, setProductCategory] = useState("");

  const fetchProduct = async () => {
    let response = await fetch(API_HOST + "products/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productCategory: { id: productCategory.id } }),
    });
    var data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    if (productCategory) {
      fetchProduct();
      setLoading(false);
    }
  }, [productCategory]);

  return (
    <div>
      <div className="product-container mx-auto">
        {product && (
          <ProductsPagination
            data={product}
            setProductCategory={setProductCategory}
            productCat={productCategory}
          />
        )}
      </div>
    </div>
  );
}
