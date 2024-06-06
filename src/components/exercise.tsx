'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import { CountdownTimer } from '@/components/countdown-timer'
import { PlayButton } from '@/components/play-button'
import { type ExerciseType } from '@/generated/graphql'

interface ExerciseProps {
  exercises: Array<{
    id: string
    name: string
    description: string
    instructions: string
    sets: number
    duration: number
    repetitions: number
    type: ExerciseType
    video: string
    image: { url: string }
  }>
}

export const Exercise = ({ exercises }: ExerciseProps) => {
  const currentExerciseIndex = useRef(0)
  const [exercise, setExercise] = useState(
    exercises[currentExerciseIndex.current]
  )
  const [isPlaying, setIsPlaying] = useState(false)

  const handleNextExercise = () => {
    if (currentExerciseIndex.current <= exercises.length) {
      currentExerciseIndex.current++

      setExercise(exercises[currentExerciseIndex.current])
    }
  }

  const toggleExercise = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <>
      <section className='w-full rounded-3xl flex flex-col items-center space-y-5'>
        <h1 className='text-3xl text-center font-bold'>{exercise.name}</h1>
        <Image
          src={exercise.image.url}
          alt='Exercise'
          width={500}
          height={500}
          className='h-64 w-64 rounded-3xl'
        />
      </section>
      <section className='w-full flex flex-col items-center justify-between'>
        <CountdownTimer
          isPlaying={isPlaying}
          time={exercise.duration}
          onFinish={handleNextExercise}
        />
        <PlayButton
          isPaused={!isPlaying}
          togglePause={toggleExercise}
        />
      </section>
    </>
  )
}
