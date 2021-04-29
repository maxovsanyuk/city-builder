import styled from 'styled-components'
import { Colors } from 'procredit-bank-design-system'
const { gray } = Colors

export const Wrapper = styled.div`
  height: 100%;

  .card {
    height: calc(100% - 20px);
    margin: 20px 0 0 0;
    overflow: auto;
  }

  .steps {
    box-shadow: 0px -1px 0 0 ${gray[2]} inset;
  }

  .ant-card-body {
    height: 100%;
    padding: 24px 0 0 0;
  }

  .children {
    width: 100%;
    height: calc(100% - 64px);
    min-height: 200px;
    padding: 40px 24px 0 24px;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;

    .inputs-wrapper {
      width: 280px;
    }

    .additional-file-box {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      margin: 0 0 20px 0;
    }

    .upload-item {
      display: flex;
      align-items: end;
      flex-direction: column;
    }

    .ant-picker {
      width: 100%;
    }

    .ant-tooltip-inner {
      display: none;
    }

    .ant-form-item {
      margin-bottom: 0;
      margin-top: 20px;
    }

    .ant-upload-select-picture-card {
      margin: 0 24px 0 0 !important;
    }

    .ant-upload-list {
      display: flex;
      overflow: auto;
      padding: 0;
    }
  }
`
