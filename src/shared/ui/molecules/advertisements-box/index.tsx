import moment from 'moment'
import Rating from '@material-ui/lab/Rating'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import { Wrapper } from './styles'
import { Link } from 'react-router-dom'
import { Typography, Box } from '@material-ui/core'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { useAdvertisement } from 'shared/lib/hook/use-advertisement'
import { defineAdvertisementTypeIcon } from 'shared/lib/helpers/define-advertisement-type-icon'

const AdvertisementCard = ({ advertisement }: Record<string, any>) => {
  const { setCurrentAdvertisement } = useAdvertisement({ advertisement })

  return (
    <Link to={advertisement?.link} onClick={() => setCurrentAdvertisement()}>
      <div className="advertisement-small-box">
        <LazyLoadImage className="advertisement-img" alt="" src={advertisement?.imgLink} />

        <Box width="100%">
          <Typography variant="h5" className="title" align="center" gutterBottom>
            {advertisement?.title}
          </Typography>

          <div className="gorizontal-box">
            <LocationOnIcon color="primary" />
            <Typography variant="body2" className="location-title" margin="0 5px 0 5px">
              {advertisement?.location || 'Location'} -
            </Typography>
            <Typography className="date-title" variant="body2">
              {moment(advertisement?.date).format('l')}
            </Typography>
          </div>

          <Rating
            name="customized-empty"
            defaultValue={advertisement?.rating || 4}
            className="rating"
            precision={0.5}
          />

          <div className="info-box">
            <Box className="gorizontal-box">
              <Box className="gorizontal-box">
                <ThumbUpAltOutlinedIcon color="primary" />
                <Typography className="default-color" variant="subtitle1" margin="0 10px">
                  {advertisement?.likeAmount || 32}
                </Typography>
              </Box>
              <Box className="gorizontal-box">
                <ThumbDownAltOutlinedIcon color="primary" />
                <Typography className="default-color" variant="subtitle1" margin="0 10px">
                  {advertisement?.disLikeAmount || 43}
                </Typography>
              </Box>
            </Box>

            <Box className="gorizontal-box">
              <VisibilityOutlinedIcon color="primary" />
              <Typography className="default-color" variant="subtitle1" margin="0 0 0 10px">
                {advertisement?.peopleViewed || 2}
              </Typography>
            </Box>
          </div>
        </Box>
        {advertisement?.type && (
          <img className="user-type-icon" src={defineAdvertisementTypeIcon(advertisement?.type)} alt="icon" />
        )}
      </div>
    </Link>
  )
}

export const AdvertisementsBox = ({ config }: Record<string, any>) => {
  return (
    <Wrapper>
      {config.map((advertisement: Record<string, any>) => (
        <AdvertisementCard key={advertisement?.name || advertisement?.id} advertisement={advertisement} />
      ))}
    </Wrapper>
  )
}
