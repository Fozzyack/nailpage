'use client'
import Dates from '@/components/Time/Dates'
import { DateContext } from '@/utils/contexts/datecontext'
import { useServiceContext } from '@/utils/contexts/servicecontext'
import { DateList, indexList } from '@/utils/types/types'
import React from 'react'

const Page = () => {
    const context = useServiceContext()
    const [dates, setDates] = React.useState<DateList>([])
    const [viewIndex, setViewIndex] = React.useState<indexList>({ start: 0, end: 7 })

    React.useEffect(() => {
        context.setIndex(1)
        const today = new Date()
        const days: DateList = []
        for (let i = 0; i < 56; i++) {
            const date = new Date(today)
            date.setDate(today.getDate() + i)
            days.push({ index: i, Date: date })
        }
        setDates(days)

    }, [])
    return (
        <div>
            <DateContext.Provider value={{ dates, setDates, viewIndex, setViewIndex }}>
                <Dates />
            </DateContext.Provider>

        </div>
    )
}

export default Page