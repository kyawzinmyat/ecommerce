import React, { useContext, useEffect, useState } from 'react'
import UserContext from '../../context/UserContext'

export default function VednorContainer() {

    let [vendorList, setVendorList] = useState(null)
    let { getVendor } = useContext(UserContext)


    const getVendorApi = async () => {
        const result = await getVendor();
        console.log(result, '0000==================================1')
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
                        return <div key={index} className='bg-slate-100  w-[200px]  rounded-lg'>
                            <div>
                                <img className='w-[200px] object-fill' src={item.image}></img>
                            </div>
                            <div className='bg-white shadow-sm p-3'>
                                <p className='tracking-tight font-serif leading-20 p-1'>{item.username}</p>
                                <p className='tracking-tight font-serif leading-20 p-2 rounded-full no-underline w-[100px] text-white bg-black'>Explore</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
