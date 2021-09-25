import styled from 'styled-components'

const Animation = styled.div`
  animation: ${({ transition }: Record<string, any>) =>
    `appearingComp ${transition}s ease-in-out 0s 1 normal forwards`};

  @keyframes appearingComp {
    0% {
      opacity: 0;
      ${({ withScale }: Record<string, any>) => withScale && 'transform: scale(0.95);'}
    }
    100% {
      opacity: 1;
      ${({ withScale }: Record<string, any>) => withScale && 'transform: scale(1);'}
    }
  }
`

interface AnimatedContainerProps {
  children: React.ReactElement
  style?: Record<string, string | number>
  className?: string
  withScale?: boolean
  transition?: number
}

export const AnimatedContainer: any = ({
  children,
  style,
  className,
  withScale = false,
  transition = 0.35,
}: AnimatedContainerProps) => {
  return (
    // @ts-ignore
    <Animation withScale={withScale} style={style} className={className} transition={transition}>
      {children}
    </Animation>
  )
}
