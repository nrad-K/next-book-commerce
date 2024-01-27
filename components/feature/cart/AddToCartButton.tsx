'use client'
import { Button } from '@/components/ui/button'
import { IoCartOutline } from 'react-icons/io5'

type Props = Readonly<{
  id: string
  quantity: number
}>
export function AddToCartButton(props: Props) {
  return (
    <Button
      onClick={() =>
        console.log(
          `id: ${props.id}, quantity: ${props.quantity} add to cart!!`,
        )
      }
      className="w-full"
    >
      <IoCartOutline className="mr-2" />
      Add to Cart
    </Button>
  )
}
