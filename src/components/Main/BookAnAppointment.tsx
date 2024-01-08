import { HeadFont } from '@/utils/fonts/applyfont'
import React from 'react'

const BookAnAppointment = () => {
    return (
        <div>
            <h3 className={`${HeadFont.className} text-5xl md:text-start text-center`}>
                Book An Appointment
            </h3>
            <p className='text-center md:text-start'>
                Ready to treat yourself to a pampering experience? Booking an appointment is just a click away! We can't wait to welcome you and provide our exceptional services. Simply use our easy and convenient booking system to secure your preferred date and time. Your journey to beauty and relaxation starts here.
            </p>
        </div>
    )
}

export default BookAnAppointment