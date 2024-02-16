import Hero from '@/components/common/Hero'
import { TypographyLead } from '@/components/common/Typography'
import BookCarousel from '@/components/feature/book/BookCarousel'
import BookCarouselHeader from '@/components/feature/book/BookCarouselHeader'
import { BOOKS } from '@/seeds'

export default function Home() {
  return (
    <main className="px-20 py-[72px]">
      <section className="mt-3 flex flex-col justify-center">
        <Hero imagePath="https://unsplash.it/1000/240?image=6" />
      </section>
      <section>
        <TypographyLead className="mt-4 px-20 text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
          officia laudantium doloremque autem labore repudiandae nam, quibusdam
          deserunt ab obcaecati consequatur molestias dolor ea modi deleniti
          explicabo, pariatur nihil cumque! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Libero vero temporibus adipisci, atque
          dolore culpa. Repellat, consequuntur nulla maiores voluptatum aperiam
          nobis ab facere accusamus sint qui veniam, tenetur culpa?
        </TypographyLead>
      </section>
      <section className="mt-12">
        <ol className="flex flex-col items-center space-y-12">
          <li className="flex flex-col space-y-10">
            <BookCarouselHeader title="あなたへのおすすめ" />
            <BookCarousel books={BOOKS} />
          </li>
          <li className="flex flex-col space-y-10">
            <BookCarouselHeader title="今月売れた商品" />
            <BookCarousel books={BOOKS} />
          </li>
          <li className="flex flex-col space-y-10">
            <BookCarouselHeader title="トレンド" />
            <BookCarousel books={BOOKS} />
          </li>
        </ol>
      </section>
    </main>
  )
}
