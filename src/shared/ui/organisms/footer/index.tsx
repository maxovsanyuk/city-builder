import * as React from 'react'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { Container } from '../../molecules/grid'

export const Footer: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <div className="wrapper">
          <div className="social-cont">
            <Link to="/city-builder/twitter">
              <Typography>Twitter</Typography>
            </Link>
            <Link to="/city-builder/telegram">
              <Typography>Telegram</Typography>
            </Link>
            <Link to="/city-builder/instagram">
              <Typography>Instagram</Typography>
            </Link>
          </div>
          <Link to="/city-builder/contact">
            <Typography>Contact us</Typography>
          </Link>
        </div>
      </Container>
    </Wrapper>
  )
}
