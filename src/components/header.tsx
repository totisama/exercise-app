import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const Header = () => {
  return (
    <header className='flex justify-between border-b border-black py-2 px-3'>
      <h1 className='text-2xl font-bold'>Exercise App</h1>
      <Avatar className='h-8 w-8'>
        <AvatarImage src={'https://github.com/shadcn.png'} />
        {/* TODO: User intials */}
        <AvatarFallback>Toti</AvatarFallback>
      </Avatar>
    </header>
  )
}
