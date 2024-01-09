import { HeadFont } from '@/utils/fonts/applyfont'
import { TESTIMONIALS } from '@/utils/variables/variables'
import React from 'react'

const Testimonials = () => {
  return (
    <div className='mb-12'>
      <h1 className={`${HeadFont.className} text-center text-5xl mb-5`}>
        Testimonials
      </h1>
      <div className='flex gap-5 flex-wrap justify-center'>
        {
          TESTIMONIALS.map((testimonial, index) => (
            <div key={index} className='p-4 flex flex-col bg-blue-300 w-[300px]'>
              <p className='text-center'>
                {testimonial.description}
              </p>
              <p className='text-center'>
                 - {testimonial.name}
              </p>
              <p className='text-center'>{testimonial.image} - Should be Changed with Image</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Testimonials