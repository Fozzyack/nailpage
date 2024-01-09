'use client'
import { HeadFont } from '@/utils/fonts/applyfont'
import React from 'react'
import Instagram from './SocialIcons/Instagram'
import Facebook from './SocialIcons/Facebook'
const Socials = () => {


  return (
    <div>
      <h3 className={`${HeadFont.className} text-5xl text-center`}>
        Socials
      </h3>
      <div className='flex gap-4 items-center justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <Instagram />
          <p>Instagram</p>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <Facebook />
          <p>Facebook</p>
        </div>

      </div>
    </div>
  )
}

export default Socials