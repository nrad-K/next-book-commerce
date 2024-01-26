type Author = Readonly<{
  id: string
  name: string
  description: string
  iconImagePath: string
}>

export type Book = Readonly<{
  id: string
  thumbnail: string
  title: string
  content: string
  rate: number
  retailPrice: number
  specialRetailPrice?: number
  author: Author
}>
