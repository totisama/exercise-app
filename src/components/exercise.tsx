'use client'

import Image from 'next/image'
import dynamic from 'next/dynamic'
import { CountdownTimer } from '@/components/countdown-timer'
import { ExerciseButton } from '@/components/exercise-button'
import { ExerciseType } from '@/generated/graphql'
import { useExercise } from '@/hooks/useExercise'
import { useIsPlaying } from '@/hooks/useIsPlaying'
import { type Exercise as ExerciseInterface } from '@/types'
import { useSpeak } from '@/hooks/useSpeak'
import { useMusic } from '@/hooks/useMusic'
import { PlayIcon, SkipIcon } from '@/icons'
import { FinishWorkout } from '@/components/finish-workout'
import { Audios } from './audios'

// importing it this way to avoid hydration error
const ReactPlayer = dynamic(async () => await import('react-player/lazy'), {
  ssr: false,
})

interface ExerciseProps {
  exercises: ExerciseInterface[]
}

export const Exercise = ({ exercises }: ExerciseProps) => {
  const { audioRef, play, setVolume } = useMusic()
  const { audioRef: audioRefCD, play: playCD } = useMusic()
  const { audioRef: audioRefFinish, play: playFinish } = useMusic()
  const { isPlaying, togglePlaying } = useIsPlaying(play)
  const {
    currentSet,
    listeningInstructions,
    finishInstructions,
    currentExercise,
    handleNextExercise,
    nextExercise,
    finishedWorkout,
  } = useExercise(exercises, setVolume, playFinish, togglePlaying)
  useSpeak(currentExercise, isPlaying, finishInstructions)

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
          playCountdown={playCD}
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
        <ExerciseButton
          bgColor='bg-light-green'
          onClick={togglePlaying}
          disabled={finishedWorkout}
        >
          <span className='flex gap-1 items-center justify-center'>
            <PlayIcon className='h-7 w-7 font-bold' />
            Start
          </span>
        </ExerciseButton>
      )}
      {isPlaying && (
        <ExerciseButton
          disabled={listeningInstructions}
          onClick={nextExercise}
          bgColor='bg-light-blue'
        >
          <span className='flex gap-1 items-center justify-center'>
            <SkipIcon className='h-7 w-7 font-bold' />
            Skip exercise
          </span>
        </ExerciseButton>
      )}
      <FinishWorkout finishedWorkout={finishedWorkout} />
      <Audios
        audioRef={audioRef}
        audioRefCD={audioRefCD}
        audioRefFinish={audioRefFinish}
      />
    </>
  )
}
