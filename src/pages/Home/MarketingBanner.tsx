import React, { FC, ReactNode } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from 'procredit-bank-design-system/modules/card'
import Colors from 'procredit-bank-design-system/modules/colors'
import Typography from 'procredit-bank-design-system/modules/typography'

const { Title } = Typography
const { gray } = Colors

const StyledLink = styled(Link)`
  display: block;
  margin-top: auto;
`

interface StyledCardProps {
  bgImage: string
}
const StyledCard = styled(Card)<StyledCardProps>`
  background: url('${({ bgImage }) => bgImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${gray[1]};
  text-align: center;
  & .ant-typography {
    color: inherit;
  }
`

interface MarketingCardProps {
  href: string
  bgImage: string
  title: ReactNode
  hoverable?: boolean
}
const MarketingCard: FC<MarketingCardProps> = ({ href, bgImage, title, hoverable = true }) => (
  <StyledLink to={href}>
    <StyledCard hoverable={hoverable} bgImage={bgImage}>
      <Title level={4}>{title}</Title>
    </StyledCard>
  </StyledLink>
)

export default MarketingCard
