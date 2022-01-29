import { FC } from 'react'
import { Wrapper } from './style'
import { Header } from 'shared/ui/organisms'
import { Container } from 'shared/ui/molecules/grid'

export const DashboardLayout: FC = ({ children }) => {
  return (
    <>
      <Header />
      <Wrapper>
        <Container style={{ display: 'flex', height: '100%' }}>
          <div className="children">{children}</div>
        </Container>
      </Wrapper>
    </>
  )
}
