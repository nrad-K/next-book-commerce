import { TypographyH3 } from '@/components/common/Typography'
import { IoIosMenu } from 'react-icons/io'

type Props = Readonly<{
  title: string
}>
export default function BookCarouselHeader(props: Props) {
  return (
    <section className="flex w-full items-center border-b-2">
      <IoIosMenu size={48} />
      <TypographyH3 className="ml-1">{props.title}</TypographyH3>
    </section>
  )
}
