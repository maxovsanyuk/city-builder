import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

// Components

import InputsConfigurationComponent from '../InputsConfigurationComponent'
import FormBtnsComponent from '../FormBtnsComponent'

// procredit-bank-design-system

import Form from 'procredit-bank-design-system/modules/form'

// todo: replase type any

interface FormProps {
  currentStep: number
  stepsCounter: number
  formState: Record<string, string | number | unknown>
  setCurrentStep: any
  setFormState: any
}

const formInputsConfig = [
  { name: 'name', required: true },
  { name: 'surname', required: true },
  { name: 'middleName', id: 'middle.name', required: false },
  { name: 'taxpayerCode', type: 'number', id: 'taxpayer.code', required: true },
  { name: 'email', required: true },
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
          <InputsConfigurationComponent config={formInputsConfig} formState={formState} stepNamber={1} />

          {/*<Form.Item name="datePicker" label={formatMessage({ id: 'date.of.birth' })} rules={[{ type: 'object' }]}>*/}
          {/*  <DatePicker />*/}
          {/*</Form.Item>*/}
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
