import React from 'react'
import phoneImage from './assets/homepage/phone.webp'

export default function Intro2() {
    return (
        <div>
            <h3 className='font-serif text-center mt-[200px]font-bold tracking-tighter leading-40 text-[2.4em]'>The most rewarding way to shop</h3>
            <div className='grid grid-cols-1 gap- bg-white lg:grid-cols-2 w-11/12 lg:w-[80%] mx-auto my-[10em]'>

                <div className='flex flex-col lg:flex-row-reverse bg-slate-50 lg:py-10 relative rounded-[30px]'>
                    <div className='mx-auto'>
                        <img className='relative top-[-100px]' src={phoneImage}></img>
                    </div>
                    <div className='flex flex-col gap-1 lg:justify-between border-2 lg:border-0  lg:p-5 p-10'>
                        <div>
                            <h4>Shop Pay</h4>
                            <p className='w-full tracking-tighter leading-40 font-sans font-light text-sm'>Shop Pay is the one-tap checkout you crave. Enjoy interest-free payments up to 12 months and instant rewards with every order.</p>
                        </div>
                        <div className='bg-slate-100 rounded-full p-3 w-[110px]'>
                            Learn more
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}
