'use client'

import { ArrowDownIcon, ArrowUpIcon } from '@/icons'
import { useState } from 'react'

export const Workouts = () => {
  const [open, setOpen] = useState(false)

  return (
    <article className='w-full bg-light-green rounded-3xl py-2 px-4'>
      <section className='flex justify-between items-center space-x-2'>
        <h2 className='text-2xl font-medium'>Workouts</h2>
        <button
          onClick={() => {
            setOpen(!open)
          }}
          className='transition-all duration-300 ease-in-out hover:scale-125'
        >
          {open ? (
            <ArrowDownIcon className='h-7 w-7' />
          ) : (
            <ArrowUpIcon className='h-7 w-7' />
          )}
        </button>
      </section>
      {open && <section>hi</section>}
    </article>
  )
}
