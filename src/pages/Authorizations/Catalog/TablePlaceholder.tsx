import { FC, useMemo } from 'react'
import List from 'procredit-bank-design-system/modules/list'
import Skeleton from 'procredit-bank-design-system/modules/skeleton'

interface TablePlacehodlerProps {
  rows?: number
}
const TablePlacehodler: FC<TablePlacehodlerProps> = ({ rows = 6 }) => {
  const listData = useMemo(() => Array.from(Array(6), (_, i) => i + 1), [rows])
  return (
    <div>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={(i: number) => (
          <List.Item key={i}>
            <Skeleton loading active title={false} paragraph={{ width: '100%', rows: 1 }} />
          </List.Item>
        )}
      />
    </div>
  )
}

export default TablePlacehodler
