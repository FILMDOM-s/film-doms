import { HTMLAttributes } from 'react'
import styled from '@emotion/styled'
import { colors } from '@/styles/emotion'

interface Props extends HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
  color?: string
  /**
   * @description px단위입니다.
   * @default 2
   */
  size?: number
}

const Divider = ({
  orientation = 'horizontal',
  color = colors.primary.black,
  size = 2,
}: Props) => {
  return <Hr orientation={orientation} color={color} size={size} />
}

const Hr = styled.hr<Pick<Props, 'orientation' | 'color' | 'size'>>`
  ${({ orientation, size }) =>
    orientation === 'horizontal'
      ? `width: 100%;
         height: ${size}px;`
      : `width: ${size}px;
         height: 100%;`};
  border-color: ${({ color }) => color};
`

export default Divider
