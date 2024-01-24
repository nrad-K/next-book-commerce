import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export function Header() {
  return (
    <header className="flex items-center justify-between p-4 shadow">
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        BOOK COMMERCE
      </h3>
      <ol className="flex items-center space-x-4 text-lg font-semibold">
        <li className="opacity-70 hover:opacity-100">
          <Link href="#">HOME</Link>
        </li>
        <li className="opacity-70 hover:opacity-100">
          <Link href="#">LOGIN</Link>
        </li>
        <li>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </li>
      </ol>
    </header>
  )
}
