import { HeadFont } from '@/utils/fonts/applyfont'
import { SERVICES_INFO } from '@/utils/variables/variables'
import React from 'react'
import ImageCard from './ImageCard'

const Services = () => {
  return (
    <div className='flex flex-col text-center mt-12 justify-center'>
        <h3 className={`${HeadFont.className} text-5xl`}>
            Services
        </h3>
        <div className='flex flex-row flex-wrap gap-8 items-start justify-around my-12 '>
            {
                SERVICES_INFO.map((service, index) => (
                    <ImageCard card={service} key={index}/>
                ))
            }
        </div>
    </div>
  )
}

export default Services