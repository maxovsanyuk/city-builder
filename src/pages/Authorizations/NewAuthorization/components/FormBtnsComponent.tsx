import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'

import Button from 'procredit-bank-design-system/modules/button'

const FormBtnsComponent = ({ currentStep, setCurrentStep, stepsCounter, form }: any) => {
  const { formatMessage } = useIntl()

  return (
    <div style={{ marginBottom: 24 }}>
      {currentStep > 0 ? (
        <Button style={{ margin: '0 8px' }} onClick={() => setCurrentStep((step: number) => step - 1)}>
          {formatMessage({ id: 'back' })}
        </Button>
      ) : (
        <Link to="/authorizations">
          <Button style={{ margin: '0 8px' }}>{formatMessage({ id: 'cancel' })}</Button>
        </Link>
      )}

      {currentStep < stepsCounter - 1 && (
        <Button
          type="primary"
          htmlType="submit"
          disabled={!!form.getFieldsError().filter(({ errors }: any) => errors.length).length}
        >
          {formatMessage({ id: 'next' })}
        </Button>
      )}

      {currentStep === stepsCounter - 1 && (
        <Button
          type="primary"
          htmlType="submit"
          disabled={!!form.getFieldsError().filter(({ errors }: any) => errors.length).length}
        >
          {formatMessage({ id: 'save' })}
        </Button>
      )}
    </div>
  )
}

export default FormBtnsComponent
