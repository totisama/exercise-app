'use client'

import { useState } from 'react'

export const useIsPlaying = (play: () => void) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlaying = () => {
    setIsPlaying(!isPlaying)
    play()
  }

  return { isPlaying, togglePlaying }
}
