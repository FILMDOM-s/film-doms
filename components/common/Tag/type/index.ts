import { HTMLAttributes } from 'react'

export interface TagProps
  extends Omit<HTMLAttributes<HTMLSpanElement>, 'color'> {
  color?: 'default' | 'orange'
}
