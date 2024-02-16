'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'
import { IoCart } from 'react-icons/io5'

import { Combobox } from '@/components/common/Combobox'
import { TypographyH3 } from '@/components/common/Typography'
import { AsideCartForm } from '@/components/feature/cart/AsideCartForm'
import { Button } from '@/components/ui/button'
import { GENRE } from '@/seeds'

export function Header() {
  return (
    <header className="fixed z-50 flex w-full items-center justify-between bg-white px-6 py-4 shadow">
      <TypographyH3>BOOK COMMERCE</TypographyH3>
      <div className="flex items-center space-x-4">
        <Combobox genres={GENRE} />
        <nav>
          <Button variant="link">
            <Link href="/">HOME</Link>
          </Button>
          <Button variant="link">
            <Link href="/login">LOGIN</Link>
          </Button>
        </nav>
        <AsideCartForm>
          <IoCart size={28} className="hover:opacity-70" />
        </AsideCartForm>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@avatar" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  )
}
