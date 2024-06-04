import { sdk } from '@/lib/client'

export default async function Home() {
  const { data } = await sdk.GetPrograms()
  console.log(data)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      Home
    </main>
  )
}
