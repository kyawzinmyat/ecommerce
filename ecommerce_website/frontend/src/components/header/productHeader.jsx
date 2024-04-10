import React, { useState } from 'react'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import CategorySlider from './CategorySlider';
import { motion, AnimatePresence } from "framer-motion"

function ComboBox({ product }) {
    return (
        <Autocomplete
            key={product}
            disablePortal
            renderOption={(props, option) => {
                return (
                    <li {...props} key={option.id}>
                        {option.label}
                    </li>
                );
            }}
            id="combo-box-demo"
            options={product.map((item, index) => { return { label: item.title, id: item.id } })}
            sx={{ width: 300 }}
            // onChange={(event, value) => {
            //     console.log(product)
            //     if (value.label) setProducts(productOrigin.filter(product => product.title === value.label))
            // }}
            renderInput={(params) => <TextField  {...params} label="Name" />}
        />
    );
}

export default function ProductHeader({ products, setProducts }) {

    // const onClickArrow = (value) => {
    //     const currentPage = parseInt(offset/size)
    //     if (value > 0) setCurrentPage(total >= size ? currentPage + value : currentPage)
    //     else setCurrentPage(currentPage > 0 ? currentPage + value : currentPage)
    // }

    let [openFilter, setOpenFilter] = useState(false)

    return (
        <div className='lg:flex lg:justify-between flex flex-wrap justify-center items-center'>
            <div className='inline-flex gap-10 items-center'>
                <ComboBox product={products} />
                <svg onClick={() => { setOpenFilter(!openFilter) }} className="w-6 h-6 text-gray-800 dark:text-white cursor-pointer" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="black" strokeLinecap="round" strokeWidth="2" d="M20 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6h-2m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4m16 6H10m0 0a2 2 0 1 0-4 0m4 0a2 2 0 1 1-4 0m0 0H4" />
                </svg>
            </div>

            <div className='py-3'>

            </div>
            <AnimatePresence>
                {
                    openFilter && <CategorySlider setProducts={setProducts} setOpenFilter={setOpenFilter}/>

                }
            </AnimatePresence>
        </div>
    )
}