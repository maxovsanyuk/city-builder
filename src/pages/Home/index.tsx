import React, { FC } from 'react'
import MarketingPlaceholder from './MarketingPlaceholder'
import mockCards, { ICard } from './mockData'
import Cards from './Cards'

// !TODO
const useCards = (): {
  cards: ICard[]
  loading: boolean
} => ({
  cards: mockCards,
  loading: false,
})

interface HomePageProps {}
const HomePage: FC<HomePageProps> = () => {
  const { cards, loading } = useCards()

  return (
    <>
      <Cards cards={cards} loading={loading} />
      <MarketingPlaceholder />
    </>
  )
}

export default HomePage
