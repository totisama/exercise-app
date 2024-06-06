import { useState } from 'react'

export const useIsPlaying = () => {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlaying = () => {
    setIsPlaying(!isPlaying)
  }

  return { isPlaying, togglePlaying }
}
