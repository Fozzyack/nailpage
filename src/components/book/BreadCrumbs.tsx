'use client'
import { useServiceContext } from '@/utils/contexts/servicecontext';
import { useRouter } from 'next/navigation';
import React, { Fragment } from 'react'

const BreadCrumbs = () => {
    const context = useServiceContext();
    const router = useRouter();
    function breadCrumbNavigate(url: string, index: number) {
        router.push(url)

    }
    return (
        <Fragment>
            <p className='hidden md:block'>
                {
                    context.index === 0 ?
                        <span className='font-bold'>Services</span> :
                        <button onClick={() => { breadCrumbNavigate('/book', 0) }}>
                            <span>Services</span>
                        </button>
                }
                <span>{' > '}</span>
                {
                    context.index === 1 ?
                        <span className='font-bold'>Date & Time</span> :
                        <button onClick={() => { breadCrumbNavigate('/book/time', 1) }}>
                            <span>Date & Time</span>
                        </button>
                }
                <span>{' > '}</span>
                {
                    context.index === 2 ?
                        <span className='font-bold'>Details</span> :
                        <button onClick={() => { breadCrumbNavigate('/book/details', 2) }}>
                            <span>Details</span>
                        </button>
                }
            </p>
        </Fragment>
    )
}

export default BreadCrumbs