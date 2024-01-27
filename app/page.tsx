import Hero from '@/components/common/Hero'
import { TypographyLead } from '@/components/common/Typography'
import BookCarousel from '@/components/feature/book/BookCarousel'
import BookCarouselHeader from '@/components/feature/book/BookCarouselHeader'
import { Book } from '@/types/book'
const BOOKS: Book[] = [
  {
    id: '1',
    thumbnail: 'https://unsplash.it/480?image=1',
    title: 'ダミーブック1',
    content: 'これはダミーブック1の内容です。',
    rate: 3.5,
    retailPrice: 1499,
    author: {
      id: '1',
      name: '著者1',
      description: 'これは著者1の説明です。',
      iconImagePath: 'https://unsplash.it/480?image=1',
    },
  },
  {
    id: '2',
    thumbnail: 'https://unsplash.it/480?image=2',
    title: 'ダミーブック2',
    content: 'これはダミーブック2の内容です。',
    rate: 4.5,
    retailPrice: 1500,
    specialRetailPrice: 783,
    author: {
      id: '2',
      name: '著者22',
      description: 'これは著者2の説明です。',
      iconImagePath: 'https://unsplash.it/480?image=2',
    },
  },
  {
    id: '3',
    thumbnail: 'https://unsplash.it/480?image=3',
    title: 'ダミーブック3',
    content: 'これはダミーブック3の内容です。',
    rate: 4.5,
    retailPrice: 1500,
    specialRetailPrice: 893,
    author: {
      id: '3',
      name: '著者3',
      description: 'これは著者3の説明です。',
      iconImagePath: 'https://unsplash.it/480?image=3',
    },
  },
  {
    id: '4',
    thumbnail: 'https://unsplash.it/480?image=4',
    title: 'ダミーブック4',
    content: 'これはダミーブック4の内容です。',
    rate: 4.5,
    retailPrice: 1500,
    specialRetailPrice: 437,
    author: {
      id: '4',
      name: '著者4',
      description: 'これは著者4の説明です。',
      iconImagePath: 'https://unsplash.it/480?image=4',
    },
  },
  {
    id: '5',
    thumbnail: 'https://unsplash.it/480?image=5',
    title: 'ダミーブック5',
    content: 'これはダミーブック5の内容です。',
    rate: 4.5,
    retailPrice: 1500,
    specialRetailPrice: 891,
    author: {
      id: '5',
      name: '著者5',
      description: 'これは著者5の説明です。',
      iconImagePath: 'https://unsplash.it/480?image=5',
    },
  },
  {
    id: '6',
    thumbnail: 'https://unsplash.it/480?image=6',
    title: 'ダミーブック6',
    content: 'これはダミーブック6の内容です。',
    rate: 4.5,
    retailPrice: 1500,
    specialRetailPrice: 799,
    author: {
      id: '6',
      name: '著者6',
      description: 'これは著者6の説明です。',
      iconImagePath: 'https://unsplash.it/480?image=6',
    },
  },
]
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
            <BookCarouselHeader title="管理者のおすすめ" />
            <BookCarousel books={BOOKS} />
          </li>
          <li className="flex flex-col space-y-10">
            <BookCarouselHeader title="管理者のおすすめ" />
            <BookCarousel books={BOOKS} />
          </li>
          <li className="flex flex-col space-y-10">
            <BookCarouselHeader title="管理者のおすすめ" />
            <BookCarousel books={BOOKS} />
          </li>
        </ol>
      </section>
    </main>
  )
}
