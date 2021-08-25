import moment from 'moment'
import Rating from '@material-ui/lab/Rating'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import { Typography } from '@material-ui/core'
import { useAdvertisement } from 'shared/hook/useAdvertisement'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { DefineAdvertisementTypeIcon } from '../../../lib/DefineAdvertisementTypeIcon'

const AdvertisementCard = ({ advertisement }: Record<string, any>) => {
  const { setCurrentAdvertisement } = useAdvertisement({ advertisement })

  return (
    <Link to={advertisement?.link} onClick={() => setCurrentAdvertisement()}>
      <div className="advertisement-box">
        <LazyLoadImage className="advertisement-img" alt="" src={advertisement?.imgLink} />
        <div className="content">
          <Typography variant="h5" align="center" gutterBottom>
            {advertisement?.title}
          </Typography>

          <div className="gorizontal-box">
            <LocationOnIcon color="primary" />
            <Typography variant="body2" margin="0 5px 0 5px">
              {advertisement?.location || 'Location'} -
            </Typography>
            <Typography variant="body2"> {moment(advertisement?.date).format('l')}</Typography>
          </div>

          <Rating
            name="customized-empty"
            defaultValue={advertisement?.rating || 4}
            className="rating"
            precision={0.5}
          />

          <div className="info-box">
            <div className="gorizontal-box">
              <div className="gorizontal-box">
                <ThumbUpAltOutlinedIcon color="primary" />
                <Typography variant="subtitle1" margin="0 10px">
                  {advertisement?.likeAmount || 32}
                </Typography>
              </div>
              <div className="gorizontal-box">
                <ThumbDownAltOutlinedIcon color="primary" />
                <Typography variant="subtitle1" margin="0 10px">
                  {advertisement?.disLikeAmount || 43}
                </Typography>
              </div>
            </div>

            <div className="gorizontal-box">
              <VisibilityOutlinedIcon color="primary" />
              <Typography variant="subtitle1" margin="0 0 0 10px">
                {advertisement?.peopleViewed || 2}
              </Typography>
            </div>
          </div>
        </div>
        {advertisement?.type && (
          <img className="user-type-icon" src={DefineAdvertisementTypeIcon(advertisement?.type)} alt="icon" />
        )}
      </div>
    </Link>
  )
}

const AdvertisementsBox = ({ config }: Record<string, any>) => {
  return (
    <Wrapper>
      {config.map((advertisement: Record<string, any>) => {
        return <AdvertisementCard key={advertisement?.name || advertisement?.id} advertisement={advertisement} />
      })}
    </Wrapper>
  )
}

export default AdvertisementsBox
