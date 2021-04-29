import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import { Form, Message } from 'procredit-bank-design-system'
import { history } from 'store/configureStore'
import FormUploadItem from '../FormUploadItem'
import FormBtnsComponent from '../FormBtnsComponent'
import AdditionalFilesUploadingComponent from '../AdditionalFilesUploadingComponent'

// todo: replace type any

interface FormProps {
  currentStep: number
  stepsCounter: number
  formState?: Record<string, string | number | unknown>
  setCurrentStep: (keys: number) => void
  setFormState: any
}

const ADDITIONALL_FILE_NAME_LIST_CONFIG = ['drivingLicence', 'proofAddress', 'socialSecurityCard', 'wealthDocuments']

const DocumentsComponent = ({ currentStep, setCurrentStep, stepsCounter, setFormState }: FormProps) => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState<any>()

  const { formatMessage } = useIntl()

  const onFinish = (values: Record<string, string | number | unknown>) => {
    setFormState((prevFormState: Record<string, string | number | unknown>) => {
      return { ...prevFormState, step3: values }
    })

    Message.success({ content: `${formatMessage({ id: 'processing.complete' })}`, duration: 2 })
    history.push('/manage-authorizations/authorizations')
  }

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])

  return (
    <>
      <Form form={form} name="horizontal_login" onFinish={onFinish}>
        <div className="documents-inputs-wrapper">
          <FormUploadItem name="idScan" withLabel />
          <Form.Item label={formatMessage({ id: 'additional.documents' })} style={{ margin: '40px 0 20px 0' }} />

          <AdditionalFilesUploadingComponent config={ADDITIONALL_FILE_NAME_LIST_CONFIG} />
        </div>

        <Form.Item shouldUpdate={true}>
          {() => (
            <FormBtnsComponent
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              stepsCounter={stepsCounter}
              form={form}
            />
          )}
        </Form.Item>
      </Form>
    </>
  )
}

export default DocumentsComponent
