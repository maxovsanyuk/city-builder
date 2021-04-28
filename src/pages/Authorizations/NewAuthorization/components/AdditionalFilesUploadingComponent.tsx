import { ChangeEvent, useState } from 'react'
import { useIntl } from 'react-intl'
import FormUploadItem from './FormUploadItem'
import Checkbox from 'procredit-bank-design-system/modules/checkbox'
import get from 'lodash/get'

interface ConfigProps {
  config: string[]
}

const AdditionalFilesUploadingComponent = ({ config }: ConfigProps) => {
  const [additionalFileNameList, setAdditionalFileNameList] = useState<string[]>([])
  const { formatMessage } = useIntl()

  const checkBoxChangeHandler = (e: ChangeEvent) => {
    get(e, 'target.checked')
      ? setAdditionalFileNameList([...additionalFileNameList, get(e, 'target.name')])
      : additionalFileNameList.length &&
        setAdditionalFileNameList(additionalFileNameList.filter((s: string) => s !== get(e, 'target.name')))
  }

  return (
    <>
      {config.map((el: string) => {
        return (
          <Checkbox name={el} key={el} onChange={checkBoxChangeHandler}>
            {formatMessage({ id: el })}
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

export default AdditionalFilesUploadingComponent
