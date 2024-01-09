'use client'
import { link } from '@/utils/types/types'
import Link from 'next/link'
import React, { Fragment } from 'react'
import { motion } from 'framer-motion'

const Navlink = ({ link, delay }: { link: link, delay: number }) => {
  return (
    <Fragment>
      <Link href={link.to}>
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2  * delay}}
        className='w-[150px] py-2 flex justify-center border border-black hover:bg-black hover:text-white transition ease-in-out duration-300'>
          <span>
            {link.name}
          </span>
        </motion.div>

      </Link>
    </Fragment>
  )
}

export default Navlink