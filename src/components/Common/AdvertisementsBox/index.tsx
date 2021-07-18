import { Link } from 'react-router-dom'
import { Wrapper } from './styles'

const AdvertisementsBox = ({ config }: Record<string, any>) => {
  return (
    <Wrapper>
      {config.map((categorie: Record<string, any>) => {
        return (
          <div key={categorie.name} className="cotegorie-box">
            <Link to={categorie?.link}>
              <img className="img" alt="" />
            </Link>
            {categorie?.name}
          </div>
        )
      })}
    </Wrapper>
  )
}

export default AdvertisementsBox
