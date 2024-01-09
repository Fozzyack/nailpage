'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
const Hero = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-12 mb-20 h-screen py-28 justify-center gap-5'>
            <div className='col-span-5 flex flex-col justify-center items-center md:items-start text-center  md:text-start text-accentprimary lg:h-[800px]'>
                <h1 className='text-xl md:text-5xl'>
                    Nail the fun, <br /> embrace the beauty.
                </h1>
                <p>
                    Transforming ordinary nails into exquisite works of art, my nail salon is dedicated to enhancing your natural beauty one perfectly manicured fingertip at a time.
                </p>
                <Link href={'/book'} className='px-4 py-2 border-2 border-bprimary  text-bprimary my-5 hover:bg-bprimary hover:text-black transition ease-in-out duration-300'>
                    Book an Appointment
                </Link>
            </div>
            <div className='md:hidden col-span-7 flex items-center justify-center overflow-hidden' >
                <Image src={'/HeroImage.png'} alt='NailPolish' width={1792} height={1024}  />
            </div>
            <div className='col-span-7 md:flex items-center justify-center overflow-hidden hidden' >
                <Image src={'/HeroImageNoBG.png'} alt='NailPolish' width={1792} height={1024}  />
            </div>
        </div>


    )
}

export default Hero