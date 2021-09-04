import AwesomeSlider from 'react-awesome-slider'
import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { $advertisement } from 'entities/model/Advertisement/model'

export const PhotosSlider: React.FC = () => {
  const advertisement = useStore($advertisement)

  return (
    <Wrapper>
      <AwesomeSlider animation="foldOutAnimation" style={{ marginBottom: '40px' }}>
        {[1, 2].map(i => (
          <div key={i}>
            <LazyLoadImage alt="" src={advertisement?.imgLink} />
          </div>
        ))}
      </AwesomeSlider>
    </Wrapper>
  )
}
