import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import InputsConfiguration from 'components/Common/InputsConfiguration'
import FormBtnsComponent from '../FormBtnsComponent'

import { Form } from 'procredit-bank-design-system'

// todo: replase type any

interface FormProps {
  currentStep: number
  stepsCounter: number
  formState: Record<string, string | number | unknown>
  setCurrentStep: any
  setFormState: any
}

const formConfig = [
  // { name: 'name', required: true, type: 'input' },
  // { name: 'surname', required: true, type: 'input' },
  // { name: 'middleName', id: 'middle.name', required: false, type: 'input' },
  { name: 'taxpayerCode', id: 'taxpayer.code', required: true, type: 'input', subType: 'number' },
  // { name: 'birthDate', id: 'birth.date', required: true, type: 'date-picker' },
  // { name: 'email', required: true, type: 'input' },
]

const PersonalInfoComponent = ({ currentStep, setCurrentStep, stepsCounter, formState, setFormState }: FormProps) => {
  const [form] = Form.useForm()
  const [, forceUpdate] = useState<unknown>()
  const { formatMessage } = useIntl()

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])

  const onFinish = (values: Record<string, string | number | unknown>) => {
    setFormState((prevFormState: Record<string, string | number | unknown>) => {
      return { ...prevFormState, step1: values }
    })

    setCurrentStep((step: number) => step + 1)
  }

  return (
    <>
      <Form
        form={form}
        layout="vertical"
        initialValues={{
          requiredMark: formatMessage({ id: 'optional' }),
        }}
        onFinish={onFinish}
      >
        <div className="inputs-wrapper">
          <InputsConfiguration config={formConfig} formState={formState} stepNamber={1} withSteps />
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

export default PersonalInfoComponent
