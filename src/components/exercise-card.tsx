import { type ExerciseType } from '@/generated/graphql'
import { type Exercise } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const EXERCISE_COLORS = {
  WARMUP: 'bg-yellow',
  EXERCISE: 'bg-blue-400',
  BREAK: 'bg-green-400',
  STRETCHING: 'bg-red-400',
}

interface ExerciseCardProps {
  exercise: Exercise
}

export const ExerciseCard = ({ exercise }: ExerciseCardProps) => {
  const color = EXERCISE_COLORS[exercise.type as ExerciseType]

  return (
    <Link
      href={`/exercise/${exercise.id}`}
      key={exercise.id}
      className={`w-full rounded-3xl flex flex-col ${color} items-center p-5 space-y-5 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-105`}
    >
      <Image
        src={exercise.image.url}
        alt='exercise'
        width={500}
        height={500}
        className='rounded-3xl'
      />
      <div>
        <h3 className='text-2xl font-medium'>{exercise.name}</h3>
        <p>{exercise.description}</p>
      </div>
    </Link>
  )
}
