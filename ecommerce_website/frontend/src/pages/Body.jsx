import React from "react";
import MainBody from "../components/body/MainBody";
import ProductContainer from "../components/Product/ProductContainer";
import "./body.css";
import Intro from "../components/body/Intro";
import Footer from "../components/footer/Footer";
import JoinForFree from "../components/body/JoinForFree";
import PopularCategoriesContainer from "../components/body/PopularCategoriesContainer";
import GrowBusiness from "../components/body/GrowBusiness";
import ContactInfo from "../components/body/ContactInfo";

export default function Body() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) entry.target.classList.add("show");
      else entry.target.classList.remove("show");
    });
  });
  const hiddenElements = document.querySelectorAll(".hidden_");
  
  let openMainCategories = (e) => {
    e.preventDefault();
    var mainCategories = document.getElementById("main-categories-container");
    console.log(mainCategories);
    mainCategories.classList.toggle("open");
  };

  return (
    <div className="container-fluid hidden_">
      {hiddenElements.forEach((entry) => {
        observer.observe(entry);
        console.log(entry)
      })}
      <div>
        <Intro />
      </div>

      <div className="row main-body-container">
        <div className="col-lg-2 col-md-2 col-sm-12 hidden_">
          <MainBody />
        </div>
        <div className="hidden_">
          <ProductContainer />
          <ProductContainer />
        </div>
      </div>
      <div className="hidden_">
        <JoinForFree />
      </div>
      <div className="hidden_ my-5">
        <GrowBusiness />
      </div>
      <div className="hidden_">
        <PopularCategoriesContainer />
      </div>
      {/* <div className="hidden_">
        <ContactInfo />
      </div> */}
      <Footer />
    </div>
  );
}
