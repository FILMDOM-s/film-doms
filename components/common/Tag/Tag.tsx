import SwitchCase from '../SwitchCase'
import { Round, Square } from './Shape'
import { type TagProps } from './type'

interface RootProps {
  shape?: 'square' | 'round'
}

type Props<T extends As> = RootProps & TagProps<T>

const Tag = <T extends As = 'span'>({
  shape = 'square',
  children,
  as,
  ...props
}: Props<T>) => {
  const Component = (as ?? 'span') as As

  return (
    <SwitchCase
      value={shape}
      caseBy={{
        square: (
          <Square as={Component} {...props}>
            {children}
          </Square>
        ),
        round: (
          <Round as={Component} {...props}>
            {children}
          </Round>
        ),
      }}
      defaultRender={
        <Square as={Component} {...props}>
          {children}
        </Square>
      }
    />
  )
}

export default Tag
