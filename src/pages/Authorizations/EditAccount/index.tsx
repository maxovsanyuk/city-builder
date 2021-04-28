import React, { FC, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { history } from '../../../store/configureStore'
import { useIntl } from 'react-intl'

import { Wrapper } from './styles'

import Card from 'procredit-bank-design-system/modules/card'
import Form from 'procredit-bank-design-system/modules/form'
import InputAmount from 'procredit-bank-design-system/modules/input-amount'
import Typography from 'procredit-bank-design-system/modules/typography'
import Input from 'procredit-bank-design-system/modules/input'
import Button from 'procredit-bank-design-system/modules/button'
import Message from 'procredit-bank-design-system/modules/message'

const { Title } = Typography

interface AccountsProps {}
interface ParamsProps {
  accountId: string
}

const EditAccount: FC<AccountsProps> = () => {
  const [form] = Form.useForm()
  const { formatMessage } = useIntl()
  const { accountId }: ParamsProps = useParams()

  const [, forceUpdate] = useState<any>()

  const onFinish = (values: Record<string, string | number | unknown>) => {
    console.log(values, 'values')

    Message.success({ content: `${formatMessage({ id: 'processing.complete' })}`, duration: 2 })
    history.push('/authorizations/accounts')
  }

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])

  return (
    <Wrapper>
      <Card className="card" title={formatMessage({ id: 'edit' })}>
        <div className="text-cont">
          <Title level={5} className="secondary-title">
            {formatMessage({ id: 'account.number' })} :
          </Title>
          <Title level={5} style={{ marginLeft: 10 }}>
            {accountId}
          </Title>
        </div>

        <div className="text-cont">
          <Title level={5} className="secondary-title">
            {formatMessage({ id: 'account.type' })} :
          </Title>
          <Title level={5} style={{ marginLeft: 10 }}>
            Current type
          </Title>
        </div>

        <Form form={form} name="horizontal_login" layout="vertical" onFinish={onFinish}>
          <div className="form-items-box">
            <Form.Item
              label={formatMessage({ id: 'limit.amount' })}
              name="limitAmount"
              rules={[{ required: true, message: formatMessage({ id: 'please.input.limit.amount' }) }]}
            >
              <InputAmount />
            </Form.Item>
            <Form.Item
              label={formatMessage({ id: 'required.authorization' })}
              name="requiredAuthorizationCounter"
              rules={[{ required: true, message: formatMessage({ id: 'please.input.required.authorization' }) }]}
            >
              <Input type="number" />
            </Form.Item>
          </div>

          <Form.Item shouldUpdate={true}>
            {() => (
              <div style={{ display: 'flex' }}>
                <Link to="/authorizations/accounts">
                  <Button type="primary">{formatMessage({ id: 'cancel' })}</Button>
                </Link>

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: 15 }}
                  disabled={
                    !form.isFieldsTouched(true) ||
                    form.getFieldsError().filter(({ errors }: any) => errors.length).length
                  }
                >
                  {formatMessage({ id: 'save' })}
                </Button>
              </div>
            )}
          </Form.Item>
        </Form>
      </Card>
    </Wrapper>
  )
}

export default EditAccount
