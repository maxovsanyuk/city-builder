import { ChangeEvent, useState } from 'react'
import { useIntl } from 'react-intl'
import get from 'lodash/get'
import Checkbox from 'procredit-bank-design-system/modules/checkbox'
import FormUploadItem from './FormUploadItem'

interface ConfigProps {
  config: string[]
}

const AdditionalFilesUpload = ({ config }: ConfigProps) => {
  const [additionalFileNameList, setAdditionalFileNameList] = useState<string[]>([])
  const { formatMessage } = useIntl()

  const checkBoxChangeHandler = (e: ChangeEvent) => {
    get(e, 'target.checked')
      ? setAdditionalFileNameList([...additionalFileNameList, get(e, 'target.name')])
      : additionalFileNameList.length &&
        setAdditionalFileNameList(additionalFileNameList.filter((name: string) => name !== get(e, 'target.name')))
  }

  return (
    <>
      {config.map((elem: string) => {
        return (
          <Checkbox name={elem} key={elem} onChange={checkBoxChangeHandler}>
            {formatMessage({ id: elem })}
          </Checkbox>
        )
      })}

      <div className="additional-file-box">
        {additionalFileNameList.map((name: string) => {
          return <FormUploadItem name={name} key={name} />
        })}
      </div>
    </>
  )
}

export default AdditionalFilesUpload
