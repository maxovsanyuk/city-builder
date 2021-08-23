import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { Typography } from '@material-ui/core'
import { $advertisement } from 'features/Common/model/Advertisement/model'
import { AdvertisementPhotosSlider } from 'features/Common/ui/molecules/AdvertisementPhotosSlider'

const B = () => {
  return <div style={{ background: '#ccc' }}>User info</div>
}

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

const Advertisement = () => {
  const advertisement = useStore($advertisement)

  if (!advertisement) return null

  return (
    <>
      <Typography variant="h4" className="title">
        {advertisement?.title}
      </Typography>
      <Wrapper>
        <AdvertisementPhotosSlider />
        <B />
        <D />
        <E />
        <C />
      </Wrapper>
    </>
  )
}

export default Advertisement
