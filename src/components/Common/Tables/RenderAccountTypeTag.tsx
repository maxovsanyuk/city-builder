import Tag from 'procredit-bank-design-system/modules/tag'

const getTagColor = (text: string) => {
  switch (text) {
    case 'Current account':
      return 'volcano'
    case 'Credit line':
      return 'green'
    case 'FlexSave':
      return 'magenta'
    default:
      return ''
  }
}

const RenderAccountTypeTag = (text: string) => {
  if (!text) return '-'
  const color = getTagColor(text)
  return <Tag color={color}>{text}</Tag>
}

export default RenderAccountTypeTag
