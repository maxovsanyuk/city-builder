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
  comment?: string
}

const mockData: IData[] = [
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Esther Howard',
    authorization: [],
    status: 'new',
    relation: 'authorized',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Jenny Wilson',
    authorization: ['A', 'B', 'C'],
    status: 'eba',
    relation: 'contactPerson',
  },
  { id: nanoid(), userId: nanoid(), name: 'Jacob Jones', authorization: ['C'], status: 'eba', relation: 'authorized' },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Annette Black',
    authorization: ['A', 'C'],
    status: 'eba',
    relation: 'authorized',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Brooklyn Simmons',
    authorization: ['A'],
    status: 'eba',
    relation: 'contactOwner',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Savannah Nguyen',
    authorization: ['A'],
    status: 'no-eba',
    relation: 'contactCoowner',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Albert Flores',
    authorization: ['A'],
    status: 'no-eba',
    relation: 'contactPerson',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Marvin McKinney',
    authorization: ['A', 'B'],
    status: 'eba',
    relation: 'legalRepresentative',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Leslie Alexander',
    authorization: ['A'],
    status: 'eba',
    relation: 'contactPerson',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Marvin McKinney',
    authorization: ['A', 'B'],
    status: 'dismissed',
    relation: 'legalRepresentative',
  },
  {
    id: nanoid(),
    userId: nanoid(),
    name: 'Leslie Alexander',
    authorization: ['A'],
    status: 'dismissed',
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
