'use client'

import { useRef } from 'react'

export const useMusic = () => {
  const audioRef = useRef<HTMLAudioElement>(null)

  const play = () => {
    audioRef.current?.play()
    setVolume(0.25)
  }

  const stop = () => {
    audioRef.current?.pause()
  }

  const setVolume = (volume: number) => {
    if (audioRef.current === null) {
      return
    }

    audioRef.current.volume = volume
  }

  return { audioRef, play, stop, setVolume }
}
