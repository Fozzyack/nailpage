'use client'
import { useServiceContext } from '@/utils/contexts/servicecontext'
import React from 'react'

const Page = () => {
    const context = useServiceContext()
    React.useEffect(() => {
        context.setIndex(1)

    }, [])
    return (
        <div>
            Time
        </div>
    )
}

export default Page