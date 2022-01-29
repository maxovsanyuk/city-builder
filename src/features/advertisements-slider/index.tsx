import Slider from 'react-slick'
import { AdvertisementSmallCard } from '../advertisement-small-card'

const settings = {
  infinite: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  style: { margin: '100px 0 0 0' },
}

export const AdvertisementsSlider = ({ config }: Record<string, any>) => {
  return (
    <Slider {...settings}>
      {config.map((advertisement: Record<string, any>) => (
        <AdvertisementSmallCard key={advertisement.id} advertisement={advertisement} />
      ))}
    </Slider>
  )
}
