import { nanoid } from 'nanoid'

// !TODO: swap with actual fields from the API
export type IType =
  | 'New authorization'
  | 'New relation'
  | 'Edit authorization'
  | 'Edit relation'
  | 'Edit required authorizations'
  | 'Disable EBA access'
  | 'Enable EBA access'
  | 'Dismissal'
export type IAuthorization = 'A' | 'B' | 'C'
export type IStatus = 'Pending' | 'Legal representative'

export interface IData {
  id: string
  type: IType
  userId: string | null
  name: string | null
  accountNumber: string | null
  accountType: string | null
  authorization: IAuthorization[]
  date: string
  status: IStatus[]
}

const mockData: IData[] = [
  {
    id: nanoid(),
    type: 'New authorization',
    userId: nanoid(),
    name: 'Esther Howard',
    accountNumber: null,
    accountType: null,
    authorization: [],
    date: '23/01/2021',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'Edit authorization',
    userId: nanoid(),
    name: 'Jenny Wilson',
    accountNumber: null,
    accountType: null,
    authorization: [],
    date: '15/01/2021',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'New relation',
    userId: nanoid(),
    name: 'Jacob Jones',
    accountNumber: 'EUR43434358238935493',
    accountType: 'Credit line',
    authorization: ['C'],
    date: '16/01/2021',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'Edit relation',
    userId: nanoid(),
    name: 'Annette Black',
    accountNumber: 'EUR43434358238935454',
    accountType: 'Current account',
    authorization: ['A'],
    date: '28/01/2020',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'Edit required authorizations',
    userId: null,
    name: null,
    accountNumber: 'EUR43434358238935454',
    accountType: 'FlexSave',
    authorization: ['A'],
    date: '07/02/2021',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'Disable EBA access',
    userId: nanoid(),
    name: 'Savannah Nguyen',
    accountNumber: null,
    accountType: null,
    authorization: [],
    date: '18/01/2021',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'Enable EBA access',
    userId: nanoid(),
    name: 'Albert Flores',
    accountNumber: null,
    accountType: null,
    authorization: [],
    date: '16/01/2021',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'Dismissal',
    userId: nanoid(),
    name: 'Marvin McKinney',
    accountNumber: null,
    accountType: null,
    authorization: [],
    date: '07/02/2021',
    status: ['Pending', 'Legal representative'],
  },
  {
    id: nanoid(),
    type: 'Dismissal',
    userId: nanoid(),
    name: 'Leslie Alexander',
    accountNumber: null,
    accountType: null,
    authorization: [],
    date: '12/06/2020',
    status: ['Pending', 'Legal representative'],
  },
]

// TODO: Link to API
export const useModifications = (): { data: IData[]; loading: boolean } => ({
  data: mockData,
  loading: false,
})

export default mockData
