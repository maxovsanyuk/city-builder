import * as React from 'react'
import styled from 'styled-components'

const Link = styled.a`
  height: inherit;
  padding: 16px 0;
  & img {
    height: 100%;
    width: auto;
  }
`

interface LogoProps {}
const Logo: React.FC<LogoProps> = () => {
  return (
    <Link href="/">
      <img src="/logos/logo.svg" alt="" />
    </Link>
  )
}

export default Logo
