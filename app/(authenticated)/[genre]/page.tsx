import BookCardList from '@/components/feature/book/BookCardList'
import GenreHeader from '@/components/feature/genre/GenreHeader'
import { GenrePagination } from '@/components/feature/genre/GenrePagination'

export default function Genre({ params }: { params: { genre: string } }) {
  return (
    <main className="px-20 py-[72px]">
      <section className="mt-12">
        <GenreHeader title={params.genre} />
      </section>
      <section>
        <BookCardList />
      </section>
      <section className="mt-12">
        <GenrePagination page={1} />
      </section>
    </main>
  )
}
