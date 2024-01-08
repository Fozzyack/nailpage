import { link } from '@/utils/types/types'
import Link from 'next/link'
import React, { Fragment } from 'react'

const Navlink = ({ link }: { link: link }) => {
  return (
    <Fragment>
      <Link href={link.to}>
        <div className='w-[100px] py-2 flex justify-center border border-black hover:bg-black hover:text-white transition ease-in-out duration-300'>
          <span>
            {link.name}
          </span>
        </div>

      </Link>
    </Fragment>
  )
}

export default Navlink