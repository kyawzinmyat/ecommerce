import React from 'react'

export default function CategoryContainer({currentCategory, popularCategories}) {
  return (
    <div className='grid grid-cols-5 m-0 '>
                <div className='bg-white mt-[113px]'>
                    <div className=' bg-slate-100'></div>
                    <div className='p-2 h-[500px] overflow-scroll'>
                        {popularCategories.map(
                            (item, index) => {
                                return <div onClick={() => onClickCategory(item)} key={index} className={' border-0 py-2 cursor-pointer ' + (currentCategory.id === item.id ? 'bg-blue-300 text-white' : ' text-black')}>
                                    <p className='font-serif'>{item.name}</p>
                                </div>
                            }
                        )}

                    </div>
                    <div className='border-0 inline-flex justify-center items-center w-[70%] mx-[auto] cursor-pointer rounded-md'>
                        <p className='font-serif text-black p-3'>Add</p>
                    </div>
                </div>
                <ProductContainer setProducts={setFixProducts} setCurrentPage={setCurrentPage} offset={currentPage * paginationSize + 1} size={paginationSize} product={fixProduct} productOrigin={product} currentCategory={currentCategory}></ProductContainer>
            </div>
  )
}
