import React from 'react'
import TextField from '@mui/material/TextField';
import './homepage.css'
import images from './HomePageImages'

export default function HomePage() {
    return (
        <div className='h-[80vh] relative'>
            <div className='z-[99999] rounded-md  bg-white w-[80%] lg:w-[50%] absolute top-[10%] left-[10%] bottom-[10%] right-[10%] gap-2 flex flex-col justify-center items-center'>
                <h1 className='font-serif w-[50%] leading-[50px] tracking-tighter line-clamp-6'>Find everything you need for a simple lifestyle</h1>
                <div className='w-[40%]'>
                    <TextField fullWidth id="standard-basic" label="Search" variant="standard" />
                </div>
                <span className='font-serif text-xs tracking-tighter opacity-60'>Shop our curated selection to make your life easier.</span>
            </div>
            <div className='slider'>
                <div className='slider-track'>
                    {images.map((item, index) => {
                        return <div key={index} className='slide bg-slate-100'>
                            <img src={item} className='w-full h-auto object-cover'></img>
                        </div>
                    })}
                </div>
            </div>

            {/* <div className='slider'>
                <div className='slider-track-reverse'>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                </div>
            </div>

            <div className='slider'>
                <div className='slider-track'>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                    <div className='slide bg-slate-100'></div>
                </div>
            </div> */}
        </div>
    )
}
