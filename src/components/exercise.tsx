'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { CountdownTimer } from '@/components/countdown-timer'
import { PlayButton } from '@/components/play-button'
import { ExerciseType } from '@/generated/graphql'
import dynamic from 'next/dynamic'

// importing it this way to avoid hydration error
const ReactPlayer = dynamic(async () => await import('react-player/lazy'), {
  ssr: false,
})

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
    video: string | null
    image: { url: string }
  }>
}

export const Exercise = ({ exercises }: ExerciseProps) => {
  const currentExerciseIndex = useRef(1)
  const [currentSet, setCurrentSet] = useState(1)
  const [listeningInstructions, setListeningInstructions] = useState(true)
  const [currentExercise, setCurrentExercise] = useState(
    exercises[currentExerciseIndex.current]
  )
  const [isPlaying, setIsPlaying] = useState(false)
  const utterance = new SpeechSynthesisUtterance()

  const handleNextExercise = () => {
    if (currentSet < currentExercise.sets) {
      setCurrentSet((prev) => ++prev)
      setCurrentExercise(exercises[currentExerciseIndex.current])
    } else if (
      currentExerciseIndex.current <= exercises.length &&
      currentSet === currentExercise.sets
    ) {
      currentExerciseIndex.current++
      setCurrentSet(1)
      setListeningInstructions(true)

      setCurrentExercise(exercises[currentExerciseIndex.current])
    }
  }

  const handleSpeak = () => {
    utterance.text = currentExercise.instructions
    utterance.lang = 'en-US'
    utterance.rate = 0.9
    utterance.onend = () => {
      setListeningInstructions(false)
    }

    speechSynthesis.speak(utterance)
  }

  const toggleExercise = () => {
    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    if (!isPlaying) {
      return
    }

    handleSpeak()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentExercise, isPlaying])

  return (
    <>
      <section className='w-full rounded-3xl flex flex-col items-center space-y-5'>
        <div className='h-1/2 rounded-3xl'>
          <h1 className='text-3xl text-center font-bold'>
            {currentExercise.name}
          </h1>
          {currentExercise.video !== null ? (
            <ReactPlayer
              playing={isPlaying}
              loop={true}
              url={currentExercise.video}
              width={window.innerWidth - 20}
              height={250}
              volume={0}
              muted={true}
            />
          ) : (
            <Image
              src={currentExercise.image.url}
              alt='Exercise'
              width={500}
              height={500}
              className='h-64 w-64 rounded-3xl'
            />
          )}
        </div>
      </section>
      <section className='w-full flex flex-col gap-5 items-center justify-between'>
        <CountdownTimer
          key={currentExercise.id}
          isPlaying={!listeningInstructions && isPlaying}
          time={currentExercise.duration}
          onFinish={handleNextExercise}
        />
        {currentExercise.type === ExerciseType.Exercise && (
          <div className='flex justify-center gap-3'>
            <h2 className='font-semibold text-2xl'>
              Sets: {currentSet} of {currentExercise.sets}
            </h2>
            <span className='font-semibold text-2xl'>|</span>
            <h2 className='font-semibold text-2xl'>
              Reps per set: {currentExercise.repetitions}
            </h2>
          </div>
        )}
      </section>
      {!isPlaying && (
        <PlayButton
          isPaused={!isPlaying}
          togglePause={toggleExercise}
        />
      )}
    </>
  )
}
