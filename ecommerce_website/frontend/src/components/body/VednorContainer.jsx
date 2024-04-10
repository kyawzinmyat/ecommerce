import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'
import { useNavigate } from 'react-router-dom'

export default function VednorContainer() {

    let [vendorList, setVendorList] = useState(null)
    let { getVendor } = useContext(UserContext)
    const navigate = useNavigate();

    let onClickVendor = (vendor_id) => {
      navigate("/products", {state: {vendor_id: vendor_id}});
    }

    const getVendorApi = async () => {
        const result = await getVendor();
        setVendorList(result)
    }

    useEffect(() => {
        getVendorApi()
    }, [])

    return (
        vendorList != null && <div className='flex flex-col w-[80%] mx-auto'>
            <p className='font-sans text-xl font-bold'>Shops to get you started!</p>
            <div className='flex'>
                {
                    vendorList.map((item, index) => {
                        return <div key={index} className='bg-slate-100  w-[200px] rounded-lg'>
                            <div>
                                <img className='w-[200px] object-fill h-[150px] bg-white' src={item.image}></img>
                            </div>
                            <div className='bg-white shadow-sm p-3'>
                                <p className='tracking-tight font-serif leading-20 p-1'>{item.username}</p>
                                <p className='tracking-tight cursor-pointer font-serif leading-20 p-2 no-underline w-[100px] text-white bg-black rounded-full' onClick={() => onClickVendor(item.id)}>Explore</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
