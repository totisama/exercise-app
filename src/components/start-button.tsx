import Link from 'next/link'

export const StartButton = ({ href }: { href: string }) => {
  return (
    <Link
      className='fixed bottom-0 w-full bg-orange text-center font-semibold text-3xl rounded-3xl py-2 transition-transform duration-300 ease-in-out hover:scale-105'
      href={href}
    >
      Start workout!
    </Link>
  )
}
