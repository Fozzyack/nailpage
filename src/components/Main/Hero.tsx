'use client'
import React from 'react'
const Hero = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-12 mb-20 h-screen py-28 justify-center'>
            <div className='col-span-7 flex flex-col justify-center items-center md:items-start text-center  md:text-start text-accentprimary lg:h-[800px]'>
                <h1 className='text-xl md:text-5xl'>
                    Nail the fun, embrace the beauty.
                </h1>
                <p>
                    Transforming ordinary nails into exquisite works of art, my nail salon is dedicated to enhancing your natural beauty <br /> one perfectly manicured fingertip at a time.
                </p>
                <button className='px-4 py-2 border-2 border-gradone  text-gradone my-5 hover:bg-gradone hover:text-white transition ease-in-out duration-300'>
                    Contact Me
                </button>
            </div>
            <div className='col-span-5 border flex items-center justify-center overflow-hidden' >
                <h3>IMAGE HERE</h3>
            </div>
        </div>


    )
}

export default Hero