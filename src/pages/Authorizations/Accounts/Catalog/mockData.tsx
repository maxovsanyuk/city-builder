import { customAlphabet } from 'nanoid'

const accountNumberNanoid = customAlphabet('1234567890', 17)
const getAccountNumber = () => `EUR${accountNumberNanoid()}`

export interface IAccount {
  accountNumber: string
  accountType: string
  currency: string
  limitAmount: number
  requiredAuthorizations: number
}

const mockData: IAccount[] = [
  {
    accountNumber: getAccountNumber(),
    accountType: 'Current account',
    currency: 'EUR',
    limitAmount: 100,
    requiredAuthorizations: 2,
  },
  {
    accountNumber: getAccountNumber(),
    accountType: 'Current account',
    currency: 'EUR',
    limitAmount: 380,
    requiredAuthorizations: 3,
  },
  {
    accountNumber: getAccountNumber(),
    accountType: 'Credit line',
    currency: 'USD',
    limitAmount: 100,
    requiredAuthorizations: 2,
  },
  {
    accountNumber: getAccountNumber(),
    accountType: 'Current account',
    currency: 'EUR',
    limitAmount: 100,
    requiredAuthorizations: 2,
  },
  {
    accountNumber: getAccountNumber(),
    accountType: 'FlexSave',
    currency: 'EUR',
    limitAmount: 100,
    requiredAuthorizations: 3,
  },
]

export const useAccounts = () => ({
  accounts: mockData,
  loading: false,
})
