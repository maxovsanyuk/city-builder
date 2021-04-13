import { isMobile, isTablet, isDesktop } from 'react-device-detect'
import { css } from 'styled-components'

export const fontStyle = (
  theme: any,
  size: string | number = 'sm',
  weight = 'normal',
  lineHeight: string | number = 'sm'
) => {
  const deviceType = (isMobile && 'mobile') || (isTablet && 'tablet') || (isDesktop && 'desktop')

  const isCustomSize = Number.isInteger(size)
  const isCustomLineHeight = Number.isInteger(lineHeight)

  return css`
    font-size: ${isCustomSize ? `${size}px` : theme.fontStyle[`${deviceType}`].fontSize[size || 'sm']};
    line-height: ${isCustomLineHeight
      ? `${lineHeight}px`
      : theme.fontStyle[`${deviceType}`].fontSize[lineHeight || 'sm']};
    font-weight: ${theme.fontStyle.weight[weight || 'normal']};
  `
}
