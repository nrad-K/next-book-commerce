import { Header } from '@/components/common/Header'
import { Fragment } from 'react'

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <Fragment>
      <Header />
      {children}
    </Fragment>
  )
}
