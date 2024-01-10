'use client'
import { useDateContext } from '@/utils/contexts/datecontext'
import React from 'react'

const ChangeIndex = ({ setVariant }: { setVariant: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const dateContext = useDateContext()

    function increaseIndex() {
        if (dateContext.viewIndex.end >= 55) return
        setVariant(false)
        setTimeout(() => {
            const start = dateContext.viewIndex.start + 7
        const end = dateContext.viewIndex.end + 7
        dateContext.setViewIndex({ start, end })
        }, 800)
        setTimeout(() => {
            setVariant(true)
        }, 1000)
        
    }

    function decreaseIndex() {
        if (dateContext.viewIndex.start <= 6) return
        setVariant(false)
        setTimeout(() => {
            const start = dateContext.viewIndex.start - 7
            const end = dateContext.viewIndex.end - 7
            dateContext.setViewIndex({ start, end })
        }, 800)
        
        setTimeout(() => {
            setVariant(true)
        }, 1000)
    }

    return (
        <div className='flex flex-row gap-4'>
            <button onClick={() => { decreaseIndex() }}>
                <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                </svg>
            </button>
            <button onClick={() => { increaseIndex() }}>
                <svg className="w-6 h-6 text-gray-800 dark:text-black" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                </svg>
            </button>
        </div>
    )
}

export default ChangeIndex