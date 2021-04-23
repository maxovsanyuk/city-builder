import { useIntl } from 'react-intl'

// procredit-bank-design-system

import Form from 'procredit-bank-design-system/modules/form'
import Input from 'procredit-bank-design-system/modules/input'

// LODASH

import get from 'lodash/get'

interface ConfigProps {
  config: Array<Record<string, string | unknown>>
  formState: Record<string, string | unknown>
  stepNamber: number
}

const InputsConfigurationComponent = ({ config, formState, stepNamber }: ConfigProps) => {
  const { formatMessage } = useIntl()

  console.log(formState, 'formState')

  return (
    <>
      {config.map(({ name, id, type, required }: Record<string, string | unknown>) => {
        return (
          <Form.Item
            key={name}
            type={type}
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
      })}
    </>
  )
}

export default InputsConfigurationComponent
