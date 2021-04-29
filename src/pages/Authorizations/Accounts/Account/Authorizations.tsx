import { FC } from 'react'
import styled from 'styled-components'
import { Card, Typography } from 'procredit-bank-design-system'
import AuthorizationsTable from './AuthorizationsTable'
import { useRelatedAuthorizations } from '../mockData'
const { Text } = Typography

const SubTitle = styled(Text)`
  font-size: 1rem;
  font-weight: 500;
  margin-left: 0.5em;
`

interface AuthorizationsProps {
  id: string
}
const Authorizations: FC<AuthorizationsProps> = ({ id }) => {
  const { data, loading } = useRelatedAuthorizations(id)

  return (
    <Card
      title={
        <>
          <span>{id}</span>
          <SubTitle type="secondary">Related authorization</SubTitle>
        </>
      }
    >
      <AuthorizationsTable data={data} loading={loading} />
    </Card>
  )
}

export default Authorizations
