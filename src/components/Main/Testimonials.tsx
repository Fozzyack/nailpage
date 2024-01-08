import { HeadFont } from '@/utils/fonts/applyfont'
import React from 'react'

const Testimonials = () => {
  return (
    <div  className='mb-12'>
        <h1 className={`${HeadFont.className} text-center text-5xl`}>
            Testimonials
        </h1>
        <div className='text-center bg-gradient-to-t from-bprimary to-white from-60% flex flex-col justify-center items-center py-12 px-4 rounded'>
            Sample Testimonial Here. Should be lined am in a row
        </div>
    </div>
  )
}

export default Testimonials