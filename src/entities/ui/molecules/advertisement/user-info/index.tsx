import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import { Typography, Button, Box } from '@material-ui/core'

const scrollToChat = () => {
  const content = document.getElementById('chat')
  content && content.scrollIntoView({ behavior: 'smooth' })
}

export const UserInfo = () => {
  return (
    <Wrapper>
      <Box>
        <div className="user-info">
          <img
            className="user-avatar"
            alt="user-avatar"
            src="https://www.kindpng.com/picc/m/78-786207_user-avatar-png-user-avatar-icon-png-transparent.png"
          />
          <div className="details-info">
            <Typography className="user-name" variant="h6">
              User Name
            </Typography>
            <Typography variant="body2">on CB since July 2015</Typography>
            <Typography variant="body2">Online today at 08:00</Typography>
          </div>
        </div>

        <Link to="/city-builder/ads/123">
          <Typography className="link" variant="body1">
            All ads by the author
          </Typography>
        </Link>
      </Box>

      <div className="btn-box">
        <Button className="phone-btn" variant="contained">
          Show phone
        </Button>
        <Button onClick={scrollToChat} variant="outlined">
          Message
        </Button>
      </div>
    </Wrapper>
  )
}
