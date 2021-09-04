import { Wrapper } from './styles'
import { Footer } from 'shared/ui/organisms'

export const Content = ({ children }: Record<any, any>) => {
  return (
    <Wrapper id="content">
      <div className="content-wrapper">
        <div>{children}</div>
        <Footer />
      </div>
    </Wrapper>
  )
}
