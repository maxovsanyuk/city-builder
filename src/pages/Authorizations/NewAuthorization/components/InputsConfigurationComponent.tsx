import { useIntl } from 'react-intl'

import Form from 'procredit-bank-design-system/modules/form'
import Input from 'procredit-bank-design-system/modules/input'
import DatePicker from 'procredit-bank-design-system/modules/date-picker'
import Select from 'procredit-bank-design-system/modules/select'

const { TextArea } = Input
const { Item } = Form
const { Option } = Select

import get from 'lodash/get'

interface ConfigProps {
  config: Array<Record<string, string | unknown>>
  formState?: Record<string, string | unknown>
  stepNamber?: number
  withSteps?: boolean
}

const DefineOptions = ({ name }: Record<string, string | unknown>) => {
  switch (name) {
    // todo: create controllers for different cases

    default:
      return (
        <>
          {[1, 2, 3].map(number => (
            <Option key={number}>{number}</Option>
          ))}
        </>
      )
  }
}

const InputsConfigurationComponent = ({ config, formState, stepNamber, withSteps }: ConfigProps) => {
  const { formatMessage } = useIntl()

  return (
    <>
      {config.map(
        ({ name, id, type, subType, required, styles, mode, optionFilterProp }: Record<string, string | any>) => {
          switch (type) {
            case 'input':
              return (
                <Form.Item
                  key={name}
                  type={subType || 'string'}
                  name={name}
                  label={formatMessage({ id: `${id || name}` })}
                  rules={[{ required, message: formatMessage({ id: `please.input.your.${id || name}` }) }]}
                >
                  <Input
                    placeholder={formatMessage({ id: `enter.${id || name}` })}
                    defaultValue={withSteps ? get(formState, `step${stepNamber}.${name}`) : get(formState, `${name}`)}
                  />
                </Form.Item>
              )

            case 'date-picker':
              return (
                <Form.Item
                  name={name}
                  label={formatMessage({ id: `${id || name}` })}
                  rules={[
                    {
                      type: 'object',
                      required,
                      message: formatMessage({ id: `please.input.your.${id || name}` }),
                    },
                  ]}
                >
                  <DatePicker
                    style={{ width: styles?.width ? `${styles?.width}px` : '100%' }}
                    placeholder={formatMessage({ id: `choose.${id || name}` })}
                    defaultValue={withSteps ? get(formState, `step${stepNamber}.${name}`) : get(formState, `${name}`)}
                  />
                </Form.Item>
              )

            case 'select':
              return (
                <Form.Item
                  key={name}
                  name={name}
                  label={formatMessage({ id: `${id || name}` })}
                  rules={[{ required, message: formatMessage({ id: `please.input.your.${id || name}` }) }]}
                >
                  <Select
                    defaultValue={withSteps ? get(formState, `step${stepNamber}.${name}`) : get(formState, `${name}`)}
                    placeholder={formatMessage({ id: `choose.${id || name}` })}
                    optionFilterProp={optionFilterProp}
                    mode={mode}
                  >
                    <DefineOptions name={name} />
                  </Select>
                </Form.Item>
              )

            case 'text-area':
              return (
                <Item
                  label={formatMessage({ id: 'comment' })}
                  key={name}
                  style={{ width: styles?.width ? `${styles?.width}px` : '100%' }}
                >
                  <TextArea
                    autoSize={{ minRows: styles?.minRows || 4, maxRows: styles?.maxRows || 8 }}
                    allowClear
                    placeholder={formatMessage({ id: 'enter.comment' })}
                    name={name}
                    label={formatMessage({ id: `${id || name}` })}
                    rules={[{ required, message: formatMessage({ id: `please.input.your.${id || name}` }) }]}
                  />
                </Item>
              )
            default:
              return null
          }
        }
      )}
    </>
  )
}

export default InputsConfigurationComponent
