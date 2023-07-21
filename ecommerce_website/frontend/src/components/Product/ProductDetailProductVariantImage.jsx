import React from 'react'

export default function ProductDetailProductVariantImage({image, cssClass}) {
  return (
    <>
      <img
          className={cssClass}
          src={image}
          alt="Card image cap"
        ></img>   
    </>
  )
}
