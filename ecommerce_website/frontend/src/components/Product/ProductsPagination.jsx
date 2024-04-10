import React, { useContext, useEffect } from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import "./product.css";
import ProductCategories from "../categories/ProductCategories";
import AddProduct from "../../pages/ProductPage/AddProduct";
import ProductHeader from "../header/productHeader";
import ProductContextSub from "./ProductContextSub";

const pagesPer = 106;

export default function ProductsPagination({ data, setProductCategory, productCat, setProducts }) {
  var [currentPage, setCurrentPage] = useState(1);
  var [postsPerPage, setPostsPerPage] = useState(pagesPer);
  var lastPostIndex = currentPage * postsPerPage;
  var firstPostIndex = lastPostIndex - postsPerPage;
  var currentPosts = data.slice(firstPostIndex, lastPostIndex);
  const {setProductsSub} = useContext(ProductContextSub)
  const {products} = useContext(ProductContextSub)
  const [filterProducts, setFilterProducts] = useState(data)

  useEffect(() => {
    data && setProductsSub(data)
  }, [])

  return (
    <div>
      <div className="container-fluid z-[1]">
        <ProductHeader products={data} setProducts={setFilterProducts}/>
      {/* <ProductCategories setProductCategory = {setProductCategory}/> */}
        <div className="row my-3 z-[1]">
          {filterProducts.slice(firstPostIndex, lastPostIndex).map((page, index) => {
            return (
              <ProductCard
                product_obj = {page}
                setCurrentPage={setCurrentPage}
                key={page.id} productCat = {productCat}
              />
            );
          })}
          <AddProduct></AddProduct>
        </div>
      </div>
      <div className="pagination z-[99999]">
        <Pagination
          postsPerPage={pagesPer}
          totalPosts={data.length}
          setCurrentPage={setCurrentPage}
          currentNum={currentPage}
        />
      </div>
    </div>
  );
}
