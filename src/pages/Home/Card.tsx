import { FC } from 'react'
import Card from 'procredit-bank-design-system/modules/card'
import { ICard } from './mockData'

const { Meta } = Card

interface CardProps {
  card: ICard
}
const CardComponent: FC<CardProps> = ({ card }) => {
  if (!card) return null
  const { cover, title, description } = card
  return (
    <Card hoverable cover={<img alt="" src={cover} />}>
      <Meta title={title} description={description} />
    </Card>
  )
}

export default CardComponent
