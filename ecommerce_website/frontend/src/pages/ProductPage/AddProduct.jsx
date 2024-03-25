import React, { useContext, useState } from 'react'
import ProductCard from '../../components/Product/ProductCard'
import ProductCreate from './ProductCreate'
import UserContext from '../../context/UserContext'

export default function AddProduct() {

    const [isAdd, setIsAdd] = useState(false)
    const {userInfo} = useContext(UserContext)

    const onClickAddProduct = () => {
        !isAdd && setIsAdd(!isAdd)
    }

    return (
        <>
            {
                userInfo.is_vendor && <div className="col-lg-2 flex col-md-6 col-sm-6 col-12 col-xs-12 overflow-scroll cursor-pointer  my-md-1 " onClick={onClickAddProduct} >
                {
                    !isAdd && <div className="card  border-0"> 
                    <div className="card-body flex justify-center items-center">  
                        <div className="flex flex-col justify-center items-center" >
                            <div  onClick={onClickAddProduct}>
                                <svg className=" text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="34" height="34" fill="black" viewBox="0 0 24 24">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>
                            </div>

                            <div className="col-lg-12 text-2xl font-semibold">Add Product</div>
                        </div>
                    </div>
                </div>
                }
                {
                isAdd && <ProductCreate setIsAdd={setIsAdd}/>
            }
            </div>
            }
        </>
    )
}
