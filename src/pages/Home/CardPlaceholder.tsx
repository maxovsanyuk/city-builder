import * as React from 'react'
import styled from 'styled-components'
import Card from 'procredit-bank-design-system/modules/card'
import Skeleton from 'procredit-bank-design-system/modules/skeleton'

const { Meta } = Card

const StyledCardPlaceholder = styled(Card)`
  & .ant-card-cover {
    background-color: var(--color-gray-3);
  }
`
const CardPlaceholder = () => (
  <StyledCardPlaceholder hoverable={false} cover={<div />}>
    <Meta title={<Skeleton loading active title paragraph={{ width: '100%', rows: 1 }} />} />
  </StyledCardPlaceholder>
)

export default CardPlaceholder
