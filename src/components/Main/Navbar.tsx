'use client'
import { HeadFont } from '@/utils/fonts/applyfont'
import { NAVLINKS } from '@/utils/variables/variables'
import React from 'react'
import Navlink from './Navlink'
import MobileNav from './MobileNav'
import Link from 'next/link'


function NavLinks(start: number, finish: number) {
    const display = NAVLINKS.map((link, index) => {
        if (link.id >= start && link.id < finish) {
            return <Navlink link={link} key={index} delay={0}/>
        }
    })
    return display
}


const Navbar = () => {

    const [show, setShow] = React.useState(false)

    const toggle = () => {
        setShow(!show)
    }

    return (
        <nav className='fixed bg-white bg-opacity-80 flex flex-col md:grid grid-cols-3 items-center justify-center  w-full py-4  md:px-48 md:gap-32'>
            <div className='hidden md:flex col-span-1 items-center justify-around gap-8'>
                {
                    NavLinks(0, 2)
                }

            </div>
            <div className='flex flex-row gap-4 col-span-1 items-center justify-center text-center'>
                <Link href={'/'} className={`${HeadFont.className} text-3xl lg:text-5xl`}>
                    Chelsea's Nails
                </Link>
                <button className='block md:hidden' onClick={toggle}>
                    {
                        show ?
                            <svg className="w-6 h-6 text-gray-800 dark:text-accentprimary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                            </svg> :
                            <svg className="w-6 h-6 text-gray-800 dark:text-accentprimary" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7 7.674 1.3a.91.91 0 0 0-1.348 0L1 7" />
                            </svg>
                    }
                </button>
            </div>

            <div className='hidden md:flex col-span-1 items-center  justify-around gap-8'>
                {
                    NavLinks(2, 4)
                }
            </div>

            {
                show && <MobileNav />
            }


        </nav>
    )
}

export default Navbar