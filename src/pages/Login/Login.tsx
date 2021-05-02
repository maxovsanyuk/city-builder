import { FC } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl'
import { Wrapper } from './Login.style'
import { Form, Input, Button, Typography } from 'ant'
import { ActionType } from 'store/authentication/model'
const { Title } = Typography

type FormValues = {
  email: string | null
  password: string | null
}

const Login: FC = () => {
  const { formatMessage } = useIntl()

  // const history = useHistory()
  const dispatch = useDispatch()

  const onFinish = (values: FormValues) => {
    dispatch({ type: ActionType.LOGIN_USER, payload: values })

    // history.push('/confirm-login')
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo)
  }

  return (
    <Wrapper>
      <Title className="h-4" level={4}>
        {formatMessage({ id: 'welcome.to.procredit' })}
      </Title>

      <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed}>
        <Form.Item
          label={formatMessage({ id: 'user.name' })}
          name="email"
          rules={[{ required: true, message: formatMessage({ id: 'please.input.username' }) }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label={formatMessage({ id: 'password' })}
          name="password"
          rules={[{ required: true, message: formatMessage({ id: 'please.input.password' }) }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item style={{ marginTop: 10 }}>
          <Button type="primary" htmlType="submit">
            {formatMessage({ id: 'login' })}
          </Button>
        </Form.Item>
      </Form>
    </Wrapper>
  )
}

export default Login
