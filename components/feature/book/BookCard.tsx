import {
  TypographyH3,
  TypographyH4,
  TypographyLarge,
  TypographyMuted,
} from '@/components/common/Typography'
import BookPrice from '@/components/feature/book/BookPrice'
import { AddToCartButton } from '@/components/feature/cart/AddToCartButton'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Book } from '@/types/book'
import Image from 'next/image'
import { Fragment } from 'react'
import { GoStarFill } from 'react-icons/go'

type Props = Omit<Book, 'content'>

export function BookCard(props: Props) {
  return (
    <Card className="w-fit shadow">
      <CardHeader className="relative">
        <Image
          src={props.thumbnail}
          alt={props.title}
          width={180}
          height={180}
        />
        <Badge className="absolute ml-2" variant="secondary">
          00% OFF
        </Badge>
      </CardHeader>
      <CardContent>
        <TypographyLarge className="flex items-end">
          {props.title}
          <TypographyMuted className="ml-2">
            {props.author.name}
          </TypographyMuted>
        </TypographyLarge>
        <div className="mt-2 flex items-end">
          {props.specialRetailPrice ? (
            <Fragment>
              <TypographyH3>
                <BookPrice price={props.specialRetailPrice} />
              </TypographyH3>
              <TypographyMuted className="ml-2 line-through">
                <BookPrice price={props.retailPrice} />
              </TypographyMuted>
              <GoStarFill className="ml-4 mr-1" size={24} />
              <TypographyH4>{props.rate}</TypographyH4>
            </Fragment>
          ) : (
            <Fragment>
              <TypographyH3>
                <BookPrice price={props.retailPrice} />
              </TypographyH3>
              <GoStarFill className="ml-4 mr-1" size={24} />
              <TypographyH4>{props.rate}</TypographyH4>
            </Fragment>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <AddToCartButton id="xxxxxx" quantity={3} />
      </CardFooter>
    </Card>
  )
}
