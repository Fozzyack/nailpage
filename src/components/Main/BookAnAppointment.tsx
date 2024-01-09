import { HeadFont } from '@/utils/fonts/applyfont'
import Link from 'next/link'
import React from 'react'

const BookAnAppointment = () => {
    return (
        <div className='flex flex-col md:grid md:grid-cols-2 gap-4 items-center my-5'>
            <div>
                <h3 className={`${HeadFont.className} text-5xl md:text-start text-center mb-5`}>
                    Book An Appointment
                </h3>
                <p className='text-center md:text-start'>
                    Ready to treat yourself to a pampering experience? Booking an appointment is just a click away! We can't wait to welcome you and provide our exceptional services. Simply use our easy and convenient booking system to secure your preferred date and time. Your journey to beauty and relaxation starts here.
                </p>
                <div className='flex justify-center md:justify-start my-5'>
                    <div className='px-3 py-2 border-2 border-black text-black hover:bg-black hover:text-white transition ease-in-out duration-300'>
                        <Link href={'/book'}>
                            Book an Appointment
                        </Link>
                    </div>
                </div>
            </div>
            <div className='border h-full justify-center items-center flex tracking-wide'>
                <p>IMAGE HERE</p>
            </div>



        </div>
    )
}

export default BookAnAppointment