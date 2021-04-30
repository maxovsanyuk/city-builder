import styled from 'styled-components'
import { Tag } from 'procredit-bank-design-system'

const TagList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`

const getTagColor = (text: string) => {
  switch (text) {
    case 'A':
      return 'green'
    case 'B':
      return 'yellow'
    case 'C':
      return 'blue'
    default:
      return ''
  }
}

const RenderAuthorizationTags = (tags: string[]) => {
  if (!tags || tags.length === 0) return '-'
  return (
    <TagList>
      {tags.map(tag => {
        if (!tag) return null
        const color = getTagColor(tag)
        return (
          <li key={tag}>
            <Tag color={color}>{tag}</Tag>
          </li>
        )
      })}
    </TagList>
  )
}

export default RenderAuthorizationTags
