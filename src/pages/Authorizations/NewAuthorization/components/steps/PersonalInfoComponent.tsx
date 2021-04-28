import { useEffect, useState } from 'react'
import { useIntl } from 'react-intl'

import InputsConfigurationComponent from '../InputsConfigurationComponent'
import FormBtnsComponent from '../FormBtnsComponent'

import Form from 'procredit-bank-design-system/modules/form'
import DatePicker from 'procredit-bank-design-system/modules/date-picker'
import Select from 'procredit-bank-design-system/modules/select'
import Cascader from 'procredit-bank-design-system/modules/cascader'

const { Option } = Select

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

  const config = {
    rules: [{ type: 'object', required: true, message: 'Please select time!' }],
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

          <Form.Item
            name="datePicker"
            // label={formatMessage({ id: 'date.of.birth' })}
            label="date-picker"
            {...config}
          >
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="select"
            label="Select"
            hasFeedback
            // validateStatus="error"
          >
            <Select allowClear>
              <Option value="1">Option 1</Option>
              <Option value="2">Option 2</Option>
              <Option value="3">Option 3</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Validating"
            hasFeedback
            validateStatus="validating"
            // help="The information is being validated..."
            name="cascader"
          >
            <Cascader
              options={[
                {
                  value: 'xx',
                  label: 'xx',
                },
              ]}
              allowClear
            />
          </Form.Item>
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
