import Tag from 'procredit-bank-design-system/modules/tag'

const RenderStatusTag = (text: string) => {
  if (!text) return '-'
  let color = ''
  if (text === 'new') color = 'volcano'
  if (text === 'eba') color = 'green'
  if (text === 'no-eba') color = 'magenta'
  if (text === 'dismissed') color = 'red'
  return <Tag color={color}>{text}</Tag>
}

export default RenderStatusTag
