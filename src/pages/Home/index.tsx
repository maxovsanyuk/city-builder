import React, { FC } from 'react'
import MarketingBanner from './MarketingBanner'
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

const useMarketingBanner = () => ({
  banner: {
    href: '/marketing',
    bgImage: '/mocks/mockCardProCreditPlaceholder.jpg',
    title: 'ProCredit Marketing placeholder',
  },
  loading: false,
})

interface HomePageProps {}
const HomePage: FC<HomePageProps> = () => {
  const { cards, loading } = useCards()
  const { banner } = useMarketingBanner()

  return (
    <>
      <Cards cards={cards} loading={loading} />
      {banner && <MarketingBanner href={banner.href} bgImage={banner.bgImage} title={banner.title} />}
    </>
  )
}

export default HomePage
