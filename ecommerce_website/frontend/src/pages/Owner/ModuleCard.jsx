import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function ModuleCard({name, icon}) {

    const navigate = useNavigate();

  let onClickModule = () => {
    if (name.toLowerCase() === 'products') navigate("/admin-products");
  }

  return (
      <div className='bg-slate-50 mt-5 cursor-pointer col-lg-2 col-md-4 col-12	h-[auto] inline-flex flex-col p-4  justify-center items-center hover:bg-slate-100' onClick={onClickModule}>
        {icon}
        <p className='font-serif  text-lg text-teal-900 p-1'>
      {name}
     </p>
      </div>
    
  )
}
