import { TypographyH3 } from '@/components/common/Typography'
import { TbCategory } from 'react-icons/tb'

type Props = Readonly<{
  title: string
}>
export default function GenreHeader(props: Props) {
  return (
    <section className="flex w-min items-center justify-center border-b-2 py-2 pr-6">
      <TbCategory size={36} />
      <TypographyH3 className="ml-1">{props.title}</TypographyH3>
    </section>
  )
}
