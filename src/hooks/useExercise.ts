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
  setVolume: (value: number) => void
) => {
  const currentExerciseIndex = useRef(1)
  const [currentSet, setCurrentSet] = useState(1)
  const [listeningInstructions, setListeningInstructions] = useState(true)
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
      nextExercise()
    }
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
  }
}
