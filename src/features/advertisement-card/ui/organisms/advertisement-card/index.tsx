import { Empty } from 'antd'
import { Wrapper } from './styles'
import { PhotosSlider } from 'features'
import { useStore } from 'effector-react'
import { Typography, Box } from '@material-ui/core'
import { $advertisement } from '../../../model/advertisement'
import { UserInfo, ChatRewiew, LocationInfo, PostInfo } from '../../molecules'

export const AdvertisementCard = () => {
  const advertisement = useStore($advertisement)
  if (!advertisement) return <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />

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
