import React, { FC, useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { history } from 'store/configureStore'
import { useIntl } from 'react-intl'

import { Wrapper } from './styles'

import Card from 'procredit-bank-design-system/modules/card'
import Form from 'procredit-bank-design-system/modules/form'
import Message from 'procredit-bank-design-system/modules/message'
import Breadcrumb from 'components/Common/Breadcrumb'
import Icons from 'procredit-bank-design-system/modules/icons'
import Button from 'procredit-bank-design-system/modules/button'
import Typography from 'procredit-bank-design-system/modules/typography'
import AdditionalFilesUploadingComponent
  from "../../Authorizations/NewAuthorization/components/AdditionalFilesUploadingComponent";
import InputsConfigurationComponent
  from "../../Authorizations/NewAuthorization/components/InputsConfigurationComponent";

const { Title } = Typography
const { HomeFilled } = Icons
const { Item } = Breadcrumb

interface AccountsProps {}
interface ParamsProps {
  id: string | undefined
}

const ADDITIONALL_FILE_NAME_LIST_CONFIG = ['drivingLicence', 'proofAddress', 'socialSecurityCard', 'wealthDocuments']

const formConfig = [
  { name: 'fullName', id: 'full.name', required: true, type: 'select', mode: 'multiple', optionFilterProp: 'children' },
  { name: 'relationType', id: 'relation.type', required: true, type: 'select' },
  { name: 'authorizationType', id: 'authorization.type', required: true, type: 'select' },
  { name: 'startDate', id: 'start.date', required: false, type: 'date-picker' },
  { name: 'endDate', id: 'end.date', required: false, type: 'date-picker' },
  { name: 'authorization', required: true, type: 'select' },
  { name: 'additionalInfo', id: 'additional.info', required: false, type: 'text-area', styles: { width: 380 } },
]

const NewRelation: FC<AccountsProps> = () => {
  const [form] = Form.useForm()
  const { formatMessage } = useIntl()
  const { id }: ParamsProps = useParams()
  const [, forceUpdate] = useState<any>()

  const onFinish = (values: Record<string, string | number | unknown>) => {
    console.log(values, 'values')
    Message.success({ content: formatMessage({ id: 'processing.complete' }), duration: 2 })
    history.push('/authorizations/accounts')
  }

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
          <Link to="/authorizations">{formatMessage({ id: 'managing.authorizations' })}</Link>
        </Item>
        <Item>
          <Link to="/authorizations">{formatMessage({ id: 'accounts' })}</Link>
        </Item>

        <Item>
          <Link to="#">{id}</Link>
        </Item>
        <Item>{formatMessage({ id: 'add.new.relation' })}</Item>
      </Breadcrumb>

      <Card className="card" title={formatMessage({ id: 'add.new.relation' })}>
        <div className="text-cont">
          <Title level={5} className="secondary-title">
            {formatMessage({ id: 'account.number' })} :
          </Title>
          <Title level={5} style={{ marginLeft: 10 }}>
            {id}
          </Title>
        </div>

        <Form form={form} name="edit_account" layout="vertical" onFinish={onFinish}>
          <div>
            <div className="form-items-box">
              <InputsConfigurationComponent config={formConfig} stepNamber={2} />
            </div>

            <Title level={5} style={{ fontWeight: 400 }}>
              {formatMessage({ id: 'additional.documents' })}
            </Title>
            <AdditionalFilesUploadingComponent config={ADDITIONALL_FILE_NAME_LIST_CONFIG} />
          </div>

          <Form.Item shouldUpdate={true}>
            {() => (
              <div style={{ display: 'flex', paddingTop: 20 }}>
                <Link to="/authorizations/accounts">
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
