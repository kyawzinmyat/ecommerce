import React from "react";
import { useState } from "react";
import Pagination from "./Pagination";
import ProductCard from "./ProductCard";
import "./product.css";
import ProductCategories from "../categories/ProductCategories";

const pagesPer = 4;

export default function ProductsPagination({ data, setProductCategory, productCat }) {
  var [currentPage, setCurrentPage] = useState(1);
  var [postsPerPage, setPostsPerPage] = useState(pagesPer);
  var lastPostIndex = currentPage * postsPerPage;
  var firstPostIndex = lastPostIndex - postsPerPage;
  var currentPosts = data.slice(firstPostIndex, lastPostIndex);

  return (
    <div>
      <div className="container-fluid">
      <ProductCategories setProductCategory = {setProductCategory}/>
        <div className="row my-3">
          {currentPosts.map((page, index) => {
            return (
              <ProductCard
                product_obj = {page}
                setCurrentPage={setCurrentPage}
                key={page.id} productCat = {productCat}
              />
            );
          })}
        </div>
      </div>
      <div className="pagination">
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
