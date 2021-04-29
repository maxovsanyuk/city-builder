import styled from 'styled-components'

import Colors from 'procredit-bank-design-system/modules/colors'
const { gray } = Colors

export const Wrapper = styled.div`
  height: 100%;

  .ant-card-head {
    border: none;
  }

  .ant-card-head-title {
    padding: 22.5px 0 0 0;
  }

  .text-cont {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .secondary-title {
    color: ${gray[5]};
  }

  .card {
    height: 100%;
  }

  .form-items-box {
    width: 200px;
    margin: 40px 0 20px 0;
  }
`
