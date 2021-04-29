import { FC } from 'react'
import styled from 'styled-components'
import { Card, Colors, Skeleton } from 'procredit-bank-design-system'
const { Meta } = Card
const { gray } = Colors

const StyledCardPlaceholder = styled(Card)`
  & .ant-card-cover {
    background-color: ${gray[3]};
  }
`
const CardPlaceholder: FC = () => (
  <StyledCardPlaceholder hoverable={false} cover={<div />}>
    <Meta title={<Skeleton loading active title paragraph={{ width: '100%', rows: 1 }} />} />
  </StyledCardPlaceholder>
)

export default CardPlaceholder
