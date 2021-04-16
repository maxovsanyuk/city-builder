import React, { FC } from 'react'
import { useIntl } from 'react-intl'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Typography from 'procredit-bank-design-system/modules/typography'

const { Title } = Typography

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 95%;
  width: 100%;
`

interface NotFoundProps {}
const NotFound: FC<NotFoundProps> = () => {
  const { formatMessage } = useIntl()
  return (
    <Wrapper>
      <Title level={2}>{formatMessage({ id: '404-not-found', defaultMessage: '404 | Not found' })}</Title>
      <Link to="/">{formatMessage({ id: 'back-to-main-page', defaultMessage: 'Back to main page' })}</Link>
    </Wrapper>
  )
}

export default NotFound
