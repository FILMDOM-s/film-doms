import SwitchCase from '../SwitchCase'
import { Round, Square } from './Shape'
import { TagProps } from './type'

interface Props extends TagProps {
  shape?: 'square' | 'round'
}

const Tag = ({ shape = 'square', children, ...props }: Props) => {
  return (
    <SwitchCase
      value={shape}
      caseBy={{
        square: <Square {...props}>{children}</Square>,
        round: <Round {...props}>{children}</Round>,
      }}
      defaultRender={<Square {...props}>{children}</Square>}
    />
  )
}

export default Tag
