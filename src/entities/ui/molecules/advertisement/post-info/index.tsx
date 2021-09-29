import Rating from '@material-ui/lab/Rating'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import VisibilityOutlinedIcon from '@material-ui/icons/VisibilityOutlined'
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import { useStore } from 'effector-react'
import { Wrapper, PostInfoFooter } from './styles'
import { Favorite, Share } from '@material-ui/icons'
import { $advertisement } from '../../../../model/advertisement/model'
import { IconButton, Box, Divider, Typography } from '@material-ui/core'
import { defineAdvertisementTypeIcon } from '../../../../../shared/lib/helpers/define-advertisement-type-icon'

export const PostInfo = () => {
  const advertisement = useStore($advertisement)

  return (
    <Wrapper className="post-info-box">
      <Box>
        <Typography className="title" variant="h4" align="center" gutterBottom>
          Post info
        </Typography>

        <Divider style={{ margin: '20px 0' }} />

        <Typography className="title" variant="subtitle1" align="center" gutterBottom>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, dolores eligendi excepturi odio sit vero!
          Aliquam aperiam architecto, consequatur et ex explicabo id impedit ipsa laboriosam minus molestiae nam
          nesciunt nobis perferendis porro quisquam, sed tempore tenetur. Aspernatur corporis delectus dolor dolores
          placeat. A, accusantium at commodi, deserunt dolor eos eveniet in incidunt ipsam ipsum iure libero magni nam
          nisi non perspiciatis quo repudiandae, sequi sint tenetur. Accusamus adipisci alias amet aperiam atque
          corporis dolor ea earum eius excepturi fuga impedit incidunt ipsam, iure iusto labore molestias,
          necessitatibus non placeat ratione repellendus saepe sapiente sed sit sunt suscipit voluptate voluptatibus!
          Aspernatur at cumque doloremque eius enim est eveniet ex in incidunt, laboriosam libero molestias nostrum
          omnis quaerat quam quod saepe velit voluptatem. Ab dignissimos, dolores earum et ex excepturi, expedita id
          inventore magnam natus nostrum quis quo quos ut, voluptatibus? Aliquid dolorum eius eveniet, facere illum non
          nulla obcaecati! A accusamus consequuntur dicta, eos expedita, illo inventore nam nihil nulla praesentium
          quaerat suscipit unde! Accusantium amet animi aspernatur dolore earum esse ex, facere fugit itaque nam
          necessitatibus numquam odio officia officiis quo voluptatibus, voluptatum. Ad culpa fugit ipsum laboriosam
          recusandae rerum. Ab aperiam blanditiis cumque ea id porro rem. Aperiam cupiditate eligendi enim et harum hic
          inventore minus officia quia quod! Doloremque enim et fugit id ipsam mollitia quae, quod recusandae, sed sit
          tempora ullam. Deleniti dolorem eius, itaque laborum nisi repellat repudiandae soluta tempore vel veritatis?
          At doloribus inventore nulla perspiciatis sit. A assumenda autem consequuntur dolore eos esse eum ex fuga
          fugiat illo impedit itaque labore laborum, maxime nam nobis, nostrum quae quas quasi qui, quia quo quod
          ratione tempora tempore temporibus totam voluptates. Ab accusamus, alias amet aperiam commodi deleniti dicta
          eum excepturi exercitationem facilis labore laborum libero minus modi odio perferendis perspiciatis provident
          qui quibusdam recusandae sequi sint suscipit tempora ut voluptates? Aspernatur debitis error facere odit
          quidem quis totam velit voluptatibus? Deserunt ducimus eos impedit, perspiciatis, porro quibusdam quis, quos
          recusandae rem sint tempora totam ullam veritatis. Ad hic numquam pariatur quasi vitae voluptate voluptates.
          A, ad aspernatur at cum debitis delectus eaque earum error explicabo harum illo labore maiores obcaecati omnis
          perspiciatis quasi quos ratione recusandae repellendus rerum soluta tempore velit vitae. Aliquam aliquid
          blanditiis dolor dolorem ducimus est facere incidunt modi nam neque quae quaerat quisquam sint soluta, tempora
          ullam, veritatis? Ad hic iusto minus molestias, numquam omnis placeat possimus praesentium provident repellat.
        </Typography>
      </Box>

      <PostInfoFooter>
        <Box>
          <IconButton aria-label="add to favorites">
            <Favorite />
          </IconButton>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </Box>

        <Box display="flex" alignItems="center">
          <Box display="flex" alignItems="center">
            <ThumbUpAltOutlinedIcon color="primary" />
            <Typography variant="subtitle1" margin="0 10px">
              {advertisement?.likeAmount || 32}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <ThumbDownAltOutlinedIcon color="primary" />
            <Typography variant="subtitle1" margin="0 10px">
              {advertisement?.disLikeAmount || 43}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <VisibilityOutlinedIcon color="primary" />
            <Typography variant="subtitle1" margin="0 0 0 10px">
              {advertisement?.peopleViewed || 2}
            </Typography>
          </Box>

          <Rating
            name="customized-empty"
            defaultValue={advertisement?.rating || 4}
            className="rating"
            precision={0.5}
          />
        </Box>
      </PostInfoFooter>
      {advertisement?.type && (
        <img className="user-type-icon" width={60} src={defineAdvertisementTypeIcon(advertisement?.type)} alt="icon" />
      )}
    </Wrapper>
  )
}
