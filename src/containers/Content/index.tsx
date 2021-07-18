import { Footer } from 'components/Common'

import { Wrapper } from './styles'

const Content = ({ children }: Record<any, any>) => {
  return (
    <Wrapper>
      <div className="content-wrapper">
        <div>{children}</div>
        <Footer />
      </div>
    </Wrapper>
  )
}

export default Content
