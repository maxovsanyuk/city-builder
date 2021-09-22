import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { Typography, Box } from '@material-ui/core'
import { $advertisement } from 'entities/model/Advertisement/model'
import { UserInfo, PhotosSlider, LocationInfo } from 'features/ui/molecules'

const D = () => {
  return (
    <div className="post-info-box" style={{ background: '#ccc' }}>
      Post info
    </div>
  )
}

const C = () => {
  return (
    <div id="chat" className="contact-box" style={{ background: '#ccc' }}>
      Chat & Reviews
    </div>
  )
}

export const AdvertisementCard = () => {
  const advertisement = useStore($advertisement)
  if (!advertisement) return null

  return (
    <>
      <Typography variant="h4" className="title">
        {advertisement?.title}
      </Typography>
      <Wrapper>
        <PhotosSlider />
        <UserInfo />
        <Box className="location-info">
          <LocationInfo />
        </Box>
        <D />
        <C />
      </Wrapper>
    </>
  )
}
