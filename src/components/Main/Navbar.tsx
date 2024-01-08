import { HeadFont } from '@/utils/fonts/applyfont'
import { NAVLINKS } from '@/utils/variables/variables'
import React from 'react'
import Navlink from './Navlink'


function NavLinks(start: number, finish: number) {
    const display = NAVLINKS.map((link, index) => {
        if (link.id >= start && link.id < finish) {
            return <Navlink link={link} key={index}/>
        }
    })
    return display
}

const Navbar = () => {
    return (
        <div className='fixed bg-white bg-opacity-80 flex md:grid grid-cols-3 items-center justify-center  w-full py-4  md:px-48 md:gap-32'>
            <div className='hidden md:flex col-span-1 items-center justify-around gap-8'>
                {
                    NavLinks(0, 2)
                }

            </div>
            <div className='flex flex-row gap-4 col-span-1 items-center justify-center text-center'>
                <h1 className={`${HeadFont.className} text-3xl lg:text-5xl`}>
                    Chelsea's Nails
                </h1>
                <button className='block md:hidden'>
                    <svg className="w-6 h-6 text-gray-800 dark:text-accentprimary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                    </svg>
                </button>
            </div>

            <div className='hidden md:flex col-span-1 items-center  justify-around gap-8'>
                {
                    NavLinks(2, 4)
                }
            </div>

        </div>
    )
}

export default Navbar