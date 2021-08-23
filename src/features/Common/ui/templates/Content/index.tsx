import Footer from '../../organisms/Footer'
import { Wrapper } from './styles'

const Content = ({ children }: Record<any, any>) => {
  return (
    <Wrapper id="content">
      <div className="content-wrapper">
        <div>{children}</div>
        <Footer />
      </div>
    </Wrapper>
  )
}

export default Content
