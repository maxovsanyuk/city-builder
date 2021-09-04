import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { Typography } from '@material-ui/core'
import { UserInfo, PhotosSlider } from 'features/ui/molecules'
import { $advertisement } from 'entities/model/Advertisement/model'

const D = () => {
  return <div style={{ background: '#ccc' }}>Post info</div>
}

const E = () => {
  return <div style={{ background: '#ccc' }}>Location info</div>
}

const C = () => {
  return (
    <div className="contact-box" style={{ background: '#ccc' }}>
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
        <D />
        <E />
        <C />
      </Wrapper>
    </>
  )
}
