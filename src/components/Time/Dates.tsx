'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ChangeIndex from './ChangeIndex'
import { useDateContext } from '@/utils/contexts/datecontext'

const Dates = () => {

    const [variant, setVariant] = React.useState(true)
    const dateContext = useDateContext()

    const variants = {
        show: {
            opacity: 1,
        
        },
        hide: {
            opacity: 0,
        }
    }

    return (
        <div className='flex flex-col items-center gap-5'>
            <div className='flex gap-4 flex-wrap justify-center'>
                {
                    dateContext.dates.filter(date => date.index >= dateContext.viewIndex.start && date.index < dateContext.viewIndex.end).map((date, index) => {
                        const dateSplit = date.Date.toDateString().split(' ')
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={variant ? 'show' : 'hide'}
                                variants={variants}
                                transition={{ delay: 0.1 * index }}
                            >


                                <motion.button
                                    whileHover={{ y: -5 }}

                                >
                                    <div className='rounded-full w-[100px] h-[100px] border-2 border-black flex flex-col items-center justify-center hover:bg-bprimary transition ease-in-out duration-300'>
                                        <p>{dateSplit[0]}</p>
                                        <p>{dateSplit[2]}</p>
                                        <p>{dateSplit[1]}</p>
                                    </div>
                                </motion.button>
                            </motion.div>
                        )
                    })
                }

            </div>
            <ChangeIndex setVariant={setVariant} />
        </div>

    )
}

export default Dates