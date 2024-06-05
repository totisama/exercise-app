import { Workouts } from '@/components/workouts'
import { sdk } from '@/lib/client'

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
    <main className='flex min-h-screen flex-col space-y-3 items-center pt-5 pb-10 px-5'>
      <article className='w-full bg-light-blue rounded-3xl p-5 space-y-5'>
        <h1 className='text-4xl font-medium'>{program.name}</h1>
        <p>{program.description}</p>
      </article>
      <Workouts />
    </main>
  )
}
