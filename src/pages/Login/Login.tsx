import { FC } from 'react'
import { useIntl } from 'react-intl'
import { Link } from 'react-router-dom'
import { Wrapper } from './Login.style'

import HorizontalLogo from '../../assets/horizontal-logo.svg'

// procredit-bank-design-system

import Form from 'procredit-bank-design-system/modules/form'
import Input from 'procredit-bank-design-system/modules/input'
import Button from 'procredit-bank-design-system/modules/button'

type Values = {
  username: string
  password: string | number
}

const Login: FC = () => {
  const { formatMessage } = useIntl()

  const onFinish = (values: Values) => {
    console.log('Success:', values)
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Wrapper>
      <Link to="/">
        <img src={HorizontalLogo} alt="horizontalLogo.svg" />
      </Link>

      <div className="title">
        <span>{formatMessage({ id: 'welcome-to-my-procredit' })}</span>
      </div>

      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label={formatMessage({ id: 'user-name' })}
          name="username"
          rules={[{ required: true, message: formatMessage({ id: 'please.input.your.username' }) }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={formatMessage({ id: 'password' })}
          name="password"
          rules={[{ required: true, message: formatMessage({ id: 'please.input.your.password' }) }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item style={{ marginTop: 20 }}>
          <Button type="primary" htmlType="submit">
            {formatMessage({ id: 'login' })}
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default Login
