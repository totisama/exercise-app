import { Back } from '@/components/back'
import { sdk } from '@/lib/client'
import Image from 'next/image'

export default async function ExercisePage({
  params: { id },
}: {
  params: { id: string }
}) {
  const { data } = await sdk.GetExercise({ id })
  const { exercise } = data

  if (exercise === null || exercise === undefined) {
    return <h1>Exercise not found</h1>
  }

  return (
    <main className='w-full space-y-3 mt-5 px-5 pb-10'>
      <Back />
      <section className='space-y-3'>
        <div className='w-full flex flex-col items-center'>
          <Image
            src={exercise.image.url}
            alt='exercise'
            width={500}
            height={500}
            className='rounded-3xl'
          />
        </div>
        <div className='space-y-2'>
          <h1 className='text-4xl font-bold text-center'>{exercise.name}</h1>
          <p>{exercise.description}</p>
        </div>
        <div>
          <h2 className='text-3xl font-semibold'>Instructions</h2>
          <p>{exercise.instructions}</p>
        </div>
      </section>
    </main>
  )
}
