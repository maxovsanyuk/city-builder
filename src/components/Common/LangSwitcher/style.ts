import styled from 'styled-components'

import Colors from 'procredit-bank-design-system/modules/colors'
const { gray } = Colors

export const Wrapper = styled.div`
  .current-lang-box {
    display: flex;
    align-items: center;
    position: relative;

    &:hover {
      cursor: pointer;
    }

    .lang {
      width: max-content;
      color: ${({ theme }) => theme.colors.dark};
      border-bottom: ${`2px solid ${gray[7]}`};
      text-transform: uppercase;
      margin: 0 15px 0 0;
    }

    .options-cont {
      position: absolute;
      border-radius: 14px;
      border: ${`2px solid ${gray[7]}`};
      overflow: hidden;
      top: 40px;
      left: 0;

      .option {
        width: 100%;
        background: ${({ theme }) => theme.colors.white};
        text-transform: uppercase;
        padding: 10px;

        &:last-of-type {
          border: none;
        }

        &:hover {
          cursor: pointer;
        }
      }

      .selected-lang {
        color: ${gray[7]};

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
