import React from 'react'
import './x.css'

export default function X() {
    let openMainCategories = (e) => {
        if (e) e.preventDefault();
        var mainCategories = document.getElementById('main-categories-container');
        mainCategories.classList.toggle('open');
      }

  return (
    <div className='cross' onClick={openMainCategories}></div>
  )
}
