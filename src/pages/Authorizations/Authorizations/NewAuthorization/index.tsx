import { FC, useState } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import Steps from 'procredit-bank-design-system/modules/steps'
import Icons from 'procredit-bank-design-system/modules/icons'
import Card from 'procredit-bank-design-system/modules/card'
import Breadcrumb from 'components/Common/Breadcrumb'
import AdressDetailsComponent from './components/steps/AdressDetailsComponent'
import PersonalInfoComponent from './components/steps/PersonalInfoComponent'
import DocumentsComponent from './components/steps/DocumentsComponent'
import { Wrapper } from './style'

const { Step } = Steps
const { HomeFilled } = Icons
const { Item } = Breadcrumb

type FormStepProps = Record<string, string | number | unknown>

interface FormProps {
  currentStep: number
  setCurrentStep?(step: number): void
  steps?: Array<Record<string, any>>
}

const STEPS_COUNTER = 3

export const useFormSteps = (): FormProps => {
  const [currentStep, setCurrentStep] = useState<number>(0)
  const [formState, setFormState] = useState<Record<string, FormStepProps>>({})
  const { formatMessage } = useIntl()

  const steps = [
    {
      title: formatMessage({ id: 'personal.info' }),
      content: (
        <PersonalInfoComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          stepsCounter={STEPS_COUNTER}
          formState={formState}
          setFormState={setFormState}
        />
      ),
    },
    {
      title: formatMessage({ id: 'address.details' }),
      content: (
        <AdressDetailsComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          stepsCounter={STEPS_COUNTER}
          formState={formState}
          setFormState={setFormState}
        />
      ),
    },
    {
      title: formatMessage({ id: 'documents' }),
      content: (
        <DocumentsComponent
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          stepsCounter={STEPS_COUNTER}
          formState={formState}
          setFormState={setFormState}
        />
      ),
    },
  ]

  return { currentStep, setCurrentStep, steps }
}

const NewAuthorization: FC = () => {
  const { currentStep, steps = [] } = useFormSteps()
  const { formatMessage } = useIntl()

  return (
    <Wrapper>
      <Breadcrumb>
        <Item>
          <Link to="/">
            <HomeFilled /> <span className="breadcrumb-item-text">{formatMessage({ id: 'home' })}</span>
          </Link>
        </Item>
        <Item>
          <Link to="/manage-authorizations">{formatMessage({ id: 'managing.authorizations' })}</Link>
        </Item>
        <Item>
          <Link to="/manage-authorizations/authorizations">{formatMessage({ id: 'authorizations' })}</Link>
        </Item>
        <Item>{formatMessage({ id: 'new.authorizations' })}</Item>
      </Breadcrumb>

      <Card className="card">
        <Steps type="navigation" current={currentStep} className="steps">
          {steps.map((item: Record<string, string>) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="children">{steps[currentStep]?.content}</div>
      </Card>
    </Wrapper>
  )
}

export default NewAuthorization
