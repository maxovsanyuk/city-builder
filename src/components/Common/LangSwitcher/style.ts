import styled from 'styled-components'

import Colors from 'procredit-bank-design-system/modules/colors'
const { gray } = Colors

export const Wrapper = styled.div`
  .current-lang-box {
    position: relative;

    &:hover {
      cursor: pointer;
    }

    .lang {
      width: 30px;
      color: ${gray[8]};
      border-bottom: 2px solid ${gray[7]};
      text-transform: uppercase;
      margin: 0 15px 0 0;
    }

    .options-cont {
      width: min-content;
      height: min-content;
      position: absolute;
      border-radius: 14px;
      border: 2px solid ${gray[4]};
      overflow: hidden;
      top: 30px;
      left: 0;
      z-index: 100;

      .option {
        width: 100%;
        background: ${gray[1]};
        text-transform: uppercase;
        padding: 10px;

        &:last-of-type {
          border: none;
        }

        &:hover {
          background: ${gray[3]};
          cursor: pointer;
        }
      }

      .selected-lang {
        color: ${gray[4]};

        &:hover {
          cursor: not-allowed;
        }
      }
    }

    .rotate-arrow {
      transition: 0.4s;
      transform: rotateX(180deg);
    }
  }
`
