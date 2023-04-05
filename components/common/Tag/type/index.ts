import { HTMLAttributes } from 'react'

type Color = 'default' | 'orange' | 'white'

export interface TagProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  color?: Color
  fill?: 'true' | 'false'
}