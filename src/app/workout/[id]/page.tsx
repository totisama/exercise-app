import { Back } from '@/components/back'
import { ExerciseCard } from '@/components/exercise-card'
import { StartButton } from '@/components/start-button'
import { sdk } from '@/lib/client'
import { type Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const id = params.id

  const { data } = await sdk.GetWorkoutExercises({ id })
  const { workout } = data

  return {
    title: `Exercise App | ${workout.name} workout`,
  }
}

export default async function WorkoutPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const { data } = await sdk.GetWorkoutExercises({ id })
  const { workout } = data

  if (workout === null || workout === undefined) {
    return <h1>Workout not found</h1>
  }

  return (
    <>
      <main className='w-full space-y-1 my-5 px-5 pb-10'>
        <Back />
        <section className='w-full rounded-3xl flex flex-col items-center py-2 px-5 space-y-5'>
          <Image
            src={workout.image.url}
            alt='workouts'
            width={500}
            height={500}
            className='h-64 w-64 rounded-3xl'
          />
          <h1 className='text-3xl text-center font-bold'>{workout.name}</h1>
          <p className='text-lg font-semibold'>{workout.description}</p>
        </section>
        <section className='w-full rounded-3xl py-2 px-5 space-y-5'>
          <h2 className='text-3xl font-medium'>Exercises</h2>
          {workout.exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
            />
          ))}
        </section>
      </main>
      <StartButton href={`/workout/${id}/start`} />
    </>
  )
}
