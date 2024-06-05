import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { WeightIcon } from '@/icons'
import Link from 'next/link'

export const Header = () => {
  return (
    <header className='flex justify-between items-center border-b border-black py-2 px-3'>
      <Link href='/'>
        <h2 className='flex items-center text-3xl font-bold'>
          Exercise <WeightIcon /> App
        </h2>
      </Link>
      <Avatar className='h-10 w-10'>
        <AvatarImage src={'https://github.com/shadcn.png'} />
        <AvatarFallback>Toti</AvatarFallback>
      </Avatar>
    </header>
  )
}
