import { FC } from 'react'
import { Container } from 'components/Common/Grid'
import { Header } from 'components/Common'

import { Wrapper } from './style'

interface DashboardLayoutProps {}
const DashboardLayout: FC<DashboardLayoutProps> = ({ children }) => {
  // const { user } = useSelector(({ auth }) => auth)
  // const { authorizationType } = user

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
