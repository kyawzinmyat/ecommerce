import React from "react";
import ProductImage from "./ProductImage";
import "./ProductInformation.css";
import ProductVariant from "./ProductVariant";
import Quantity from "./Quantity";

export default function ProductInformation({ product }) {
  return (
    <>
      {/* <div className="product-information-container container-fluid">
        <div>
          <ProductImage image={product.image} />
          <div className="product-variants-img-container">
            <ProductVariant image={product.image} />
            <ProductVariant image={product.image} />
            <ProductVariant image={product.image} />
          </div>
        </div>
        <div className="product-information-body">
          <p className="text-dark product-title">{product.title}</p>
          <span className="product-price"> ${product.price}</span>
          <p className="text-dark product-description">{product.description}</p>
          <div>
            <Quantity item={product} />
          </div>
        </div>
      </div> */}
      <div className="mx-auto" style={{ width: '90%' }}>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-row-3">
          <div className='lg:col-span-2 md:col-span-2 md:row-span-2'>
            <img className="w-full h-90 lg:h-90" src={product.image}></img>
          </div>
          
          <div className="lg:col-span-2 md:col-span-2 lg:col-start-4 md:col-start-3 lg:row-start-0 md:row-start-1 sm:row-start-0">
            <div className="grid grid-cols-3">
              <img className="w-full h-32" src={product.image}></img>
              <img className="w-full h-32" src={product.image}></img>
              <img className="w-full h-32" src={product.image}></img>
            </div>
          </div>
          <div className="lg:col-span-3 md:col-span-2 mx-auto  md:row-start-1 md:row-span-2 sm:w-full sm:mx-auto sm:my-5" style={{ border: '1px solid white' }}>
            <div className="lg:px-10">
              <p className="text-dark lg:text-3xl text-2xl sm:text-3xl md:text-xl font-semibold">{product.title}</p>
              <span className=""> ${product.price}</span>
              <p className="text-dark md:text-2xl font-light my-5">{product.description}</p>
              <div>
                <Quantity item={product} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}
