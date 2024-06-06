import { Back } from '@/components/back'
import { Workouts } from '@/components/workouts'
import { sdk } from '@/lib/client'
import { type Metadata } from 'next'
import Image from 'next/image'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const id = params.id

  const { data } = await sdk.GetProgramWorkouts({ id })
  const { program } = data

  return {
    title: `Exercise App | ${program.name} workout`,
  }
}

export default async function ProgramPage({
  params: { id },
}: {
  params: { id: string }
}) {
  const { data } = await sdk.GetProgramWorkouts({ id })
  const { program } = data

  if (program === null || program === undefined) {
    return <h1>Program not found</h1>
  }

  return (
    <main className='space-y-3 my-5 px-5'>
      <Back />
      <article className='flex flex-col items-center w-full bg-light-blue rounded-3xl p-5 space-y-5'>
        <Image
          src={program.image.url}
          alt='workouts'
          width={500}
          height={300}
          className='rounded-3xl'
        />
        <h1 className='text-3xl text-center font-medium'>{program.name}</h1>
        <p className=''>{program.description}</p>
      </article>
      <Workouts workouts={program.workouts} />
    </main>
  )
}
