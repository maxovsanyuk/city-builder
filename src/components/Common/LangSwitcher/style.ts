import styled from 'styled-components'
import { fontStyle } from '../../styles/fontStyle'

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
      ${({ theme }) => fontStyle(theme, 'md', 'normal', 'hd')};
      border-bottom: ${({ theme }) => `2px solid ${theme.colors.greySemiDark}`};
      text-transform: uppercase;
      margin: 0 15px 0 0;
    }

    .options-cont {
      position: absolute;
      border-radius: 14px;
      border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
      overflow: hidden;
      top: 40px;
      left: 0;

      .option {
        width: 100%;
        background: ${({ theme }) => theme.colors.white};
        ${({ theme }) => fontStyle(theme, 'sd', 'normal')};
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
        color: ${({ theme }) => theme.colors.grey};

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
