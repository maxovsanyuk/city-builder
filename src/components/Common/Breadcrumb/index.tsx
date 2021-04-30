import styled from 'styled-components'
import { Breadcrumb } from 'procredit-bank-design-system'

const BreadcrumbStyled = styled(Breadcrumb)`
  // Remove item's underline from first icon
  & > span {
    &:first-of-type {
      & a {
        border-bottom: none !important;
        & .anticon {
          margin-right: 6px;
        }
        & span.breadcrumb-item-text {
          border-bottom: 2px solid rgba(120, 127, 144, 0.2);
          &:hover,
          &:focus {
            color: #787f90;
            border-color: rgba(120, 127, 144, 0.5);
          }
        }
      }
    }
  }
`

export default BreadcrumbStyled
