import { HeadFont } from '@/utils/fonts/applyfont'
import Image from 'next/image'
import React from 'react'

const About = () => {
    return (
        <div className='flex flex-wrap md:grid md:grid-cols-2 justify-center gap-20 items-center' id='about'>
            <div>
                <Image src={'/HeroImageForNow.png'} alt='CoolLookingNails' width={1024} height={1024} className='w-[100%] h-[100%]' />
            </div>
            <div className='text-center md:text-start'>
                <h1 className={`${HeadFont.className} text-5xl`}>
                    About Me
                </h1>
                <p>
                    I'm Chelsea the creative force behind this nail salon, where nail artistry meets heartfelt passion. With a spirit that's as vibrant as my nail designs, I'm here to share a bit of my story and what drives me to bring the best in nail artistry to you.
                </p>
                <p>
                    From a young age, I discovered my love for all things creative. Whether it was painting, crafting, or experimenting with colors, I've always had a knack for turning the ordinary into something extraordinary. My journey into the world of nail artistry was a natural extension of my artistic soul.

                    I strive to infuse every nail design with a touch of personality and uniqueness, ensuring that each set of nails reflects the individual beauty and style of my clients. Your nails are my canvas, and together, we'll create stunning masterpieces that make you feel confident and radiant.
                </p>
            </div>


        </div>
    )
}

export default About