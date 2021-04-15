import React, { FC } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import CardPlaceholder from './CardPlaceholder'
import { ICard } from './mockData'
import Card from './Card'

const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(325px, 1fr));
  gap: 16px;
  & .ant-card {
    height: 100%;
    width: 100%;
    & .ant-card-cover {
      height: 0;
      padding-top: 51.69%;
      position: relative;
      & img {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
`

interface CardsProps {
  cards: ICard[]
  loading?: boolean
}
const Cards: FC<CardsProps> = ({ cards, loading = false }) => {
  if (loading) {
    return (
      <Grid>
        {Array.from(Array(6).keys()).map(i => (
          <li key={i}>
            <CardPlaceholder />
          </li>
        ))}
      </Grid>
    )
  }
  if (!cards || !cards.length) return null
  return (
    <Grid>
      {cards.map(card => (
        <li key={card.id}>
          <Link to={card.href}>
            <Card card={card} />
          </Link>
        </li>
      ))}
    </Grid>
  )
}

export default Cards
