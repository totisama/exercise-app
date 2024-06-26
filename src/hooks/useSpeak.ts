'use client'

import { type Exercise } from '@/types'
import { useEffect } from 'react'

export const useSpeak = (
  currentExercise: Exercise,
  isPlaying: boolean,
  finishInstructions: () => void
) => {
  let utterance = null

  if (typeof window !== 'undefined') {
    utterance = new SpeechSynthesisUtterance()
  }

  const handleSpeak = () => {
    if (utterance === null) {
      return
    }

    utterance.text = currentExercise.instructions
    utterance.lang = 'en-US'
    utterance.rate = 0.9
    utterance.onend = finishInstructions

    speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    if (!isPlaying) {
      return
    }

    handleSpeak()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentExercise, isPlaying])
}
