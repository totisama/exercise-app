import { ClockIcon } from '@/icons'
import { sdk } from '@/lib/client'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {
  const { data } = await sdk.GetPrograms()

  return (
    <main className='flex min-h-screen flex-col items-center pt-5 pb-10 px-5'>
      <h1 className='text-4xl font-medium'>Programs</h1>
      <section className='mt-5 space-y-5'>
        {data.programs.map((program, index) => (
          <Link
            href={`/program/${program.id}`}
            key={program.id}
            className={`flex items-center h-[150px] gap-3 px-3 py-2 ${(index + 1) % 2 === 0 ? 'bg-light-blue' : 'bg-light-green'} rounded-3xl shadow-md transition-transform duration-300 ease-in-out hover:shadow-lg hover:scale-105`}
          >
            <div className='w-2/3 h-full justify-between py-1 flex flex-col'>
              <h2 className='text-2xl font-bold'>{program.name}</h2>
              <span className='flex items-center gap-2 bg-white rounded-3xl w-max pl-2 pr-4 py-1'>
                <ClockIcon className='w-5 h-5' />7 Days Routine
              </span>
            </div>
            <div className='1/3'>
              <Image
                width={300}
                height={300}
                src={program.image.url}
                alt={`${program.name} image`}
                className='w-32 h-32 object-cover rounded-full'
              />
            </div>
          </Link>
        ))}
      </section>
    </main>
  )
}
