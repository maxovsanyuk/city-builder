import styled, { CSSProp } from 'styled-components'

const Svg = styled.svg<{ css?: CSSProp }>`
  width: 1em;
  height: 1em;
  ${props => props.css && props.css};
`

interface SvgIcon {
  name: string
  className?: string
  css?: CSSProp
}

const reqSvgs = require.context('./icons', true, /\.svg$/)

const requireAll = (requireContext: any) => {
  return requireContext.keys().map(requireContext)
}

const icons = requireAll(reqSvgs).reduce(
  (state: any, icon: any) => ({
    ...state,
    [icon?.default?.id.slice(0, -6)]: icon?.default?.url,
  }),
  {}
)

export const SvgIcon: React.FC<SvgIcon> = ({ name, css, className }) => (
  <Svg {...{ key: name, css, className }}>
    <use xlinkHref={icons[name]} />
  </Svg>
)

// TODO: Usage <SvgIcon name="svg-name" />
