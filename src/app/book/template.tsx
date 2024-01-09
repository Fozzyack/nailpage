'use client'
import { ServiceContext } from '@/utils/contexts/servicecontext'
import { HeadFont } from '@/utils/fonts/applyfont'
import { services } from '@/utils/types/types'
import React, { useState } from 'react'

function totalAmount(services: services[]) {
    let total = 0
    services.forEach(service => {
        total += service.price
    })
    return total
}

const template = ({ children }:
    { children: React.ReactNode }) => {
    const [services, setServices] = useState<services[]>([])

    function removeService(service: services) {
        setServices(services.filter(s => s !== service))
    }

    return (
        <ServiceContext.Provider value={{ services, setServices }}>


            <div className='flex flex-col md:grid md:grid-cols-12 pt-20 items-start justify-center gap-5 lg:gap-20 px-8 '>
                <div className='col-span-7 w-full '>
                    {children}
                </div>
                <div className='col-span-5 w-full'>
                    <div className='fixed md:w-[36%] w-screen max-sm:bottom-0 max-sm:left-0 bg-white'>
                        <div className='border border-black w-full flex flex-col items-center p-8'>
                            <h3 className={`${HeadFont.className} text-3xl`}>Total</h3>
                            {
                                services.map((service, index) => (
                                    <div key={index} className='md:flex flex-row justify-between w-full p-4 hidden'>
                                        <p className='font-bold'>
                                            {service.name}
                                        </p>
                                        <div className='flex flex-row gap-4'>
                                            <span>
                                                ${service.price}
                                            </span>
                                            <button className='px-2 rounded bg-bsecondary' onClick={() => removeService(service)}>
                                                -
                                            </button>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <div>
                            {services.length !== 0 &&
                                <div className='border border-black w-full flex flex-row justify-between px-12 py-2'>
                                    <p className='font-bold'>
                                        Total
                                    </p>
                                    <span>
                                        ${totalAmount(services)}
                                    </span>
                                </div>
                            }

                        </div>
                    </div>


                </div>

            </div>
        </ServiceContext.Provider>
    )
}

export default template