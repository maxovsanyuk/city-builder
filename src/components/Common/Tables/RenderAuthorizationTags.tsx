import styled from 'styled-components'
import Tag from 'procredit-bank-design-system/modules/tag'

const TagList = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`

const RenderAuthorizationTags = (tags: string[]) => {
  if (!tags || tags.length === 0) return '-'
  return (
    <TagList>
      {tags.map(tag => {
        if (!tag) return null
        let color = ''
        if (tag === 'A') color = 'green'
        if (tag === 'B') color = 'yellow'
        if (tag === 'C') color = 'blue'
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
