import { HeadFont } from '@/utils/fonts/applyfont'
import { card } from '@/utils/types/types'
import Image from 'next/image'
import React from 'react'

const ImageCard = ({ card }: { card: card }) => {
    return (
        <div className='flex flex-col w-[200px] gap-4'>
            <Image src={`${card.image}`} alt='Nails' width={1024} height={1024}/>
            <h4 className={`${HeadFont.className} text-3xl`}>
                {
                    card.type
                }
            </h4>
            <p>
                {
                    card.description
                }
            </p>
        </div>
    )
}

export default ImageCard