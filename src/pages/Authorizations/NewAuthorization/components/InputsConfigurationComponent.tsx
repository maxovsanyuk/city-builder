import { useIntl } from 'react-intl'

import Form from 'procredit-bank-design-system/modules/form'
import Input from 'procredit-bank-design-system/modules/input'
import DatePicker from 'procredit-bank-design-system/modules/date-picker'
import Select from 'procredit-bank-design-system/modules/select'

const { Option } = Select

import get from 'lodash/get'

interface ConfigProps {
  config: Array<Record<string, string | unknown>>
  formState: Record<string, string | unknown>
  stepNamber?: number
}

const InputsConfigurationComponent = ({ config, formState, stepNamber }: ConfigProps) => {
  const { formatMessage } = useIntl()

  return (
    <>
      {config.map(({ name, id, type, subType, required }: Record<string, string | unknown>) => {
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
                  defaultValue={get(formState, `step${stepNamber}.${name}`)}
                />
              </Form.Item>
            )

          // todo: add differetn date-picker options

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
                <DatePicker />
              </Form.Item>
            )

          // todo: add differetn select options

          case 'select':
            return (
              <Form.Item
                key={name}
                name={name}
                label={formatMessage({ id: `${id || name}` })}
                rules={[{ required, message: formatMessage({ id: `please.input.your.${id || name}` }) }]}
              >
                <Select placeholder={formatMessage({ id: `${id || name}` })}>
                  {[1, 2, 3].map(number => (
                    <Option key={number}>{number}</Option>
                  ))}
                </Select>
              </Form.Item>
            )

          default:
            return null
        }
      })}
    </>
  )
}

export default InputsConfigurationComponent
