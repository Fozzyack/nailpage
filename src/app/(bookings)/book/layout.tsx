'use client'
import BreadCrumbs from '@/components/book/BreadCrumbs'
import Totals from '@/components/book/Totals'
import { ServiceContext } from '@/utils/contexts/servicecontext'
import { HeadFont } from '@/utils/fonts/applyfont'
import { services } from '@/utils/types/types'
import React, { useState } from 'react'



const Layout = ({ children }:
    { children: React.ReactNode }) => {

    const [services, setServices] = useState<services[]>([])
    const [index, setIndex] = useState<number>(0)
    
    

    

    return (
        <ServiceContext.Provider value={{ services, setServices, index, setIndex }}>

            <div>
                <div>
                    <h3 className={`${HeadFont.className} text-center w-full text-5xl pt-8 px-5`}>Book Appointment</h3>
                </div>
                <div className='px-8'>
                <BreadCrumbs />
                </div>
                <div className='flex flex-col md:grid md:grid-cols-12 mt-5 items-start justify-center gap-5 lg:gap-20 px-8 '>
                    <div className='col-span-7 w-full pb-32'>
                        
                        {children}
                    </div>
                    <div className='col-span-5 w-full'>
                        <Totals />
                    </div>

                </div>
            </div>

        </ServiceContext.Provider>
    )
}

export default Layout