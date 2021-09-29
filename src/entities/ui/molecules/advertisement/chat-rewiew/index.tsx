import { Upload } from 'antd'
import { Wrapper } from './styles'
import { useIntl } from 'react-intl'
import { InboxOutlined } from '@ant-design/icons'
import { Button, TextField } from '@material-ui/core'

const { Dragger } = Upload

export const ChatRewiew = () => {
  const { formatMessage } = useIntl()

  return (
    <Wrapper className="contact-box" id="chat">
      <TextField fullWidth label="Message" multiline rows={10} placeholder="Write new message..." variant="filled" />
      <Dragger>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
      </Dragger>

      <Button className="sent-btn" variant="contained">
        {formatMessage({ id: 'sent.message' })}
      </Button>
    </Wrapper>
  )
}

// const props = {
// name: 'file',
// multiple: true,
// action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
// onChange(info: any) {
//   const { status } = info.file
//   if (status !== 'uploading') {
//     console.log(info.file, info.fileList)
//   }
//   if (status === 'done') {
//     message.success(`${info.file.name} file uploaded successfully.`)
//   } else if (status === 'error') {
//     message.error(`${info.file.name} file upload failed.`)
//   }
// },
// onDrop(e: any) {
//   console.log('Dropped files', e.dataTransfer.files)
// },
// }
