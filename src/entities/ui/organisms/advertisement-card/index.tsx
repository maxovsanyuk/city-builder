import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { Typography, Box } from '@material-ui/core'
import { PhotosSlider } from 'features/ui/molecules'
import { $advertisement } from 'entities/model/advertisement/model'
import { UserInfo, ChatRewiew, LocationInfo, PostInfo } from 'entities/ui/molecules'

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
        <PostInfo />
        <ChatRewiew />
      </Wrapper>
    </>
  )
}
