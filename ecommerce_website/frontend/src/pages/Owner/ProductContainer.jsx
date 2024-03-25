import React, { useState } from 'react'
import UtilHeader from './UtilHeader'
import { useNavigate } from 'react-router-dom'

export default function ProductContainer({productOrigin, setProducts, setCurrentPage, product, currentCategory, offset, size }) {

    let [mode, setMode] = useState('list')
    console.log(product)
    const navigate = useNavigate();

    let onClickProduct = (product, productCat) => {
        navigate("/product-details", {state: {product: product, productCat: productCat}});
      }

    return (
        <div className='col-span-4'>
            <UtilHeader productOrigin={productOrigin} setProducts={setProducts} setCurrentPage={setCurrentPage} offset={offset} size={size} mode={mode} setMode={setMode} total={product.length} product={product}></UtilHeader>
            <div className=' overflow-scroll h-[100vh]'>
            {
                mode === 'list' && <table className='table table-fixed'>
                    <thead>
                        <tr className='sticky top-0 bg-slate-200' >
                            <th className='font-serif'>No</th>
                            <th className='font-serif'>Name</th>
                            <th className='font-serif'>Quantity</th>
                        </tr>
                    </thead>
                    <tbody className='border-0'>
                        {
                            product.map((item, index) => {
                                return <tr key={index} className=' bg-slate-200 border-white cursor-pointer' onClick={() => onClickProduct(item, currentCategory)}>
                                    <td>{index + offset}</td>
                                    <td>{item.title}</td>
                                    <td>{item.price}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            }
            {
                mode === 'kanban' && <div className='grid grid-cols-2 lg:grid-cols-9 gap-1'>
                    {
                        product.map((item, index) => {
                            return <div key={index} className='h-[105] w-[auto] gap-10 text-left  border-slate-900 border-2  shadow-cyan-800' onClick={() => onClickProduct(item, currentCategory)}>
                                    <img className='object-fill w-[100%] h-[100px]' src={item.image}></img>
                                    <p className='font-sans text-xs font-light tracking-tighter p-2'>{item.title}</p>
                            </div>
                        })
                    }
                </div>
            }
            </div>
        </div>
    )
}
