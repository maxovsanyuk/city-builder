import { nanoid } from 'nanoid'

// !TODO: swap with actual fields from the API
export type IAuthorization = 'A' | 'B' | 'C'
export type IStatus = 'new' | 'eba' | 'no-eba' | 'dismissed'

export interface IData {
  id: string
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
    id: nanoid(),
    name: 'Esther Howard',
    authorization: [],
    status: 'new',
  },
  { id: nanoid(), name: 'Jenny Wilson', authorization: ['A', 'B', 'C'], status: 'eba' },
  { id: nanoid(), name: 'Jacob Jones', authorization: ['C'], status: 'eba' },
  { id: nanoid(), name: 'Annette Black', authorization: ['A', 'C'], status: 'eba' },
  { id: nanoid(), name: 'Brooklyn Simmons', authorization: ['A'], status: 'eba' },
  { id: nanoid(), name: 'Savannah Nguyen', authorization: ['A'], status: 'no-eba' },
  { id: nanoid(), name: 'Albert Flores', authorization: ['A'], status: 'no-eba' },
  { id: nanoid(), name: 'Marvin McKinney', authorization: ['A', 'B'], status: 'eba' },
  { id: nanoid(), name: 'Leslie Alexander', authorization: ['A'], status: 'eba' },
  { id: nanoid(), name: 'Marvin McKinney', authorization: ['A', 'B'], status: 'dismissed' },
  { id: nanoid(), name: 'Leslie Alexander', authorization: ['A'], status: 'dismissed' },
]

export default data
