import styled from 'styled-components'

import Colors from 'procredit-bank-design-system/modules/colors'
const { gray } = Colors

export const Wrapper = styled.div`
  .current-lang-box {
    width: 50px;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;

    &:hover {
      cursor: pointer;
    }

    .lang {
      width: max-content;
      height: max-content;
      max-height: max-content;
      color: ${({ theme }) => theme.colors.dark};
      border-bottom: ${`2px solid ${gray[7]}`};
      text-transform: uppercase;
    }

    .options-cont {
      position: absolute;
      border-radius: 14px;
      border: ${`2px solid ${gray[4]}`};
      overflow: hidden;
      top: 30px;
      left: 0;
      z-index: 100;

      .option {
        width: 100%;
        background: ${({ theme }) => theme.colors.white};
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
