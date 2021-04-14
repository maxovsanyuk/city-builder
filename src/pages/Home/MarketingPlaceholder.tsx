import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Card from 'procredit-bank-design-system/modules/card'
import Typography from 'procredit-bank-design-system/modules/typography'

const { Title } = Typography

const StyledLink = styled(Link)`
  display: block;
  margin-top: auto;
`

const placeholderImage =
  'https://s3-alpha-sig.figma.com/img/a90a/9611/e3e84d5fbbca055fde9e6ad924626a15?Expires=1619395200&Signature=dWRFVDlISNlLuE~OI-T7hUNOlwD7ugB4y~anjr3sSGyCRacgbjUpwfwu1fjrporz6NfEu3neBC78QFSPpaet20HWn8xRT403GMiaZiyDz3ENWOkf02D90UzE9U5GFKIIwPPQJ01FjjxND4l2fXPpCaL~wepA8jMkEZ5Gd824nS0qF39ernei9q9klY7UKyH2SgEa~yz-HXFMYF7~K70GoGW-m0fzCSEPQGQeL6IIqavTQZuRsZHY~Y9hKief2-Bvpzzg1HI8tQmVYrtG-KxXi7LQwGOpBGu6sXC-4tCnuKKzyr-0gB33aRMQtUi5yuMPTvBO~8ebpolqeiKzk-L9Fw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA'

interface StyledCardProps {
  bgImage: string
}
const StyledCard = styled(Card)<StyledCardProps>`
  background: url('${({ bgImage }) => bgImage}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: var(--color-gray-1);
  text-align: center;
  & .ant-typography {
    color: inherit;
  }
`

// !TODO: Not sure what this component is supposed to do
interface MarketingPlaceholderProps {
  href?: string
  bgImage?: string
  title?: React.ReactNode
  hoverable?: boolean
}
const MarketingPlaceholder: React.FC<MarketingPlaceholderProps> = ({
  href = '/marketing',
  hoverable = true,
  bgImage = placeholderImage,
  title = 'ProCredit Marketing placeholder',
}) => (
  <StyledLink to={href}>
    <StyledCard hoverable={hoverable} bgImage={bgImage}>
      <Title level={4}>{title}</Title>
    </StyledCard>
  </StyledLink>
)

export default MarketingPlaceholder
