import * as React from 'react'
import styled from 'styled-components'
import Avatar from 'procredit-bank-design-system/modules/avatar'

const UserName = styled.span`
  margin-left: 1em;
`

const mockedUser = {
  avatar: 'https://www.spotlexdigital.com/thebeautifuls/categories/photostudio/img/user-3.jpg',
  name: 'userXXXXX007',
}

// Render User's avatar and name
interface UserProfileProps {}
const UserProfile: React.FC<UserProfileProps> = () => {
  const user = mockedUser
  return (
    <div>
      <Avatar size={40} src={user.avatar} />
      <UserName>{user.name}</UserName>
    </div>
  )
}

export default UserProfile
