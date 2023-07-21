import React from 'react'
import PopularCategories from '../categories/PopularCategories'
import './pcc.css'

export default function PopularCategoriesContainer() {
  return (
    <div className='pcc-container'>
        <div className='row'>
            <div className='pss-text-container col-lg-6'>
                <h1 className='text-light'>
                    Not sure Where to Start?
                </h1>
                <p className='text-light'>
                    Try Out Our Suggested Categories
                </p>
            </div>
            <div className='col-lg-6'>
                <h4 className='text-light p-4 mx-5'>Visit Popular Categories</h4>
                <PopularCategories/>
            </div>
        </div>
    </div>
  )
}
