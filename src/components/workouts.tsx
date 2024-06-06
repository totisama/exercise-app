'use client'

import { ArrowDownIcon, ArrowUpIcon } from '@/icons'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { type Workout } from '@/types'

interface WorkoutsProps {
  workouts: Workout[]
}

export const Workouts = ({ workouts }: WorkoutsProps) => {
  const [open, setOpen] = useState(false)

  return (
    <article
      className='w-full bg-light-green rounded-3xl py-2 px-4 hover:cursor-pointer'
      onClick={() => {
        setOpen(!open)
      }}
    >
      <section className='flex justify-between items-center'>
        <h2 className='text-2xl font-medium'>Workouts</h2>
        <button className='transition-all duration-300 ease-in-out hover:scale-125'>
          {open ? (
            <ArrowUpIcon className='h-7 w-7' />
          ) : (
            <ArrowDownIcon className='h-7 w-7' />
          )}
        </button>
      </section>
      {open && (
        <>
          <hr className='my-2 border-black' />
          <motion.div
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ ease: 'easeOut', duration: 0.75 }}
          >
            <section className='flex flex-col mt-5 gap-5 pb-5'>
              {workouts.map((workout) => (
                <Link
                  key={workout.id}
                  href={`/workout/${workout.id}`}
                  className='bg-white flex justify-center rounded-2xl px-2 py-3 w-full text-lg font-medium transition-all duration-300 ease-in-out hover:cursor-pointer hover:scale-105'
                >
                  <div className='w-1/2'>
                    <Image
                      src={workout.image?.url}
                      alt='workout'
                      width={300}
                      height={300}
                      className='h-40 w-40 rounded-3xl'
                    />
                  </div>
                  <div className='w-1/2 px-2 flex flex-col justify-center items-center'>
                    <h3 className='text-lg'>{workout.subtitle}</h3>
                    <h2 className='text-lg text-center font-semibold'>
                      {workout.name}
                    </h2>
                  </div>
                </Link>
              ))}
            </section>
          </motion.div>
        </>
      )}
    </article>
  )
}
