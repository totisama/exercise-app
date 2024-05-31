import { sdk } from '@/lib/client'

export default async function Home() {
  const { data } = await sdk.Programs()
  console.log(data.programs)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Home
    </main>
  )
}
