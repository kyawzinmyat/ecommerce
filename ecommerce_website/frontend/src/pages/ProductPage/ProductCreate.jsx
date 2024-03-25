import React from 'react'



export default function ProductCreate({ setIsAdd }) {


    return (
        <div className=' bg-slate-100 relative' >
            <div className='flex text-xs flex-col '>
                <div className='py-[40px] row flex justify-center items-center flex-col gap-3'>
                    <input placeholder='Product Name...' className='col-10 rounded-lg border-0 round-20 p-[5px]'></input>

                    <input placeholder='Price' className='col-10 rounded-lg border-0 round-20 p-[5px]'></input>

                    <input placeholder='Quantity' className='col-10 rounded-lg border-0 p-[5px]'></input>

                    <input className='col-10' type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />
                    <div className='flex flex-col gap-1'>
                        <a className='button no-underline  text-center bg-slate-700 text-white p-1 cursor-pointer mx-2'>Add</a>
                        <a className='button  no-underline text-center bg-red-600 text-white p-1 cursor-pointer mx-2' onClick={() => setIsAdd(false)} >Cancle</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
