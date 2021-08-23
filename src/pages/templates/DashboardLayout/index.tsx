import Header from '../../../features/Common/ui/organisms/Header'
import { FC } from 'react'
import { Wrapper } from './style'
import { Container } from 'features/Common/ui/molecules/Grid'

interface DashboardLayoutProps {}
const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <>
      <Header withLogOutBtn />
      <Wrapper>
        <Container style={{ display: 'flex', height: '100%' }}>
          <div className="children">{children}</div>
        </Container>
      </Wrapper>
    </>
  )
}

export default DashboardLayout
