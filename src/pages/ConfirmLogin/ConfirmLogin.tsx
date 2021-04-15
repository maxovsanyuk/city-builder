import React, { FC, useState, useEffect } from 'react'
import { useIntl } from 'react-intl'
import { Link, useHistory } from 'react-router-dom'

import { Wrapper } from './ConfirmLogin.style'

import HorizontalLogo from '../../assets/horizontal-logo.svg'

// procredit-bank-design-system

import Form from 'procredit-bank-design-system/modules/form'
import Input from 'procredit-bank-design-system/modules/input'
import Button from 'procredit-bank-design-system/modules/button'
import Typography from 'procredit-bank-design-system/modules/typography'
const { Title, Text } = Typography

type Values = {
  username: string
  password: string | number
}

const ConfirmLogin: FC = () => {
  const { formatMessage } = useIntl()

  const history = useHistory()

  const onFinish = (values: Values) => {
    console.log('Success:', values)
    history.push('/confirm-login')
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
        <img src={HorizontalLogo} alt="horizontalLogo.svg" />
      </Link>

      <Title className="h-4" level={4} style={{ margin: '40px 0 30px 0' }}>
        {formatMessage({ id: 'confirm.login' })}
      </Title>

      <Form form={form} initialValues={{ remember: true }} onFinish={onFinish}>
        <Form.Item
          label={formatMessage({ id: 'mTAN.for.serial.number' })}
          name="mTAN"
          rules={[{ required: true, message: formatMessage({ id: 'please.input.mTAN' }) }]}
          style={{ margin: '0 0 10px 0' }}
        >
          <Input.Password placeholder={formatMessage({ id: 'enter.mTAN' })} />
        </Form.Item>

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
              disabled={
                !form.isFieldsTouched(true) || form.getFieldsError().filter(({ errors }: any) => errors.length).length
              }
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
