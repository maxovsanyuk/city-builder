import { nanoid } from 'nanoid'

export interface ICard {
  id: string
  cover: string
  title: string
  description: string
  href: string
}

const mockCards: ICard[] = [
  {
    id: nanoid(),
    cover: '/mocks/mockCardCover1.jpg',
    title: 'Financial transaction',
    description: 'Description Financial transaction',
    href: '/transactions',
  },
  {
    id: nanoid(),
    cover: '/mocks/mockCardCover2.jpg',
    title: 'Managing authorizations',
    description: 'Description Managing users',
    href: '/manage-authorizations',
  },
  {
    id: nanoid(),
    cover: '/mocks/mockCardCover3.jpg',
    title: 'Managing documents',
    description: 'Description managing documents',
    href: '/documents',
  },
  {
    id: nanoid(),
    cover: '/mocks/mockCardCover4.jpg',
    title: 'Managing POS terminals',
    description: 'Description Managing POS terminals',
    href: '/post-terminals',
  },
  {
    id: nanoid(),
    cover: '/mocks/mockCardCover5.jpg',
    title: 'Documents signing',
    description: 'Short description Documents signing',
    href: '/document-signing',
  },
  {
    id: nanoid(),
    cover: '/mocks/mockCardCover6.jpg',
    title: 'Managing Business Cards',
    description: 'Description Managing Business Cards',
    href: '/business-cards',
  },
]

export default mockCards
