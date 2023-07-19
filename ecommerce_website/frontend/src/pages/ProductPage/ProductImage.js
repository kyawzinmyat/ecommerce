import React from 'react'

export default function ProductImage({image}) {
  return (
    <div className='product-detail-image-container'>
        <img className='product-detail-image' alt='product image' src={image}></img>
    </div>
  )
}
