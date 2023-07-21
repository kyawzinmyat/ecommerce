import React from 'react'
import '../../tailWind.css';
import className from 'classnames';

export default function Button({children, primary, secondary, warning, danger, success, rounded, outline}) {
  
  const classes = className('px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white' : primary,

  })

  return (
    <button className={classes}>
      {children}
    </button>
  )
}