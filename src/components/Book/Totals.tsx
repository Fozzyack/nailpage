'use client'
import { useServiceContext } from '@/utils/contexts/servicecontext'
import { HeadFont } from '@/utils/fonts/applyfont'
import { services } from '@/utils/types/types'
import { useRouter } from 'next/navigation'
import React from 'react'

function totalAmount(services: services[]) {
    let total = 0
    services.forEach(service => {
        total += service.price
    })
    return total
}
const Totals = () => {
    const context = useServiceContext()
    const router = useRouter()
    function removeService(service: services) {
        context.setServices(context.services.filter(s => s !== service))
    }
    function continueToTime() {
        router.push('/book/time')
        context.setIndex(1)
    }
    return (
        <div className='fixed md:w-[36%] w-screen max-sm:bottom-0 max-sm:left-0 bg-white'>
            <div className='border border-black w-full flex flex-col items-center py-2 md:py-8'>
                <h3 className={`${HeadFont.className} text-3xl`}>Total</h3>
                {
                    context.services.map((service, index) => (
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
                {context.services.length !== 0 &&
                    <div className='border border-black'>
                        <div className=' w-full flex flex-row justify-between px-12 py-2'>
                            <p className='font-bold'>
                                Total
                            </p>
                            <span>
                                ${totalAmount(context.services)}
                            </span>

                        </div>
                        {
                            context.index === 0 &&
                            <button onClick={() => {continueToTime()}} className='w-full py-2 bg-black text-white'>Continue</button>
                        }
                        
                    </div>

                }

            </div>
        </div>
    )
}

export default Totals