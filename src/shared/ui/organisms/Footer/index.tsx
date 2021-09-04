import { Wrapper } from './styles'
import { Link } from '@material-ui/core'
import { Container } from '../../molecules/Grid'

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
          <Link href="/contact">Contact us</Link>
        </div>
      </Container>
    </Wrapper>
  )
}
