'use client'

import { Player } from '@lottiefiles/react-lottie-player'

export default function Loading() {
  return (
    <div className='flex w-full min-h-dvh h-full justify-center items-center'>
      <Player
        autoplay
        loop
        src='/animations/loading.json'
        className='w-1/2 h-1/2'
      />
    </div>
  )
}
