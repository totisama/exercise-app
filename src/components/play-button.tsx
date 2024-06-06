'use client'

import { PauseIcon, PlayIcon } from '@/icons'

export const PlayButton = ({
  isPaused,
  togglePause,
}: {
  isPaused: boolean
  togglePause: () => void
}) => {
  return (
    <button
      onClick={togglePause}
      className='fixed bottom-0 w-full bg-orange text-center font-semibold text-3xl rounded-3xl py-2 transition-transform duration-300 ease-in-out hover:scale-105'
    >
      {isPaused ? (
        <span className='flex gap-1 items-center justify-center'>
          <PlayIcon className='h-7 w-7 font-bold' />
          Start
        </span>
      ) : (
        <span className='flex gap-1 items-center justify-center'>
          <PauseIcon className='h-7 w-7 font-bold' />
          Pause
        </span>
      )}
    </button>
  )
}
