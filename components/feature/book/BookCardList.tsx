import { BookCard } from '@/components/feature/book/BookCard'
import { BOOKS } from '@/seeds'

export default function BookCardList() {
  return (
    <section className="mt-10 grid grid-cols-4 grid-rows-4 gap-6">
      {BOOKS.map((book) => {
        const { content, ...rest } = book
        return <BookCard key={rest.id} {...rest} />
      })}
    </section>
  )
}
