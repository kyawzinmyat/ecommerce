import React from 'react'
import PopularCategories from '../categories/PopularCategories'
import './pcc.css'

export default function PopularCategoriesContainer() {
  return (
    <div className='pcc-container'>
        <div className='row w-[80%] mx-auto'>
            <div className='pss-text-container col-lg-6 bg-slate-50 rounded-lg'>
                <h1 className='text-dark tracking-tighter leading-20 font-serif'>
                    Not sure Where to Start?
                </h1>
                <p className='text-dark font-light tracking-tighter leading-20 font-serif'>
                    Try Out Our Suggested Categories
                </p>
            </div>
            <div className='col-lg-6 bg-sl'>
                <h4 className='text-dark p-4  tracking-tighter leading-20 font-serif'>Visit Popular Categories</h4>
                <PopularCategories/>
            </div>
        </div>
    </div>
  )
}
