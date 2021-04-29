import { useIntl } from 'react-intl'
import { Input, Form } from 'procredit-bank-design-system'
import get from 'lodash/get'

interface ConfigProps {
  config: Array<Record<string, string | unknown>>
  formState: Record<string, string | unknown>
  stepNamber: number
}

const InputsConfigurationComponent = ({ config, formState, stepNamber }: ConfigProps) => {
  const { formatMessage } = useIntl()

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
