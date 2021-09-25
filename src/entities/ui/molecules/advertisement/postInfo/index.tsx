import { Wrapper } from './styles'
import { useStore } from 'effector-react'
import { $advertisement } from '../../../../model/advertisement/model'
import { Favorite, Share } from '@material-ui/icons'
import { IconButton } from '@material-ui/core'

export const PostInfo = () => {
  const advertisement = useStore($advertisement)

  return (
    <Wrapper className="post-info-box">
      Post info
      <IconButton aria-label="add to favorites">
        <Favorite />
      </IconButton>
      <IconButton aria-label="share">
        <Share />
      </IconButton>
    </Wrapper>
  )
}
