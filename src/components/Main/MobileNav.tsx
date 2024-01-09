'use client'
import { NAVLINKS } from '@/utils/variables/variables'
import React from 'react'
import Navlink from './Navlink'

function NavLinks(start: number, finish: number) {
    const display = NAVLINKS.map((link, index) => {
        if (link.id >= start && link.id < finish) {
            return <Navlink link={link} key={index} delay={index}/>
        }
    })
    return display
}

const MobileNav = () => {
    return (
        <div className='w-full flex flex-col gap-4 items-center mt-4'>
            {
                NavLinks(0, 4)
            }
        </div>
    )
}

export default MobileNav