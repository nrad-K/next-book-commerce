import Image from 'next/image'

type Props = Readonly<{
  imagePath: string
}>
export default function Hero(props: Props) {
  return (
    <section className="relative h-60 w-full">
      <Image
        src={props.imagePath}
        alt="hero"
        fill
        style={{ objectFit: 'contain' }}
      />
    </section>
  )
}
