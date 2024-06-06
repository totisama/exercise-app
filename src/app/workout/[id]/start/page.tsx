import { Exercise } from '@/components/exercise'
import { sdk } from '@/lib/client'
import { type Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const id = params.id

  const { data } = await sdk.GetWorkoutExercises({ id })
  const { workout } = data

  return {
    title: `Exercise App | Start ${workout.name} workout`,
  }
}

export default async function StartPage({
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
    <main className='w-full min-h-[calc(100dvh-160px)] flex flex-col items-center justify-between space-y-1 my-5 px-5 pb-10'>
      <Exercise exercises={workout.exercises} />
    </main>
  )
}
