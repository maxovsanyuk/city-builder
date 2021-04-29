import Tag from 'procredit-bank-design-system/modules/tag'

const RenderAccountTypeTag = (text: string) => {
  if (!text) return '-'
  let color = ''
  if (text === 'Current account') color = 'volcano'
  if (text === 'Credit line') color = 'green'
  if (text === 'FlexSave') color = 'magenta'
  return <Tag color={color}>{text}</Tag>
}

export default RenderAccountTypeTag
