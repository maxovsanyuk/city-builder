import { FC, useState, useEffect } from 'react'
import { ActionType } from '../../store/authentication/model'
import { useIntl } from 'react-intl'

import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import { Wrapper } from './ConfirmLogin.style'

import HorizontalLogo from '../../assets/horizontal-logo.svg'

import Form from 'procredit-bank-design-system/modules/form'
import Input from 'procredit-bank-design-system/modules/input'
import Button from 'procredit-bank-design-system/modules/button'
import Typography from 'procredit-bank-design-system/modules/typography'

const { Title, Text } = Typography

const ConfirmLogin: FC = () => {
  const { formatMessage } = useIntl()

  const onFinish = (mTANCode: string | number) => {
    const dispatch = useDispatch()
    dispatch({ type: ActionType.CONFIRM_LOGIN_USER, payload: mTANCode })
  }

  const resendNewCodeHandler = () => {
    console.log('Resend')
  }

  const [form] = Form.useForm()
  const [, forceUpdate] = useState<any>()

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])

  return (
    <Wrapper>
      <Link to="/">
        <img src={HorizontalLogo} alt="horizontal-logo" />
      </Link>

      <Title className="h-4" level={4}>
        {formatMessage({ id: 'confirm.login' })}
      </Title>

      <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label={formatMessage({ id: 'mTAN.for.serial.number' })}
          name="mTANCode"
          rules={[{ required: true, message: formatMessage({ id: 'please.input.mTAN' }) }]}
          style={{ margin: 0 }}
        />

        <Input.Password placeholder={formatMessage({ id: 'enter.mTAN' })} style={{ margin: '5px 0' }} />

        <Text>
          {formatMessage({ id: 'receive.your.code.text' })}
          <Button type="text" onClick={resendNewCodeHandler}>
            {formatMessage({ id: 'resend.new.code' })}
          </Button>
        </Text>

        <Form.Item shouldUpdate={true} style={{ marginTop: 60 }}>
          {() => (
            <Button
              type="primary"
              htmlType="submit"
              disabled={!!form.getFieldsError().filter(({ errors }: any) => errors.length).length}
            >
              {formatMessage({ id: 'confirm' })}
            </Button>
          )}
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default ConfirmLogin
