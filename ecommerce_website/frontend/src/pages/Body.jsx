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
import HomePage from "../components/body/HomePage";
import VednorContainer from "../components/body/VednorContainer";
import Intro2 from "../components/body/Intro2";

export default function Body() {

  return (
    <div className="container-fluid hidden_">

      <div>
        {/* <Intro /> */}
        <HomePage></HomePage>
      </div>

      <div className="row main-body-container">
        <div className="col-lg-2 col-md-2 col-sm-12 hidden_">
          <MainBody />
        </div>
        <div className="hidden_">
          {/* <ProductContainer />
          <ProductContainer /> */}
          <VednorContainer />
        </div>
      </div>

      <div className="hidden_ mt-[15em]">
        <GrowBusiness />

      </div>
      <div className="mt-[15em]">
        <Intro2 />
      </div>
      <div className="hidden_">
        <PopularCategoriesContainer />
      </div>
      {/* <div className="hidden_">
        <ContactInfo />
      </div> */}
      <div className="hidden_">
        <JoinForFree />
      </div>
      <Footer />
    </div>
  );
}
