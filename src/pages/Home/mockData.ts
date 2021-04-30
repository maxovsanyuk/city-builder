import { nanoid } from 'nanoid'
import MockedCardCover1 from 'assets/mocks/mockCardCover1.jpg'
import MockedCardCover2 from 'assets/mocks/mockCardCover2.jpg'
import MockedCardCover3 from 'assets/mocks/mockCardCover3.jpg'
import MockedCardCover4 from 'assets/mocks/mockCardCover4.jpg'
import MockedCardCover5 from 'assets/mocks/mockCardCover5.jpg'
import MockedCardCover6 from 'assets/mocks/mockCardCover6.jpg'

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
    cover: MockedCardCover1,
    title: 'Financial transaction',
    description: 'Description Financial transaction',
    href: '/transactions',
  },
  {
    id: nanoid(),
    cover: MockedCardCover2,
    title: 'Managing authorizations',
    description: 'Description Managing users',
    href: '/manage-authorizations',
  },
  {
    id: nanoid(),
    cover: MockedCardCover3,
    title: 'Managing documents',
    description: 'Description managing documents',
    href: '/documents',
  },
  {
    id: nanoid(),
    cover: MockedCardCover4,
    title: 'Managing POS terminals',
    description: 'Description Managing POS terminals',
    href: '/post-terminals',
  },
  {
    id: nanoid(),
    cover: MockedCardCover5,
    title: 'Documents signing',
    description: 'Short description Documents signing',
    href: '/document-signing',
  },
  {
    id: nanoid(),
    cover: MockedCardCover6,
    title: 'Managing Business Cards',
    description: 'Description Managing Business Cards',
    href: '/business-cards',
  },
]

export default mockCards
