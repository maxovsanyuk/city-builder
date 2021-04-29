import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import InputsConfigurationComponent from '../InputsConfigurationComponent'
import FormBtnsComponent from '../FormBtnsComponent'

import Form from 'procredit-bank-design-system/modules/form'

// todo: replace type any

interface FormProps {
  currentStep: number
  stepsCounter: number
  formState: Record<string, string | number | unknown>
  setCurrentStep: any
  setFormState: any
}

const formConfig = [
  { name: 'region', required: true, type: 'input' },
  { name: 'zip.code', required: true, type: 'input', subType: 'number' },
  { name: 'city', required: true, type: 'input' },
  { name: 'street', required: true, type: 'input' },
  { name: 'number', required: true, type: 'input', subType: 'number' },
  { name: 'city', required: true, type: 'input' },
  { name: 'additionalInfo', id: 'additional.info', required: false, type: 'input' },
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
          <InputsConfigurationComponent config={formConfig} formState={formState} stepNamber={2} />
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
