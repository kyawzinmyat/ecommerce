import React from 'react'
import './growbusiness.css'


export default function GrowBusiness() {
  return (
    <div className='row grow-business-container container-fluid'>
        <div className='col-lg-7 grow-business-image-container'>
            <img src="http://127.0.0.1:8000/media/images/markus-winkler-IrRbSND5EUc-unsplash.jpg" className='growbusiness-image mx-auto'></img>
        </div>
        <div className='col-lg-5'>
            <div className='grow-business-text-container'>
                <h3>Grow Your Business with Us</h3>
                <p>With our automated service and business solutions, you can bring your business to the next level</p>
                <button className='btn btn-outline-dark btn-lg'>Join Now</button>
            </div>
        </div>
    </div>
  )
}
