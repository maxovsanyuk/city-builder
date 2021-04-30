import { Tag } from 'procredit-bank-design-system'

const getTagColor = (text: string) => {
  switch (text) {
    case 'new':
      return 'volcano'
    case 'eba':
      return 'green'
    case 'no-eba':
      return 'magenta'
    case 'dismissed':
      return 'red'
    default:
      return ''
  }
}

const RenderStatusTag = (text: string) => {
  if (!text) return '-'
  const color = getTagColor(text)
  return <Tag color={color}>{text}</Tag>
}

export default RenderStatusTag
