import { nanoid } from 'nanoid'

// !TODO: swap with actual fields from the API
export type IAuthorization = 'A' | 'B' | 'C'
export type IStatus = 'new' | 'eba' | 'no-eba' | 'dismissed'
export interface IUser {
  id: string
  name: string
}

export interface IData {
  id: string
  userId: string
  name: string
  authorization?: IAuthorization[]
  status: IStatus
  relation: string

  // Currently unused
  type?: 'authorized' | 'contact' | 'empowered'
  startDate?: string
  endDate?: string
  comment?: string

  accountNumber?: string
  accountType?: string
  currency?: string
  relations?: string
}

const mockData: IData[] = [
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Esther Howard',
    authorization: [],
    status: 'new',
    accountNumber: 'EUR13499492584785387',
    accountType: 'current',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'authorized',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Jenny Wilson',
    authorization: ['A', 'B', 'C'],
    status: 'eba',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    accountType: 'current',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'contactPerson',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Jacob Jones',
    authorization: ['C'],
    status: 'eba',
    currency: 'EUR',
    accountNumber: 'EUR13499492584785387',
    accountType: 'creditLine',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'authorized',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Annette Black',
    authorization: ['A', 'C'],
    status: 'eba',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    accountType: 'current',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'authorized',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Brooklyn Simmons',
    authorization: ['A'],
    status: 'eba',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    accountType: 'flexSave',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'contactOwner',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Savannah Nguyen',
    authorization: ['A'],
    status: 'no-eba',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'contactCoowner',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Albert Flores',
    authorization: ['A'],
    status: 'no-eba',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'contactPerson',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Marvin McKinney',
    authorization: ['A', 'B'],
    status: 'eba',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'legalRepresentative',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Leslie Alexander',
    authorization: ['A'],
    status: 'eba',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'contactPerson',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Marvin McKinney',
    authorization: ['A', 'B'],
    status: 'dismissed',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'legalRepresentative',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Leslie Alexander',
    authorization: ['A'],
    status: 'dismissed',
    currency: 'EUR',
    relations: 'Authorized person',
    accountNumber: 'EUR13499492584785387',
    startDate: '23/01/2021',
    endDate: '23/01/2021',
    comment:
      'Wireframes can be pencil drawings or sketches on a whiteboard, or they can be produced by means of a broad array of free or commercial software applications.',
    relation: 'authorized',
  },
]

// TODO: Link to API
export const useAuthorizations = (): { data: IData[]; loading: boolean } => ({
  data: mockData,
  loading: false,
})
export const useRelatedAuthorizations = (id: string): { data: IData[]; loading: boolean } => ({
  data: mockData,
  loading: false,
})
export const useUser = (id: string): IUser => ({
  id,
  name: 'Jenny Wilson',
})

export default mockData
