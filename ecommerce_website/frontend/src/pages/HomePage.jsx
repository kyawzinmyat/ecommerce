import Navbar from "../components/Navbar/Navbar";
import React from "react";
import Body from "./Body";
import ProductMainCategories from "../components/categories/ProductMainCategories";

const HomePage = () => {
  document.title = 'Home';
  return (
    <div>
       {/* <Navbar/> */}
      <Body/> 
    </div>
  );
};

export default HomePage;