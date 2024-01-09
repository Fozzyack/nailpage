

'use client'
import { useServiceContext } from '@/utils/contexts/servicecontext'
import { HeadFont } from '@/utils/fonts/applyfont'
import { services } from '@/utils/types/types'
import { SERVICE_LIST } from '@/utils/variables/variables'
import React from 'react'



const Page = () => {
  const context = useServiceContext()
  function addService(service: services) {

    context.setServices([...context.services, service])
  }

  return (
    <section>
      <div className='p-12 border border-black'>
        <div className='px-4 text-center md:text-start'>
          <p className='text-slate-400 mt-2 '>No Payment Require to book</p>
          <h1 className={`${HeadFont.className} text-4xl underline`}>Services</h1>
        </div>

        <div className='flex flex-col'>
          {
            SERVICE_LIST.filter(service => !context.services.includes(service)).map((service, index) => (
              <div key={index} className='flex flex-col md:flex-row justify-between w-full p-4 items-center text-center md:text-start'>
                <div>
                  <p className='font-bold'>
                    {service.name}
                  </p>
                  <p>
                    {service.description}
                  </p>
                  <p>
                    {service.duration}
                  </p>
                </div>

                <div className='flex flex-col md:flex-row gap-4'>
                  <span>
                    ${service.price}
                  </span>
                  <button className='px-2 rounded bg-bsecondary' onClick={() => addService(service)}>
                    +
                  </button>

                </div>

              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Page