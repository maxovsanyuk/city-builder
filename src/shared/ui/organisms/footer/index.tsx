import { Wrapper } from './styles'
import { Link } from '@material-ui/core'
import { Container } from '../../molecules/grid'

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <div className="wrapper">
          <div className="social-cont">
            <Link href="#twitter">Twitter</Link>
            <Link href="#telegram">Telegram</Link>
            <Link href="#instagram">Instagram</Link>
          </div>
          <Link to="/city-builder/contact">Contact us</Link>
        </div>
      </Container>
    </Wrapper>
  )
}
