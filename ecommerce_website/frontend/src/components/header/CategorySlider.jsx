import React, { useContext, useEffect, useState } from 'react'
import { motion } from "framer-motion"
import ProductContext from '../../context/ProductContext'
import ProductContextSub from '../Product/ProductContextSub'

export default function CategorySlider({setOpenFilter, setProducts}) {

    const [categories, setCategories] = useState([]) 
    const {fetchPopularCategories} = useContext(ProductContext)
    const {products} = useContext(ProductContextSub)

    const fetchPCategories = async() => {
        const data = await fetchPopularCategories();
        setCategories(data)
    }

    useEffect( () => {
         fetchPCategories()
    }, [])

    const onClickCategory = async (id) => {
        console.log(products)
        setProducts(products.filter((product) => product.main_category[0] === id))
    }

    return (
        <motion.div  className='p-5 absolute top-0 right-0 z-[9999999] bg-white bottom-0 w-[350px]' initial={{
            x: 1000
        }}
        animate={{
            x: 20
        }}
        exit={{
            x: 1000
        }}>
            <div className='inline-flex justify-between gap-20 w-full'>
                <p className='font-sans font-bold'>Category</p>
                <svg className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer" onClick={()=>setOpenFilter(false)} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="grey" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
            </div>
            <div className='py-4'>
               {
                categories && categories.map(item => {
                    return  <p onClick={()=>onClickCategory(item.id)} className='pb-3 font-sans text-sm' style={{borderBottom: '1px solid rgb(240,240,240)'}} key={item.id}>{item.name}</p>
                })
               } 
            </div>
            <div className=''>
                <div className='p-5 absolute bottom-20 right-0 w-[350px] flex justify-center items-center'>
                    <a className='no-underline font-sans p-3 rounded-2xl w-[50%]  bg-slate-50 text-sm text-black'>Reset</a>
                    <a className='no-underline font-sans p-3 rounded-2xl w-[50%]  bg-black text-sm text-white'>Done</a>
                </div>
            </div>
        </motion.div>
    )
}
