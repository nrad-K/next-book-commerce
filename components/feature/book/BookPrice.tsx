type Props = Readonly<{
  price: number
}>
export default function BookPrice(props: Props) {
  return (
    <span>
      {props.price.toLocaleString('ja-JP', {
        style: 'currency',
        currency: 'JPY',
      })}
    </span>
  )
}
