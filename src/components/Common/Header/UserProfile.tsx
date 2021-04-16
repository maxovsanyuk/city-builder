import React, { FC } from 'react'
import styled from 'styled-components'
import Avatar from 'procredit-bank-design-system/modules/avatar'

const UserName = styled.span`
  margin-left: 1em;
`

const mockedUser = {
  avatar: '/mocks/userAvatar.jpg',
  name: 'userXXXXX007',
}

// Render User's avatar and name
interface UserProfileProps {}
const UserProfile: FC<UserProfileProps> = () => {
  const user = mockedUser
  return (
    <div style={{ marginTop: 5 }}>
      <Avatar size={40} src={user.avatar} />
      <UserName>{user.name}</UserName>
    </div>
  )
}

export default UserProfile
