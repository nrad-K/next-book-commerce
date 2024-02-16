'use client'
import { Button } from '@/components/ui/button'
import { Fragment, useState } from 'react'
import { IoIosCheckmarkCircleOutline } from 'react-icons/io'
import { IoCartOutline } from 'react-icons/io5'

type Props = Readonly<{
  id: string
  quantity: number
}>
export function AddToCartButton(props: Props) {
  const [isAdded, setAdded] = useState(false)
  return (
    <Fragment>
      {isAdded ? (
        <Button className="w-full" disabled>
          <IoIosCheckmarkCircleOutline size={24} className="mr-2" />
          Added !
        </Button>
      ) : (
        <Button onClick={() => setAdded(true)} className="w-full">
          <IoCartOutline size={24} className="mr-2" />
          Add to Cart
        </Button>
      )}
    </Fragment>
  )
}
