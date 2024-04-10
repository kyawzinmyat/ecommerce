import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";
import Pagination from "./Pagination";
import ProductsPagination from "./ProductsPagination";
import UserContext from "../../context/UserContext";
import ProductContext from "../../context/ProductContext";
import { useLocation } from "react-router-dom";
import { ProductSubProvider } from "./ProductContextSub";

export default function ProductContainer() {
  let [product, setProducts] = useState();
  let [loading, setLoading] = useState(true);
  let [productCategory, setProductCategory] = useState("");
  let { userInfo } = useContext(UserContext)
  const { fetchProduct } = useContext(ProductContext)
  const { state } = useLocation();

  const fetchProductApi = async (filter) => {
    const data = await fetchProduct(filter)
    console.log(data)
    setProducts(data);
  };

  useEffect(() => {
    if (!product) {
      fetchProductApi({ vendor_id: state.vendor_id });
      setLoading(false);
    }
  }, [productCategory]);

  return (
    <ProductSubProvider>
      <div>
        <div className="product-container mx-auto">
          {product && (
            <ProductsPagination
              data={product}
              setProductCategory={setProductCategory}
              productCat={productCategory}
              setProducts={setProducts}
            />
          )}
        </div>
      </div>
    </ProductSubProvider>
  );
}
