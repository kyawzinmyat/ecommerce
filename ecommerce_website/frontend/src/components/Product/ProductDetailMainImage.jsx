import React from 'react'
import './product.css'

export default function ProductDetailMainImage({image}) {
  return (
    <div className=''>
        <img
          className="img-fluid product-detail-image" 
          src={image}
          alt="Card image cap"
        ></img>
    </div>
  )
}
