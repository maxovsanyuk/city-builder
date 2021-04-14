import * as React from 'react'
import ProCard from 'procredit-bank-design-system/modules/card'
import { ICard } from './mockData'

const { Meta } = ProCard

interface CardProps {
  card: ICard
}
const Card: React.FC<CardProps> = ({ card }) => {
  if (!card) return null
  const { cover, title, description } = card
  return (
    <ProCard hoverable cover={<img alt="" src={cover} />}>
      <Meta title={title} description={description} />
    </ProCard>
  )
}

export default Card
