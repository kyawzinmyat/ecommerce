import React, { useContext, useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "./product.css";
import Pagination from "./Pagination";
import ProductsPagination from "./ProductsPagination";
import UserContext from "../../context/UserContext";
import ProductContext from "../../context/ProductContext";

export default function ProductContainer() {
  let [product, setProducts] = useState([]);
  let [loading, setLoading] = useState(true);
  let [productCategory, setProductCategory] = useState("");
  let {userInfo} = useContext(UserContext)
  const {fetchProduct} = useContext(ProductContext)

  const fetchProductApi = async () => {
    const data = fetchProduct()
    setProducts(data);
  };

  useEffect(() => {
    if (productCategory) {
      fetchProductApi();
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
