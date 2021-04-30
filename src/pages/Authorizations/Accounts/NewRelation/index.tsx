import React, { FC, useState, useEffect, EventHandler } from 'react'
import { Link, useParams } from 'react-router-dom'
import { history } from 'store/configureStore'
import { useIntl } from 'react-intl'

import { Wrapper } from './styles'

import InputsConfiguration from 'components/Common/InputsConfiguration'
import AdditionalFilesUpload from 'components/Common/AdditionalFilesUpload'
import Breadcrumb from 'components/Common/Breadcrumb'

import get from 'lodash/get'

import { Card, Form, Message, Icons, Button, Typography, Select, Checkbox } from 'procredit-bank-design-system'
const { Option } = Select

const { Title } = Typography
const { HomeFilled } = Icons
const { Item } = Breadcrumb

interface AccountsProps {}
interface ParamsProps {
  id: string | undefined
}

const ADDITIONALL_FILE_NAME_LIST_CONFIG = ['drivingLicence', 'proofAddress', 'socialSecurityCard', 'wealthDocuments']

const formConfig = [
  { name: 'relationType', id: 'relation.type', required: true, type: 'select' },
  { name: 'authorizationType', id: 'authorization.type', required: true, type: 'select' },
  { name: 'startDate', id: 'start.date', required: false, type: 'date-picker' },
  { name: 'endDate', id: 'end.date', required: false, type: 'date-picker' },
  { name: 'authorization', required: true, type: 'select' },
  { name: 'additionalInfo', id: 'additional.info', required: false, type: 'text-area', styles: { width: 380 } },
]

const NewRelation: FC<AccountsProps> = () => {
  const [selectedUsers, setSelectedUsers] = useState<string[]>([])
  const [isSelectedForAllUsers, setIsSelectedForAllUsers] = useState<boolean>(false)
  const [form] = Form.useForm()
  const { formatMessage } = useIntl()
  const { id }: ParamsProps = useParams()
  const [, forceUpdate] = useState<any>()

  const onFinish = (values: Record<string, string | number | unknown>) => {
    console.log(values, 'values')
    Message.success({ content: formatMessage({ id: 'processing.complete' }), duration: 2 })
    history.push('/manage-authorizations/accounts')
  }

  const onSelect = (selectedElem: string) => setSelectedUsers([...selectedUsers, selectedElem])
  const onDeselect = (deselectElem: string) =>
    setSelectedUsers(selectedUsers.filter((name: string) => name !== deselectElem))
  const onChangehandler = (e: EventHandler<any>) => setIsSelectedForAllUsers(get(e, 'target.checked'))

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({})
  }, [])

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
          <Link to="/manage-authorizations/accounts">{formatMessage({ id: 'accounts' })}</Link>
        </Item>

        <Item>
          <Link to="#">{id}</Link>
        </Item>
        <Item>{formatMessage({ id: 'add.new.relation' })}</Item>
      </Breadcrumb>

      <Card className="card" title={formatMessage({ id: 'add.new.relation' })}>
        <div className="text-cont">
          <Title level={4} className="secondary-title">
            {formatMessage({ id: 'account.number' })} :
          </Title>
          <Title level={4} style={{ margin: 0 }}>
            {id}
          </Title>
        </div>

        <Form form={form} name="new_relation" layout="vertical" onFinish={onFinish}>
          <div>
            <div className="form-items-box">
              <Form.Item
                name={'fullName'}
                label={formatMessage({ id: 'full.name' })}
                rules={[{ required: true, message: formatMessage({ id: 'please.input.your.full.name' }) }]}
              >
                <Select
                  showArrow
                  placeholder={formatMessage({ id: 'enter.full.name' })}
                  optionFilterProp="children"
                  mode="multiple"
                  onSelect={onSelect}
                  onDeselect={onDeselect}
                >
                  {['Max', 'Roma', 'Oleg'].map((opt: string) => (
                    <Option key={opt} value={opt}>
                      {opt}
                    </Option>
                  ))}
                </Select>
              </Form.Item>

              {selectedUsers.length > 1 && (
                <Checkbox
                  name="isSelectedForAllUsers"
                  style={{ margin: '10px 0', whiteSpace: 'nowrap' }}
                  onChange={onChangehandler}
                >
                  {formatMessage({ id: 'use.the.same.parameters.for.all.names' })}
                </Checkbox>
              )}

              {selectedUsers.length > 1 && !isSelectedForAllUsers ? (
                selectedUsers.map((name: string) => (
                  <div key={name}>
                    <Title level={4} style={{ margin: '20px 0 10px 0' }}>
                      {name}
                    </Title>
                    <InputsConfiguration config={formConfig} />
                  </div>
                ))
              ) : (
                <InputsConfiguration config={formConfig} />
              )}
            </div>

            <Title level={4} style={{ fontWeight: 400 }}>
              {formatMessage({ id: 'additional.documents' })}
            </Title>
            <AdditionalFilesUpload config={ADDITIONALL_FILE_NAME_LIST_CONFIG} />
          </div>

          <Form.Item shouldUpdate={true}>
            {() => (
              <div style={{ display: 'flex', padding: '20px 0' }}>
                <Link to="/manage-authorizations/accounts">
                  <Button type="primary">{formatMessage({ id: 'cancel' })}</Button>
                </Link>

                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginLeft: 15 }}
                  disabled={
                    !form.isFieldsTouched(true) || form.getFieldsError().some(({ errors }: any) => errors?.length > 0)
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

export default NewRelation
