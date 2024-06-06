'use client'

import { type ExerciseType } from '@/generated/graphql'
import { useRef, useState } from 'react'

interface Exercise {
  id: string
  name: string
  description: string
  instructions: string
  sets: number
  duration: number
  repetitions: number
  type: ExerciseType
  video: string | null
  image: { url: string }
}
export const useExercise = (
  exercises: Exercise[],
  setVolume: (value: number) => void,
  playFinish: () => void,
  togglePlaying: () => void
) => {
  const currentExerciseIndex = useRef(0)
  const [currentSet, setCurrentSet] = useState(1)
  const [listeningInstructions, setListeningInstructions] = useState(true)
  const [finishedWorkout, setFinishedWorkout] = useState(false)
  const [currentExercise, setCurrentExercise] = useState(
    exercises[currentExerciseIndex.current]
  )

  const handleNextExercise = () => {
    if (currentSet < currentExercise.sets) {
      setCurrentSet((prev) => ++prev)
      setCurrentExercise(exercises[currentExerciseIndex.current])
    } else if (
      currentExerciseIndex.current <= exercises.length &&
      currentSet === currentExercise.sets
    ) {
      if (currentExerciseIndex.current + 1 === exercises.length) {
        finishWorkout()
        return
      }

      nextExercise()
    }
  }

  const finishWorkout = () => {
    setFinishedWorkout(true)
    playFinish()
    togglePlaying()
  }

  const nextExercise = () => {
    currentExerciseIndex.current++
    setCurrentSet(1)
    setListeningInstructions(true)
    setVolume(0.25)

    setCurrentExercise(exercises[currentExerciseIndex.current])
  }

  const finishInstructions = () => {
    setVolume(1)
    setListeningInstructions(false)
  }

  return {
    currentSet,
    listeningInstructions,
    finishInstructions,
    currentExercise,
    handleNextExercise,
    nextExercise,
    finishedWorkout,
  }
}
