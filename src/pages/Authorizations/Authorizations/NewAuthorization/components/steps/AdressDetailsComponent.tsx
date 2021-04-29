import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'
import Form from 'procredit-bank-design-system/modules/form'
import InputsConfigurationComponent from '../InputsConfigurationComponent'
import FormBtnsComponent from '../FormBtnsComponent'

// todo: replace type any

interface FormProps {
  currentStep: number
  stepsCounter: number
  formState: Record<string, string | number | unknown>
  setCurrentStep: any
  setFormState: any
}

const formInputsConfig = [
  { name: 'region', required: true },
  { name: 'zip.code', type: 'number', required: true },
  { name: 'city', required: true },
  { name: 'street', required: true },
  { name: 'number', type: 'number', required: true },
  { name: 'city', required: true },
  { name: 'additionalInfo', id: 'additional.info', required: false },
]

const AdressDetailsComponent = ({ currentStep, setCurrentStep, stepsCounter, formState, setFormState }: FormProps) => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState<any>()
  const { formatMessage } = useIntl()

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values: Record<string, string | number | unknown>) => {
    setFormState((prevFormState: Record<string, string | number | unknown>) => {
      return { ...prevFormState, step2: values }
    })

    setCurrentStep((step: number) => step + 1)
  }

  return (
    <>
      <Form
        form={form}
        name="horizontal_login"
        onFinish={onFinish}
        layout="vertical"
        initialValues={{
          requiredMark: formatMessage({ id: 'optional' }),
        }}
      >
        <div className="inputs-wrapper">
          <InputsConfigurationComponent config={formInputsConfig} formState={formState} stepNamber={2} />
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

export default AdressDetailsComponent
