'use client'
import { BookCard } from '@/components/feature/book/BookCard'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Book } from '@/types/book'
import Autoplay from 'embla-carousel-autoplay'

type Props = Readonly<{
  books: Book[]
}>
export default function BookCarousel(props: Props) {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[
        // Autoplayで自動的にスライドを切り替えることができる。
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="w-full max-w-5xl"
    >
      <CarouselContent>
        {props.books.map((book, index) => {
          const { content, ...rest } = book
          return (
            <CarouselItem key={index} className="basis-1/4">
              <div>
                <BookCard {...rest} />
              </div>
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
