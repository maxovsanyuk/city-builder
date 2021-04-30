import { useState } from 'react'
import { useIntl } from 'react-intl'
import { Upload, Icons, Form } from 'procredit-bank-design-system'
const { QuestionCircleOutlined } = Icons

interface FormItemProps {
  name: string
  withLabel?: boolean
}

const FormUploadItem = ({ name, withLabel }: FormItemProps) => {
  const [fileList, setFileList] = useState([])

  const { formatMessage } = useIntl()

  const onChange = ({ fileList: newFileList }: any) => {
    setFileList(newFileList)
  }

  const onPreview = async (file: any) => {
    let src = file.url
    if (!src) {
      src = await new Promise(resolve => {
        const reader = new FileReader()
        reader.readAsDataURL(file.originFileObj)
        reader.onload = () => resolve(reader.result)
      })
    }

    const image = new Image()
    image.src = src
    const imgWindow = window.open(src)
    imgWindow && imgWindow.document.write(image.outerHTML)
  }

  const normFile = (e: any) => {
    console.log('Upload event:', e)
    if (Array.isArray(e)) {
      return e
    }
    return e && e.fileList
  }

  return (
    <Form.Item
      name={name}
      label={
        withLabel && (
          <div>
            {formatMessage({ id: `upload.${name}` })} <QuestionCircleOutlined />
          </div>
        )
      }
      valuePropName="fileList"
      getValueFromEvent={normFile}
      className="upload-item"
      rules={[
        {
          required: true,
          message: formatMessage({ id: `please.upload.${name}` }),
        },
      ]}
    >
      <Upload
        listType="picture-card"
        accept="image/jpeg,image/gif,image/png,application/pdf,image/x-eps"
        fileList={fileList}
        onChange={onChange}
        onPreview={onPreview}
      >
        {formatMessage({ id: 'upload' })} <br /> {formatMessage({ id: `upload.${name}` })}
      </Upload>
    </Form.Item>
  )
}

export default FormUploadItem
