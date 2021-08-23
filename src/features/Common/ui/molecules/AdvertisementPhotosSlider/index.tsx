import AwesomeSlider from 'react-awesome-slider'
import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { $advertisement } from '../../../model/Advertisement/model'

export const AdvertisementPhotosSlider: React.FC = () => {
  const advertisement = useStore($advertisement)

  return (
    <Wrapper>
      <AwesomeSlider animation="foldOutAnimation" style={{ marginBottom: '40px' }}>
        {[1, 2].map(i => (
          <div key={i}>
            <img src={advertisement?.imgLink} alt="img" />
          </div>
        ))}
      </AwesomeSlider>
    </Wrapper>
  )
}
