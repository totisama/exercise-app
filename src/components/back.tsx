'use client'

import { ArrowLeftIcon } from '@/icons'
import { useRouter } from 'next/navigation'

export const Back = () => {
  const router = useRouter()

  const goBack = () => {
    router.back()
  }

  return (
    <button
      className='flex gap-2 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-gray-900/10 px-3 py-1 rounded-3xl'
      onClick={goBack}
    >
      <ArrowLeftIcon className='h-7 w-7' />
      <h2 className='text-xl font-bold'>Go Back</h2>
    </button>
  )
}
