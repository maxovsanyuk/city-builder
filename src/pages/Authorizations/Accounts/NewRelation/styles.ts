import styled from 'styled-components'

import { Colors } from 'procredit-bank-design-system'
const { gray } = Colors

export const Wrapper = styled.div`
  height: 100%;

  .ant-card-head {
    border: none;
  }

  .ant-card-head-title {
    padding: 22.5px 0 0 0;
  }

  .ant-card-body {
    height: calc(100% - 80px);
  }

  .text-cont {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  .secondary-title {
    color: ${gray[5]};
    margin: 0 15px 0 0;
  }

  .card {
    height: calc(100% - 40px);
    margin: 20px 0;
    overflow: auto;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;
  }

  .ant-form-item {
    margin-bottom: 0;
    padding: 10px 0;
  }

  .form-items-box {
    width: 290px;
    margin: 40px 0 20px 0;
    height: max-content;
  }
`
