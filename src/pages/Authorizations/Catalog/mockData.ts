// !TODO: swap with actual fields from the API
export type IAuthorization = 'A' | 'B' | 'C'
export type IStatus = 'new' | 'eba' | 'no-eba' | 'dismissed'
export interface IData {
  name: string
  authorization?: IAuthorization[]
  status: IStatus

  // Currently unused
  type?: 'authorized' | 'contact' | 'empowered'
  startDate?: string
  comment?: string
}

const data: IData[] = [
  {
    name: 'Esther Howard',
    authorization: [],
    status: 'new',
  },
  {
    name: 'Jenny Wilson',
    authorization: ['A', 'B', 'C'],
    status: 'eba',
  },
  {
    name: 'Jacob Jones',
    authorization: ['C'],
    status: 'eba',
  },
  {
    name: 'Annette Black',
    authorization: ['A', 'C'],
    status: 'eba',
  },
  {
    name: 'Brooklyn Simmons',
    authorization: ['A'],
    status: 'eba',
  },
  {
    name: 'Savannah Nguyen',
    authorization: ['A'],
    status: 'no-eba',
  },
  {
    name: 'Albert Flores',
    authorization: ['A'],
    status: 'no-eba',
  },
  {
    name: 'Marvin McKinney',
    authorization: ['A', 'B'],
    status: 'eba',
  },
  {
    name: 'Leslie Alexander',
    authorization: ['A'],
    status: 'eba',
  },
  {
    name: 'Marvin McKinney',
    authorization: ['A', 'B'],
    status: 'dismissed',
  },
  {
    name: 'Leslie Alexander',
    authorization: ['A'],
    status: 'dismissed',
  },
]

export default data
